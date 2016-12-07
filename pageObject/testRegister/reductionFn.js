var regPage = function(login, password, mail){
    element(by.css('.reg')).click();
    element(by.model('user_r.username')).sendKeys(login);
    element(by.model('user_r.password')).sendKeys(password);
    element(by.model('user_r.mail')).sendKeys(mail);
    element(by.css('button')).click();
    var getResult = element(by.css('h4')).getText();
    return getResult;
};

module.exports = regPage;