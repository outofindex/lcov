
var core = require('@actions/core')
var github = require('@actions/github')

;(async () => {
  try {
    var coverage = core.getInput('coverage')
    // core.setOutput('foo', bar)
    console.log('lcov', coverage)
  }
  catch (err) {
    core.setFailed(err.message)
  }
})()
