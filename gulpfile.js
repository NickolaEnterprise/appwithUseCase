/**
 * Created by Николай on 04.12.2016.
 */
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

gulp.task('default',['StartServer','StartWD','StartProtractor']);
