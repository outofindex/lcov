
var fs = require('fs')
var core = require('@actions/core')
var compose = require('request-compose')


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
  return svg
}

var pipeline = compose(
  percentage,
  badge,
)

;(async () => {
  try {
    var svg = await pipeline(process.env.INPUT_COVERAGE)
    fs.writeFileSync('coverage.svg', svg)
  }
  catch (err) {
    core.setFailed(err.message)
  }
})()
