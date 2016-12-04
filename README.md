# appwithUseCase
Application with e2e testing
<br>
Установить все пакеты требующиеся в package.json и bower.json командами:
<br>
<b>npm install</b>
<br>
<b>bower install</b>
<br>
Проект запустить с помощью команд:
<br>
<b>gulp StartSWU</b>   //-обновляет webdriver == команда <b>webdriver-manager update</b>;
<br>
<b>gulp StartSWD</b>   //- запускает webdriver и сервер ;
<br>
<b>protractor test/protractor.c.js</b>  //- запускает e2e тесты;
<br>
или с помощью: 
<br>
<b>gulp</b>  //-запускает webdriver, сервер и е2е тесты  - интервал теста составляет 7 секунд;
<br>
-//--(тесты проходят) выдает ошибки timeOut, решить данную проблему так и не успел(долго искал решение);
<br>
*разница между командами в том, что одна выдает ошибки timeOut, а другая нет; 
