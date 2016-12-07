var loginPage = function(login, password, locatorName){
    element(by.css('.log')).click();
   element(by.model('user_l.username')).sendKeys(login);
   element(by.model('user_l.password')).sendKeys(password);
   element(by.css('button')).click();
    var getResult = element(by.css(locatorName));
    return getResult;
};
module.exports = loginPage;
