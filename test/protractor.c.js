/**
 * Created by Николай on 02.12.2016.
 */

exports.config = {
    capabilities:
        {
            'browserName': 'chrome'
        },
    framework: 'jasmine',
    jasmineNodeOpts: {
        defaultTimeoutInterval: 7000
    },
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: 'hudkov.js',
    allScriptsTimeout:  7000,
    onPrepare: function() {
        var jasmineReporters = require('jasmine-reporters');
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            consolidateAll: true,
            savePath: 'testReports',
            filePrefix: 'Report'
        })
        );
    }
};