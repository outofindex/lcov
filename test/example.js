
var t = require('assert')

process.env.INPUT_COVERAGE = '> lcov@0.0.0 test:cov /home/runner/work/lcov/lcov > npx nyc --reporter=lcov --reporter=text-summary mocha -- --recursive foo ✓ bar 1 passing (2ms) =============================== Coverage summary =============================== Statements : 58.62% ( 17/29 ) Branches : 0% ( 0/2 ) Functions : 50% ( 3/6 ) Lines : 60.71% ( 17/28 ) ================================================================================'
var lcov = require('../lcov')

describe('foo', () => {
  it('bar', () => {
    t.equal(2, 2)
  })
})
