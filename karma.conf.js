// Karma configuration
// Generated on Fri Aug 01 2014 11:58:40 GMT-0700 (PDT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
        'src/test/webapp/resources/javascript/js/jquery.min.js',
        'src/test/webapp/resources/javascript/js/jasmine.js',
        'src/test/webapp/resources/javascript/js/jasmine-html.js',
        'src/test/webapp/resources/javascript/js/boot-without-load.js',
        'src/test/webapp/resources/javascript/**/*spec.js'
    ],

    // list of files to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },

    reporters: ['progress', 'osx'],
      
    // web server port
    port: 9876,

	// skip karma
	skipKarma: false,

	// skip tests
	skipTests: false,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
