
var esbuild = require('esbuild')

;(async () => {
  try {
    await esbuild.build({
      entryPoints: ['./lcov.js'],
      bundle: true,
      minify: true,
      outfile: './dist/lcov.js',
      platform: 'node',
    })
  }
  catch (err) {
    process.exit(1)
  }
})()
