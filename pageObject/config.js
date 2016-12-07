exports.config = {
    capabilities:
    {
        'browserName': 'chrome'
    },
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['testRegister/test.e2e.register.js','testLogin/test.e2e.login.js'],
    onPrepare: function() {
        var jasmineReporters = require('jasmine-reporters');
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
                consolidateAll: true,
                savePath: 'testReportsWithPageObject',
                filePrefix: 'ReportPageObject'
            })
        );
    }
};