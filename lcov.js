
var fs = require('fs')
var core = require('@actions/core')
var github = require('@actions/github')
var compose = require('request-compose')
var request = compose.buffer


var percentage = (summary) => {
  var regex = [
    /Statements : (.*?)%/,
    /Branches : (.*?)%/,
    /Functions : (.*?)%/,
    /Lines : (.*?)%/,
  ]
  var percentage = regex
    .map((regex) => parseFloat(regex.exec(summary)[1]))
    .reduce((all, stat) => all += stat) / regex.length
  return parseFloat(percentage.toFixed(2))
}

var badge = async (percentage) => {
  var label = 'coverage'
  var message = percentage
  var colors = [
    {threshold: 95, color: 'brightgreen'},
    {threshold: 90, color: 'green'},
    {threshold: 85, color: 'yellowgreen'},
    {threshold: 80, color: 'yellow'},
    {threshold: 75, color: 'orange'},
    {threshold: 70, color: 'red'},
  ]
  var {color} =
    colors.find(({threshold, color}) => percentage >= threshold) ||
    {color: 'red'}
  var {body:svg} = await request({
    url: `https://img.shields.io/badge/${label}-${message}-${color}`,
    qs: {style: 'flat-square'}
  })

  // push to the docs branch
  fs.writeFileSync('coverage.svg', svg)
  // push the coverage/lcov-report

  console.log(process.cwd())
  console.log(fs.readdirSync(process.cwd()))
}

var pipe = compose(
  percentage,
  badge,
)

;(async () => {
  try {
    var summary = core.getInput('coverage')
    // testing
    // var summary = "lcov '> lcov@0.0.0 test:cov /home/runner/work/lcov/lcov > npx nyc --reporter=lcov --reporter=text-summary mocha -- --recursive lcov foo ✓ bar 1 passing (3ms) =============================== Coverage summary =============================== Statements : 85.71% ( 6/7 ) Branches : 100% ( 0/0 ) Functions : 100% ( 1/1 ) Lines : 85.71% ( 6/7 ) ================================================================================'"
    // core.setOutput('foo', bar)

    await pipe(summary)
  }
  catch (err) {
    core.setFailed(err.message)
  }
})()
