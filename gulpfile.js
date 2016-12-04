/**
 * Created by Николай on 04.12.2016.
 */
var protractor = require('gulp-protractor').protractor;
var gulp = require('gulp');
var webdriver_update = require("gulp-protractor").webdriver_update;
var webdriver_standalone = require("gulp-protractor").webdriver_standalone;
var connect = require('gulp-connect');

gulp.task('StartServer', function() {
    connect.server(
        {
            port: 1717
        }
    );
});
gulp.task('StartWU', webdriver_update);
gulp.task('StartWD', webdriver_standalone);

gulp.task('StartPT', function() {
    gulp.src(['test/hudkov.js']).pipe(protractor({
        configFile: 'test/protractor.c.js',
        args: ['--baseUrl', 'http://localhost:1717']
    })).on('error', function(e) {
        console.log(e)
    });
});
gulp.task('default',['StartServer','StartWD','StartPT']);
gulp.task('StartSWD',['StartServer','StartWD']);
gulp.task('StartSWU',['StartWU']);