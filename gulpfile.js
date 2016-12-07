var gulpProtractorAngular = require('gulp-angular-protractor');
var gulp = require('gulp');
var webdriver_standalone = require("gulp-protractor").webdriver_standalone;
var connect = require('gulp-connect');

gulp.task('StartServer', function() {
    connect.server(
        {
            port: 1818
        }
    );
});

gulp.task('StartWD', webdriver_standalone);

gulp.task('StartProtractor', function(callback) {
    gulp.src(['test/hudkov.js'])
        .pipe(gulpProtractorAngular({
            configFile: 'test/protractor.c.js'
        })).on('error', function(e) {
            console.log(e);
        }).on('end', callback);
});

gulp.task('e2eTestPageObject', function(callback) {
    gulp.src(['pageObject/testLogin/test.e2e.login.js', 'pageObject/testRegister/test.e2e.register.js'])
        .pipe(gulpProtractorAngular({
            configFile: 'pageObject/config.js'
        })).on('error', function(e) {
            console.log(e);
        }).on('end', callback);
});

gulp.task('defaultWait',['StartServer','StartWD','StartProtractor']);
gulp.task('default',['StartServer','StartWD','e2eTestPageObject']);