var regPage  = require('./reductionFn');

describe('Test with Registration Page', function() {
    beforeEach(function () {
        browser.get('http://localhost:1818/');
    });
    it('Does work button \'Registration\'? must compare url', function () {
        element(by.css('.reg')).click();
        expect(browser.getCurrentUrl()).toBe('http://localhost:1818/#/registretion');
    });
    it('This test-suite should return error, then equal error with text', function () {
        expect(regPage('Nick','','').getText()).toEqual('Error, fill all input');
    });
    it('Should compare text error with text \'Error\'', function () {
        expect(regPage('','1111','').getText()).toMatch('Error');
    });
    it('Should compare text error with text \'Error, fill all input\'', function () {
        expect(regPage('','','NickHud@gmail.com').getText()).toBe('Error, fill all input');
    });
    it('Compare positive test-suite with text \'Success, wait\'', function () {
        expect(regPage('Nick', '1111', 'NickHud@gmail.com').getText()).toEqual('Success, wait');
    });
    it('Compare path url, negative test-suite', function () {
        regPage('Nickola','1111','');
        expect(browser.getLocationAbsUrl()).toBe('/registretion');
    });
    it('Compare path url, positive test-suite', function () {
        regPage('Nickola','1111','NickHud@gmail.com');
        expect(browser.getLocationAbsUrl()).toBe('/registretion');
    });
});
