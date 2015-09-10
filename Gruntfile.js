'use strict';
var LIVERELOAD_PORT = 35729;
var SERVER_PORT = 9000;
var lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT});
var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to match all subfolders:
// 'test/spec/**/*.js'
// templateFramework: 'lodash'

module.exports = function (grunt) {
    // show elapsed time at the end
    require('time-grunt')(grunt);
    // load all grunt tasks
    require('load-grunt-tasks')(grunt);

    // configurable paths
    var yeomanConfig = {
        app: 'app',
        dist: 'dist'
    };

    grunt.initConfig({
        yeoman: yeomanConfig,
        watch: {
            options: {
                nospawn: true,
                livereload: LIVERELOAD_PORT
            },
            sass: {
                files: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
                tasks: ['sass:server']
            },
            livereload: {
                options: {
                    livereload: grunt.option('livereloadport') || LIVERELOAD_PORT
                },
                files: [
                    '<%= yeoman.app %>/*.html',
                    //'{.tmp,<%= yeoman.app %>/styles/{,*/}*.{scss,sass}',
                    '{.tmp,<%= yeoman.app %>}/styles/{,*/}*.css',
                    '{.tmp,<%= yeoman.app %>}/scripts/{,*/}*.js',
                    '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp}',
                    '<%= yeoman.app %>/scripts/templates/*.{ejs,mustache,hbs}',
                    'test/spec/**/*.js'
                ]
            },
            jst: {
                files: [
                    '<%= yeoman.app %>/scripts/templates/*.ejs'
                ],
                tasks: ['jst']
            },
            test: {
                files: ['<%= yeoman.app %>/scripts/{,*/}*.js', 'test/spec/**/*.js'],
                tasks: ['test:true']
            }
        },
        connect: {
            options: {
                port: grunt.option('port') || SERVER_PORT,
                hostname: 'localhost',
                base: '<%= yeoman.app %>',
                open: true,
                middleware: function (connect, options, mw) {
                    //var mw = [];
                    /* rewrite the path as a hash after the index for the app to parse and strip trailing slash
                     don't match if route contains '#' since that means we've already redirected
                     don't match if route contains '.' since we don’t want to redirect files */
                    var expressions = [
                        '^\/(.*)/$ /$1 [R]',
                        '^\/([^#.?]+)(\\?.*)?$ /$2#$1 [R,L]'
                    ];
                    // https://www.npmjs.com/package/connect-modrewrite
                    mw.push(require('connect-modrewrite')(expressions));
                    for (var i = 0, l = options.base.length; i < l; i++) {
                        mw.push(connect.static(options.base[i]));
                    }

                    return mw;
                }
            },
            livereload: {
                options: {
                    middleware: function (connect, options, mw) {
                        var expressions = [
                            '^\/(.*)/$ /$1 [R]',
                            '^\/([^#.?]+)(\\?.*)?$ /$2#$1 [R,L]'
                        ];
                        // https://www.npmjs.com/package/connect-modrewrite
                        mw.push(require('connect-modrewrite')(expressions));
                        for (var i = 0, l = options.base.length; i < l; i++) {
                            mw.push(connect.static(options.base[i]));
                        }
                            
                        return mw.concat([
                            lrSnippet,
                            mountFolder(connect, '.tmp'),
                            mountFolder(connect, yeomanConfig.app)
                        ]);
                    }
                }
            },
            test: {
                options: {
                    port: 9001,
                    middleware: function (connect, options, mw) {
                        var expressions = [
                            '^\/(.*)/$ /$1 [R]',
                            '^\/([^#.?]+)(\\?.*)?$ /$2#$1 [R,L]'
                        ];
                        // https://www.npmjs.com/package/connect-modrewrite
                        mw.push(require('connect-modrewrite')(expressions));
                        for (var i = 0, l = options.base.length; i < l; i++) {
                            mw.push(connect.static(options.base[i]));
                        }
                            
                        return mw.concat([
                            mountFolder(connect, 'test'),
                            lrSnippet,
                            mountFolder(connect, '.tmp'),
                            mountFolder(connect, yeomanConfig.app)
                        ]);
                    }
                }
            },
            dist: {
                options: {
                    middleware: function (connect, options, mw) {
                        var expressions = [
                            '^\/(.*)/$ /$1 [R]',
                            '^\/([^#.?]+)(\\?.*)?$ /$2#$1 [R,L]'
                        ];
                        // https://www.npmjs.com/package/connect-modrewrite
                        mw.push(require('connect-modrewrite')(expressions));
                        for (var i = 0, l = options.base.length; i < l; i++) {
                            mw.push(connect.static(options.base[i]));
                        }
                            
                        return mw.concat([
                            mountFolder(connect, yeomanConfig.dist)
                        ]);
                    }
                }
            }
        },
        open: {
            server: {
                path: 'http://localhost:<%= connect.options.port %>'
            },
            test: {
                path: 'http://localhost:<%= connect.test.options.port %>'
            }
        },
        clean: {
            dist: {
                src: ['.tmp/**/*','dist/**/*'],
                filter: function(filepath) {
                    if (!grunt.file.isDir(filepath)) { return true; }
                    return (fs.readdirSync(filepath).length === 0);
                }
            },
            server: {
                src: ['.tmp/**/*'],
                filter: function(filepath) {
                    if (!grunt.file.isDir(filepath)) { return true; }
                    return (fs.readdirSync(filepath).length === 0);
                }
            }
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: [
                'Gruntfile.js',
                '<%= yeoman.app %>/scripts/{,*/}*.js',
                '!<%= yeoman.app %>/scripts/vendor/*',
                'test/spec/{,*/}*.js'
            ]
        },
        mocha: {
            all: {
                options: {
                    run: true,
                    urls: ['http://localhost:<%= connect.test.options.port %>/index.html']
                }
            }
        },
        sass: {
          options: {
            sourceMap: true,
            includePaths: ['app/bower_components']
            },
          dist: {
            files: [{
              expand: true,
              cwd: '<%= yeoman.app %>/styles',
              src: ['*.{scss,sass}'],
              dest: '.tmp/styles',
              ext: '.css'
            }]
          },
          server: {
            files: [{
              expand: true,
              cwd: '<%= yeoman.app %>/styles',
              src: ['*.{scss,sass}'],
              dest: '.tmp/styles',
              ext: '.css'
            }]
          }
        },
        // not enabled since usemin task does concat and uglify
        // check index.html to edit your build targets
        // enable this task if you prefer defining your build targets here
        /*uglify: {
            dist: {}
        },*/
        useminPrepare: {
            html: '<%= yeoman.app %>/index.html',
            options: {
                dest: '<%= yeoman.dist %>'
            }
        },
        usemin: {
            html: ['<%= yeoman.dist %>/{,*/}*.html'],
            css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
            options: {
                basedir: '<%= yeoman.app %>',
                dirs: ['<%= yeoman.app %>','<%= yeoman.dist %>']
            }
        },
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/images',
                    src: '{,*/}*.{png,jpg,jpeg}',
                    dest: '<%= yeoman.dist %>/images'
                }]
            }
        },
        cssmin: {
            dist: {
                files: {
                    '<%= yeoman.dist %>/styles/main.css': [
                        '.tmp/styles/{,*/}*.css',
                        '<%= yeoman.app %>/styles/{,*/}*.css'
                    ]
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    //removeCommentsFromCDATA: true,
                    // https://github.com/yeoman/grunt-usemin/issues/44
                    //collapseWhitespace: true,
                    collapseBooleanAttributes: true,
                    //removeAttributeQuotes: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true,
                    removeEmptyAttributes: true,
                    removeOptionalTags: true,
                    keepClosingSlash: true,
                    caseSensitive: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>',
                    src: '*.html',
                    dest: '<%= yeoman.dist %>'
                }]
            }
        },
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>',
                    dest: '<%= yeoman.dist %>',
                    src: [
                        '*.{ico,txt}',
                        'images/{,*/}*.{webp,gif}',
                        'styles/fonts/{,*/}*.*',
                        'bower_components/bootstrap-sass-official/assets/fonts/bootstrap/*.*'
                    ]
                }, {
                    src: 'node_modules/apache-server-configs/dist/.htaccess',
                    dest: '<%= yeoman.dist %>/.htaccess'
                }]
            }
        },
        jst: {
            compile: {
                files: {
                    '.tmp/scripts/templates.js': ['<%= yeoman.app %>/scripts/templates/*.ejs']
                }
            }
        },
        rev: {
            dist: {
                files: {
                    src: [
                        '<%= yeoman.dist %>/scripts/{,*/}*.js',
                        '<%= yeoman.dist %>/styles/{,*/}*.css',
                        '<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp}',
                        '/styles/fonts/{,*/}*.*',
                        'bower_components/bootstrap-sass-official/assets/fonts/bootstrap/*.*'
                    ]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-compass');

    grunt.registerTask('build',['compass:prod']);
    grunt.registerTask('default',['watch']);

    grunt.registerTask('createDefaultTemplate', function () {
        grunt.file.write('.tmp/scripts/templates.js', 'this.JST = this.JST || {};');
    });

    grunt.registerTask('server', function (target) {
        grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
        grunt.task.run(['serve' + (target ? ':' + target : '')]);
    });

    grunt.registerTask('serve', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'open:server', 'connect:dist:keepalive']);
        }

        if (target === 'test') {
            return grunt.task.run([
                'clean:server',
                'createDefaultTemplate',
                'jst',
                'sass:server',
                'connect:test',
                'open:test',
                'watch'
            ]);
        }

        grunt.task.run([
            'clean:server',
            'createDefaultTemplate',
            'jst',
            'sass:server',
            'connect:livereload',
            'open:server',
            'watch'
        ]);
    });

    grunt.registerTask('test', function (isConnected) {
        isConnected = Boolean(isConnected);
        var testTasks = [
                'clean:server',
                'createDefaultTemplate',
                'jst',
                'sass',
                'connect:test',
                'mocha',
            ];

        if(!isConnected) {
            return grunt.task.run(testTasks);
        } else {
            // already connected so not going to connect again, remove the connect:test task
            testTasks.splice(testTasks.indexOf('connect:test'), 1);
            return grunt.task.run(testTasks);
        }
    });


    grunt.registerTask('build', [
        'clean:dist',
        'createDefaultTemplate',
        'jst',
        'sass:dist',
        'useminPrepare',
        'imagemin',
        'htmlmin',
        'concat',
        'cssmin',
        'uglify',
        'copy',
        'rev',
        'usemin'
    ]);

    grunt.registerTask('default', [
        'jshint',
        'test',
        'build'
    ]);
};
