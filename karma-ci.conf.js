// Karma configuration
module.exports = function(config) {
	require("./karma.conf")(config);
	config.set({
		
		basePath: 'webapp',
		
		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors: {
			'{,!(test)}/*.js': ['coverage']
		},

		frameworks: ['qunit'],

		coverageReporter: {
			includeAllSources: true,
			reporters: [
				{
					type: 'html',
					dir: '../coverage/'
				},
				{
					type: 'text'
				}
			],
			check: {
				each: {
					statements: 0,
					branches: 0,
					functions: 0,
					lines: 0
				}
			}
		},

		client: {
			qunit: {
				showUI: false
			}
		},

		// test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		reporters: ['progress', 'coverage'],

		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers: ['PhantomJS'],

		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: true

	});
};