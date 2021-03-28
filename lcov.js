
var fs = require('fs')
var core = require('@actions/core')
// var github = require('@actions/github')
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
  var {body:svg} = await compose.buffer({
    url: `https://img.shields.io/badge/${label}-${message}-${color}`,
    qs: {style: 'flat-square'}
  })
  fs.writeFileSync('coverage.svg', svg)
}

var github = async () => {
  var {res, body} = await compose.client({
    method: 'GET',
    url: 'https://api.github.com/rate_limit',
    headers: {
      authorization: `Bearer ${process.env.INPUT_TOKEN}`,
      'user-agent': 'request-compose',
    }
  })
}

var pipeline = compose(
  percentage,
  badge,
  github,
)

/*
  - push to the docs branch
  - push the coverage/lcov-report
*/

;(async () => {
  try {
    var summary = process.env.INPUT_COVERAGE
    await pipeline(summary)
  }
  catch (err) {
    core.setFailed(err.message)
  }
})()
