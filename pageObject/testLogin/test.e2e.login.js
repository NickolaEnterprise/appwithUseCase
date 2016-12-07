var loginPage   = require('./reductionFn');

describe('Test login page objects', function() {
    beforeEach(function () {
        browser.get('http://localhost:1818/');
    });
    it('Does work button \'Login\'? must compare url', function () {
        element(by.css('.log')).click();
        expect(browser.getCurrentUrl()).toBe('http://localhost:1818/#/login');
    });
    it('Should compare text errorMessage with text \'Error, fill all input\'', function () {
        expect(loginPage('ggfasfasf', 'fsdfsdfsfs', 'h4').getText()).toEqual('Error, You don\'t use password or Your password have mistake');
    });
    it('Should find word \'Error\' in result test-suite', function () {
        expect(loginPage('Nickola', '', 'h4').getText()).toMatch('Error');
    });
    it('Should compare text errorMessage with text \'Error, use You nicknamet\'', function () {
        expect(loginPage('', '1111', 'h4').getText()).toEqual('Error, use You nickname');
    });
    it('Should compare url when user login', function () {
        loginPage('Nickola', '1111', '');
        expect(browser.getLocationAbsUrl()).toBe('/home');
    });
    it('Should compare text when user login', function () {
        expect(loginPage('HudkovNickola', '1111', 'h2').getText()).toBe('Hello, HudkovNickola');
    });
    it('Should compare url when user logout', function () {
        loginPage('Nickola', '1111', 'input').click();
        expect(browser.getLocationAbsUrl()).toBe('/');
    });
});
