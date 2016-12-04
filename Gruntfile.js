/**
 * Created by Николай on 04.12.2016.
 */
module.exports = function(grunt) {

    grunt.initConfig({
        'http-server': {
            'dev': {
                root: '',
                port: 1818,
                host: "0.0.0.0"
            }
        },
        protractor: {
            e2e: {
                options: {
                    configFile: 'test/protractor.c.js'
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-protractor-runner');
    grunt.loadNpmTasks('grunt-protractor-webdriver');
grunt.loadNpmTasks('grunt-http-server');

    grunt.registerTask('default', 'http-server');
    grunt.registerTask('e2e', 'protractor:e2e');
};