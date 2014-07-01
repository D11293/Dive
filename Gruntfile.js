'use strict';
module.exports = function (grunt) {
    grunt.loadNpmTasks('assemble');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-ftp-deploy');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    // show elapsed time at the end
    require('time-grunt')(grunt);
    // load all grunt tasks
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        'yeoman': {
            app: 'app',
            dist: 'dist'
        },
        'watch': {
           compass: {
            files: ['<%= yeoman.app %>/scss/**/*.{scss,sass}'],
            tasks: ['compass', 'autoprefixer']
        },
        styles: {
        files: ['<%= yeoman.app %>/scss/{,*/}*.scss'],
        tasks: ['copy', 'autoprefixer']
    },
        htmls: {
        files: ['<%= yeoman.app %>/templates/{,*/}*.hbs'],
        tasks: ['assemble', 'autoprefixer']
    },
     
    livereload: {
        options: {
            livereload: '<%= connect.options.livereload %>'
        },
        files: [
    '.tmp/{,*/}*.html',
    '.tmp/css/*.css',
'{.tmp,<%= yeoman.app %>}/js/{,*/}*.js',
'<%= yeoman.app %>/img/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
]
},
assemble: {
    files: ['<%= yeoman.app %>/templates/layouts/*.hbs',
'<%= yeoman.app %>/templates/pages/{,*/}*.hbs',
'<%= yeoman.app %>/templates/partials/{,*/}*.hbs'],
tasks: ['assemble']
}
},
'connect': {
    options: {
        port: 9000,
        livereload: 35729,
                // change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    open: true,
                    base: [
                    '.tmp',
                    '<%= yeoman.app %>'
                    ]
                }
            },
            test: {
                options: {
                    base: [
                    '.tmp',
                    'test',
                    '<%= yeoman.app %>'
                    ]
                }
            },
            dist: {
                options: {
                    open: true,
                    base: '<%= yeoman.dist %>'
                }
            }
        },
        'clean': {
            dist: {
                files: [{
                    dot: true,
                    src: [
                    '.tmp/**/*',
                    '<%= yeoman.dist %>/*',
                    '!<%= yeoman.dist %>/.git*'
                    ]
                }]
            },
            server: '.tmp/**/*',
            wamp: {
        options: { force: true },
        files: [{
            dot: true,
            src: 'C:/wamp/www/*'
        }]
    }, 
        },
        // jshint: {
        //   options: {
        //     jshintrc: '.jshintrc'
        // },
        // all: [
        // 'Gruntfile.js',
        // '<%= yeoman.app %>/js/{,*/}*.js',
        // '!<%= yeoman.app %>/js/vendor/*',
        // 'test/spec/{,*/}*.js'
        // ]
        // },
        'mocha': {
            all: {
                options: {
                    run: true,
                    urls: ['http://<%= connect.test.options.hostname %>:<%= connect.test.options.port %>/index.html']
                }
            }
        },
        'compass': {
            options: {
                sassDir: '<%= yeoman.app %>/scss',
                cssDir: '.tmp/css',
                generatedImagesDir: '.tmp/img/generated',
                imagesDir: '<%= yeoman.app %>/img',
                javascriptsDir: '<%= yeoman.app %>/js',
                fontsDir: '<%= yeoman.app %>/fonts',
                importPath: '<%= yeoman.app %>/_bower_components',
                httpImagesPath: '/img',
                httpGeneratedImagesPath: '/img/generated',
                httpFontsPath: '/fonts',
                relativeAssets: false,
                assetCacheBuster: false
            },
            dist: {
                options: {
                    generatedImagesDir: '<%= yeoman.dist %>/img/generated'
                }
            },
            server: {
                options: {
                    debugInfo: true
                }
            }
        },
        'autoprefixer': {
            options: {
                browsers: ['last 1 version']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/css/',
                src: '{,*/}*.css',
                dest: '.tmp/css/'
            }]
        }
    },
    'compress': {
        boilerplate: {
            options: {
                archive: '<%= yeoman.dist %>/DiVE-boilerplate.zip',

            },
            files: [{
                expand: true,
                cwd: '<%= yeoman.dist %>/img/',
                src: ['*', '!dive-docs-img/*'],
                dest: 'img',
                filter: 'isFile'
            }, {
                expand: true,
                cwd: '<%= yeoman.dist %>/css/',
                src: ['*', '!dive_doc.css'],
                dest: 'css/',
                filter: 'isFile'
            }, {
                expand: true,
                cwd: '<%= yeoman.dist %>/js/',
                src: ['**', '!doc/*'],
                dest: 'js/',
                filter: 'isFile'
            }, {
                expand: true,
                cwd: '<%= yeoman.dist %>/fonts/',
                src: ['*'],
                dest: 'fonts/',
                filter: 'isFile'
            }, {
                expand: true,
                cwd: '<%= yeoman.app %>/_boilerplate/',
                src: ['*'],
                dest: '/',
                filter: 'isFile'
            }, {
                expand: true,
                cwd: '<%= yeoman.dist %>/',
                src: ['favicon.ico', 'robots.txt', '.htaccess'],
                dest: '/',
                filter: 'isFile'
            }]
        },
        source: {
            options: {
                archive: '<%= yeoman.dist %>/DiVE-source.zip'
            },
            files: [{
                expand: true,
                cwd: '<%= yeoman.dist %>',
                src: ['**'],
                dest: '/'
            }]
        },
        main: {
            options: {
                archive: '_client_delivery/' + '<%= pkg.name %>' + '-' + '<%= pkg.version %>' + '_' + '(' + '<%= grunt.template.today("dd-mm-yyyy_HH.MM")%>' + ')' + '.zip'
            },
            files: [{
                expand: true,
                cwd: '<%= yeoman.dist %>/',
                src: ['**'],
                dest: '/',
                filter: 'isFile'
            }]
        },
        delivery: {
            options: {
                archive: '<%= yeoman.dist %>/' + '<%= pkg.name %>' + '.zip'
            },
            files: [{
                expand: true,
                cwd: '<%= yeoman.dist %>/',
                src: ['**'],
                dest: '/',
                filter: 'isFile'
            }]
        },
        backdown: {
            options: {
                archive: '_backup/' + '<%= pkg.name %>' + '_' + 'v<%= pkg.version %>' + '_' + '(' + '<%= grunt.template.today("dd-mm-yyyy_HH.MM")%>' + ')' + '.zip'
            },
            files: [{
                expand: true,
                cwd: '',
                src: ['**', '.*', '!<%= yeoman.app %>/_bower_components/**', '!_backup/**', '!node_modules/**'],
                dest: '/',
                filter: 'isFile'
            }]
        }
    },
    'bower-install': {
        app: {
            html: '<%= yeoman.app %>/index.html',
            ignorePath: '<%= yeoman.app %>/'
        }
    },
    'uglify': {
        from_concat_min: {
            options: {
                mangle: true,
                beautify: false,
                preserveComments: false,
                drop_console: true,
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %> */ '
            },
            files: [{
                expand: true,
                cwd: '.tmp/concat/js',
                src: '**/*.js',
                dest: '.tmp/js'
                    //  ext: '.min.js'
                }]
            },
            from_concat_dev: {
                options: {
                    mangle: false,
                    beautify: true,
                    ie_proof: true,
                    bracketize: true,
                    semicolons: true,
                    space_colon: true,
                    drop_console: true,
                    preserveComments: true
                },
                files: [{
                    expand: true,
                    cwd: '.tmp/concat/js',
                    src: '**/*.js',
                    dest: '.tmp/js-dev',
                    ext: '.dev.js'
                }]
            },
        },
        // rev: {
        //     dist: {
        //         files: {
        //             src: [
        //         '<%= yeoman.dist %>/js/{,*/}*.js',
        //     '<%= yeoman.dist %>/css/{,*/}*.css',
        // '<%= yeoman.dist %>/img/{,*/}*.{png,jpg,jpeg,gif,webp}',
        // '<%= yeoman.dist %>/fonts/{,*/}*.*'
        // ]
        // }
        // }
        // },
        'useminPrepare': {
            html: '.tmp/index.html',
            options: {
                dest: '<%= yeoman.dist %>'
            },
        },
        'usemin': {
            options: {
                dirs: ['<%= yeoman.dist %>']
            },
        html: ['<%= yeoman.dist %>/{,**/}*.html'],
    css: ['<%= yeoman.dist %>/css/{,*/}*.css']
},
'imagemin': {
    dist: {
        files: [{
            expand: true,
            cwd: '<%= yeoman.app %>/img',
        src: '{,**/}*.{png,jpg,jpeg}',
        dest: '<%= yeoman.dist %>/img'
    }]
}
},
'svgmin': {
    dist: {
        files: [{
            expand: true,
            cwd: '<%= yeoman.app %>/img',
        src: '{,*/}*.svg',
        dest: '<%= yeoman.dist %>/img'
    }]
}
},
'cssmin': {
    minify: {
        expand: true,
        cwd: '<%= yeoman.dist %>/css-dev/',
        src: ['*.css', '!*.min.css'],
        dest: '<%= yeoman.dist %>/css/',
        ext: '.css'
    }
},
'htmlmin': {
    dist: {
        options: {
                    // removeComments: true
                    // removeCommentsFromCDATA: true
                    // https://github.com/yeoman/grunt-usemin/issues/44
                    // collapseWhitespace: true
                    // collapseBooleanAttributes: true,
                    // removeAttributeQuotes: true,
                    // removeRedundantAttributes: true,
                    // useShortDoctype: true,
                    // removeEmptyAttributes: true,
                    // removeOptionalTags: true
                },
                files: [{
                    expand: true,
                    cwd: '.tmp',
                    src: ['**/*.html'],
                    dest: '<%= yeoman.dist %>'
                }]
            }
        },
        'copy': {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>',
                    dest: '<%= yeoman.dist %>',
                    src: [
                    '*.{ico,png,txt}',
                    '.htaccess',
                'img/{,**/}*.{webp,gif,png,jpg,svg}',
            'fonts/{,*/}*.*',
        'documentation/{,**/}*'
        ]
    },
    {
        expand: true,
        cwd: '<%= yeoman.app %>/_bower_components/fontawesome/fonts/',
        src: ['**', '!*.otf'],
        dest: '<%= yeoman.dist %>/fonts/'
    }
    ]
},
towamp:{
    expand: true,
    dot: true,
    cwd: '<%= yeoman.dist %>',
    dest: 'C:/wamp/www',
    src: '**'
}, 
js: {
    expand: true,
    dot: true,
    cwd: '.tmp/js/',
    dest: '<%= yeoman.dist %>/js/',
src: '{,*/}*.js'
},
js_dev: {
    expand: true,
    dot: true,
    cwd: '.tmp/js-dev/',
    dest: '<%= yeoman.dist %>/js-dev/',
src: '{,*/}*.*'
},
styles: {
    expand: true,
    dot: true,
    cwd: '<%= yeoman.app %>/scss',
    dest: '.tmp/css/',
src: '{,*/}*.css'
},
css_from_compass: {
    expand: true,
    dot: true,
    cwd: '.tmp/concat/css/',
    dest: '<%= yeoman.dist %>/css-dev/',
src: '{,*/}*.css'
},
fonts: {
    expand: true,
    dot: true,
    cwd: '<%= yeoman.app %>/_bower_components/fontawesome/fonts/',
    dest: '.tmp/fonts/',
    src: ['**', '!*.otf']
}
},
'ftp-deploy': {
    build: {
        auth: {
            host: '10.41.21.89',
            port: 21,
            authKey: 'key1'
        },
        src: 'dist',
        dest: 'PMI/dive/v<%= pkg.version %>',
        exclusions: ['dist/**/.DS_Store', 'dist/**/Thumbs.db', 'dist/tmp']
    }
},
'assemble': {
    options: {
        flatten: true,
        layout: 'default.hbs',
        layoutdir: '<%= yeoman.app %>/templates/layouts',
        assets: 'dist/images',
        partials: ['<%= yeoman.app %>/templates/partials/**/*.hbs']
    },
    pages: {
        options: {
            plugins: ['permalinks'],
            permalinks: {
                structure: 'DiVE-doc/:basename/index.html'
            }
        },
        files: {
            '.tmp/': [
            '<%= yeoman.app %>/templates/pages/*.hbs',
            '!<%= yeoman.app %>/templates/pages/404.hbs'

            ]
        }
    },
    root: {
        files: {
            '.tmp/': [
            '<%= yeoman.app %>/templates/pages/index.hbs',
            '<%= yeoman.app %>/templates/pages/404.hbs'
            ]
        }
    },
    examples: {
        options: {
            layout: 'example.hbs',
            plugins: ['permalinks'],
            permalinks: {
                structure: 'DiVE-examples/:basename/index.html'
            }
        },
        files: {
            '.tmp/': ['<%= yeoman.app %>/templates/pages/examples/*.hbs']
        }
    }
},
'concurrent': {
    server: [
                // 'assemble',
                // 'copy:fonts'
                ],
                test: [
                //  'copy:styles',
                //  'copy:fonts' 
                ],
                dist: [
                // 'compass',
                // 'copy:styles',
                // 'imagemin:dist',
                // 'htmlmin'
                ]
            }
        });
grunt.registerTask('server', function (target) {
    if (target === 'dist') {
        return grunt.task.run(['build', 'connect:dist:keepalive']);
    }
    grunt.task.run([
        'clean:server',
        'compass',
        'assemble',
        'copy:fonts',
        'autoprefixer',
        'connect:livereload',
        'watch'
        ]);
});
    // grunt.registerTask('test', [
    //     'clean:server',
    //         'autoprefixer',
    //         'connect:test',
    //         'mocha'
    //         ]);
grunt.registerTask('build', [
    'clean:dist',
    'compass',
    'assemble',
    'useminPrepare',
    'imagemin:dist',
    'htmlmin',
    'autoprefixer',
    'concat',
    'uglify:from_concat_dev',
    'uglify:from_concat_min',
    'copy:css_from_compass',
    'cssmin:minify',
    'copy:js',
    'copy:js_dev',
    'copy:dist',
    'usemin',
    'compress:boilerplate',
    'compress:source'
    ]);

grunt.registerTask('deploy', [
    'build',
    'ftp-deploy'
    ]);
grunt.registerTask('zipclient', [
    'build',
    'compress:main'
    ]);
grunt.registerTask('backup', [
    'build',
    'compress:backdown'
    ]);
grunt.registerTask('wamp', [
    'clean:wamp',
    'build',
    'copy:towamp'
    ]);
};