var HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {

	directConnect: true,
	capabilities: {
		'browserName': 'chrome',
		chromeOptions: {
			args: ['--disable-gpu']
		}
	},

	framework: 'jasmine2',

	specs: [
		"test-suites/*/*.spec.js",
	],

	allScriptsTimeout: 12000,
	jasmineNodeOpts: {
		showColors: true,
		defaultTimeoutInterval: 12000,
		isVerbose: true
	},

	onPrepare: () => {
		browser.manage().window().maximize();
		browser.manage().timeouts().implicitlyWait(3000);

		jasmine.getEnv().addReporter(new HtmlReporter({
			baseDirectory: 'test-results',
			preserveDirectory: false, // Preserve base directory
			screenshotsSubfolder: 'screenshots',
			jsonsSubfolder: 'jsons', // JSONs Subfolder
			takeScreenShotsForSkippedSpecs: true, // Screenshots for skipped test cases
			takeScreenShotsOnlyForFailedSpecs: false, // Screenshots only for failed test cases
			docTitle: 'Test Automation Execution Report', // Add title for the html report
			docName: 'TestResult.html', // Change html report file name
			gatherBrowserLogs: true // Store Browser logs
		}).getJasmine2Reporter());
	}
};