# appwithUseCase
Application with e2e testing
Установить все пакеты требующиеся в package.json и bower.json командами:
npm install
bower install
Проект запустить с помощью команд:
gulp StartSWU   //-обновляет webdriver == команда webdriver-manager update;
gulp StartSWD   //- запускает webdriver и сервер ;
protractor test/protractor.c.js  //- запускает e2e тесты;
или с помощью: 
gulp  //-запускает webdriver, сервер и е2е тесты  - интервал теста составляет 7 секунд;
-//--(тесты проходят) выдает ошибки timeOut, решить данную проблему так и не успел(долго искал решение);
*разница между командами в том, что одна выдает ошибки timeOut, а другая нет; 
