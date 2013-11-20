module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'build/app.js',
                dest: 'build/app.min.js'
            }
        },
        concat: {
            dist: {
                src: [
                    'src/app.js', 
                    'src/config/**/*.js',
                    'src/controllers/**/*.js',
                    'src/filters/**/*.js',
                    'src/directives/**/*.js',
                    'src/services/**/*.js'
                ],
                dest: 'build/app.js'
            }
        },
        watch: {
            scripts: {
                files: ['src/**/*.js'],
                tasks: ['default']
            }
        },
        wrap: {
            app: {
                src: ['build/app.js'],
                dest: '',
                options: {
                    wrapper: [
                        '(function(window, $, angular, undefined) {', 
                        '})(window, jQuery, angular);'
                    ]
                }
            }
        },
        cssmin: {
            app: {
                files: {
                    'build/app.min.css': ['css/style.css']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-wrap');

    // Default task(s).
    grunt.registerTask('default', ['concat', 'wrap', 'uglify', 'cssmin']);

};