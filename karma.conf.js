module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'browserify', 'expect', 'sinon'],
    files: [
      'test-alien-bind.js'
    ],
    exclude: [
      'karma.conf.js'
    ],
    preprocessors: {
      'test-alien-bind.js': ['browserify'],
      'alien-bind.js': ['browserify']
    },
    browserify: {
      debug: true
    },
    reporters: ['spec'],
    logLevel: config.LOG_INFO,
    browsers: ['Chrome']
  })
}
