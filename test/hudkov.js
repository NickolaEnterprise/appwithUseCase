/**
 * Created by Николай on 02.12.2016.
 */
    //vitalii.sergey@gmail.com
describe('Главный набор тестов:', function() {
    var eRS;
    var eMS;
    var eMSU;
    var eMSW;
    var eMSC;
    beforeEach(function () {
        browser.get('http://localhost:1818/');
        eRS = element.all(by.repeater('stat in stepStat'));
        eMS = element(by.model('search'));
        eMSU = element(by.model('step.username'));
        eMSW = element(by.model('step.web'));
        eMSC = element(by.model('step.comment'));
    });
    describe('a) Набор тестов всех вариантов использование поиска по таблице', function () {
        it('1)Поиск по заданому значанию Nickola и сравнение с полученным результатом', function () {
            eMS.sendKeys('Nickola');
            expect(eRS.get(0).getText()).toEqual('Nickola It repository');
        });
        it('2)Поиск по заданому значанию "User", получить количевство отоброных результатов и сравнить', function () {
            eMS.sendKeys('User');
            expect(eRS.count()).toBe(4);
        });
        it('3)Поиск по некорректному значению и сравнение результата с несуществющим значение', function () {
            eMS.sendKeys('sadsafsdfsd11111fsafaf');
            expect(eRS.getText()).toBeDefined();
        });
        it('4)Поиск по таблице заданое значение', function () {
            expect(eRS.getText()).toMatch('video');
        });
        xit('5)Переход на другой сайт', function () {
            eMS.sendKeys('Nickola');
            expect(element(by.css('a')).click()).toBeFalsy();;
        });
        xit('6)Проверка перехода на все другие сайты', function () {
            var click = element.all(by.css('a')).click();
            expect(click).toBeTruthy();
        });
    });

    describe("b) Набор тестов с работой формы добавления", function()
    {
        it('1)Проверка на добаление введенных данных', function () {
            eMSU.sendKeys('Nickola Hudkov');
            eMSW.sendKeys('www.intexsoft.by');
            eMSC.sendKeys('The best company');
            element(by.className('btn-primary')).click();
            expect(eRS.count()).toBe(6);
        });
        it('2)Проверка на удаление введенных данных', function () {
            eMSU.sendKeys('Nickola Hudkov');
            eMSW.sendKeys('www.intexsoft.by');
            eMSC.sendKeys('The best company');
            element(by.className('Click')).click();
            expect(eRS.count()).toBe(4);
        });
        it('3)Нажате кнопки без ввода данных', function () {
            element(by.className('btn-primary')).click();
            expect(eRS.count()).toBe(6);
        });
        it('4)Удаление всех элементов', function () {
            element.all(by.className('Click')).click();
            expect(eRS.count()).toBe(0);
        });
        it('5)Добавление и удаление данных', function () {
            var i = 0;
            while (i < 7) {
                element(by.className('btn-primary')).click();
                i++;
            }
            element(by.className('Click')).click();
            expect(eRS.count()).toBe(11);
        });
        it('6)Добавление 3 строки, удаление 2 строки данных', function () {
            eMSU.sendKeys('Nickola Hudkov');
            eMSW.sendKeys('www.intexsoft.by');
            eMSC.sendKeys('The best company');
            element(by.className('btn-primary')).click();
            eMSU.sendKeys('Person 1');
            eMSW.sendKeys('www.intexsoft.by');
            eMSC.sendKeys('The best company');
            element(by.className('btn-primary')).click();
            eMSU.sendKeys('Person 2');
            eMSW.sendKeys('www.intexsoft.by');
            eMSC.sendKeys('The best company');
            element(by.className('btn-primary')).click();
            var i = 0;
            while (i < 2) {
                element(by.className('Click')).click();
                i++;
            }
            expect(eRS.count()).toBe(6);
        });
        xit('7)Переход на сайт введенных данных', function () {
        eMSU.sendKeys('Nickola Hudkov');
        eMSW.sendKeys('www.intexsoft.by');
        eMSC.sendKeys('The best company');
        var boom = element(by.css('a')).click();
        expect(boom).toBeFalsy();
    });
    });
    describe("с) Тест всей функциональности e2e", function()
    {
        it('1)E2E test', function () {
            eMSU.sendKeys('Hudkov');
            eMSW.sendKeys('github.com/HudkovNickola');
            eMSC.sendKeys('My Repository');
            element(by.className('btn-primary')).click();
            eMS.sendKeys('Hud')
            element(by.css('a')).click();
            element(by.className('Click')).click();
            expect(eRS.count()).toBe(0);
        });
    });
});