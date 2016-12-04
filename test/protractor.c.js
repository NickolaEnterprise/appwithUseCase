/**
 * Created by Николай on 02.12.2016.
 */

exports.config = {
    capabilities:
        {
            'browserName': 'chrome'
        },
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: 'hudkov.js',
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
