// Generated on 2013-10-08 using generator-yawa 0.4.6
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
  // show elapsed time at the end
  require('time-grunt')(grunt);
  // load all grunt tasks
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    // configurable paths
    yeoman: {
      app:  'app',
      dist: 'dist',
      src:  'src'
    },
    watch: {
      coffee: {
        files: ['<%= yeoman.app %>/js/{,*/}*.coffee'],
        tasks: ['clean:scripts', 'coffee:dist', 'copy:scripts']
      },
      coffeeTest: {
        files: ['test/spec/{,*/}*.coffee'],
        tasks: ['coffee:test']
      },
      compass: {
        files: ['<%= yeoman.app %>/scss/{,*/}*.{scss,sass}'],
        tasks: ['compass:server', 'autoprefixer']
      },
      styles: {
        files: ['<%= yeoman.app %>/scss/{,*/}*.css'],
        tasks: ['copy:styles', 'autoprefixer']
      },
      js: {
        files: ['<%= yeoman.app %>/js/**/*.js'],
        tasks: ['dist-js']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= yeoman.app %>/templates/**/*.hbs',
          '{.tmp,<%= yeoman.app %>}/scss/{,*/}*.css',
          '{.tmp,<%= yeoman.app %>}/js/{,*/}*.js',
          '<%= yeoman.app %>/img/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ],
        tasks: ['assemble', 'bless:server']
      }
    },
    connect: {
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
            '<%= yeoman.dist %>'
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
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.dist %>/*',
            '!<%= yeoman.dist %>/.git*'
          ]
        }]
      },
      server: '.tmp',
      scripts: '.tmp/js/*'
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        '<%= yeoman.app %>/js/{,*/}*.js',
        '!<%= yeoman.app %>/js/vendor/*',
        'test/spec/{,*/}*.js'
      ]
    },
    mocha: {
      all: {
        options: {
          run: true,
          urls: ['http://<%= connect.test.options.hostname %>:<%= connect.test.options.port %>/index.html']
        }
      }
    },
    coffee: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/scripts',
          src: '{,*/}*.coffee',
          dest: '.tmp/scripts',
          ext: '.js'
        }]
      },
      test: {
        files: [{
          expand: true,
          cwd: 'test/spec',
          src: '{,*/}*.coffee',
          dest: '.tmp/spec',
          ext: '.js'
        }]
      }
    },
    compass: {
      options: {
        sassDir: '<%= yeoman.app %>/scss',
        cssDir: '.tmp/css',
        generatedImagesDir: '.tmp/img/generated',
        imagesDir: '<%= yeoman.app %>/images',
        javascriptsDir: '<%= yeoman.app %>/scripts',
        fontsDir: '<%= yeoman.app %>/fonts',
        importPath: '<%= yeoman.app %>/bower_components',
        httpImagesPath: '/images',
        httpGeneratedImagesPath: '/img/generated',
        httpFontsPath: '/fonts',
        relativeAssets: false
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
    autoprefixer: {
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
    bless: {
      server: {
        css: {
          options: {
            cacheBuster: false,
            compress: false
          },
          files: {
            '.tmp/css/main.css': '.tmp/css/*.css'
          }
        }
      },
      dist: {
        options: {
          cacheBuster: false,
          compress: true
        },
        files: {
          '<%= yeoman.dist %>/css/main.css': '<%= yeoman.dist %>/css/*.css'
        }
      }
    },
    concat: {
      dist: {
        files: {
          '<%= yeoman.dist %>/js/plugins.js' : [
            '<%= yeoman.app %>/bower_components/jquery/jquery.min.js',
            '<%= yeoman.app %>/js/plugins.js',
            '<%= yeoman.app %>/js/vendor/google-code-prettify/prettify.js',
            '<%= yeoman.app %>/js/vendor/imagesloaded.js'
          ],

          '<%= yeoman.dist %>/js/dive.js' : [
            '<%= yeoman.app %>/js/vendor/ion.rangeSlider.js',
            '<%= yeoman.app %>/js/dive.js',
          ],
          '<%= yeoman.dist %>/js/main.js' : [
            '<%= yeoman.app %>/js/main.js',
          ]
        }
      }
    },
    uglify: {
      dist: {
        files: {
          '<%= yeoman.dist %>/js/plugins.min.js':    ['<%= yeoman.dist %>/js/plugins.js'],
          '<%= yeoman.dist %>/js/dive.min.js':       ['<%= yeoman.dist %>/js/dive.js'],
          '<%= yeoman.dist %>/js/main.min.js':       ['<%= yeoman.dist %>/js/main.js'],
          '<%= yeoman.dist %>/js/modernizr.min.js':  ['<%= yeoman.app %>/bower_components/modernizr/modernizr.js'],
          '<%= yeoman.dist %>/js/masonry.min.js':    ['<%= yeoman.app %>/js/vendor/masonry.js']
        }
      }
    },
    'bower-install': {
      app: {
        html: '<%= yeoman.app %>/index.html',
        ignorePath: '<%= yeoman.app %>/'
      }
    },
    // not enabled since usemin task does concat and uglify
    // check index.html to edit your build targets
    // enable this task if you prefer defining your build targets here
    // Usemin adds files to uglify

    rev: {
      dist: {
        files: {
          src: [
            '<%= yeoman.dist %>/js/{,*/}*.js',
            '<%= yeoman.dist %>/css/{,*/}*.css',
            '<%= yeoman.dist %>/img/{,*/}*.{png,jpg,jpeg,gif,webp}',
            '<%= yeoman.dist %>/fonts/{,*/}*.*'
          ]
        }
      }
    },
    useminPrepare: {
      options: {
        dest: '<%= yeoman.dist %>'
      },
      html: '<%= yeoman.app %>/index.html'
    },
    usemin: {
      options: {
        dirs: ['<%= yeoman.dist %>']
      },
      html: ['<%= yeoman.dist %>/{,*/}*.html'],
      css: ['<%= yeoman.dist %>/css/{,*/}*.css']
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
    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.svg',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },
    cssmin: {
      // This task is pre-configured if you do not wish to use Usemin
      // blocks for your CSS. By default, the Usemin block from your
      // `index.html` will take care of minification, e.g.
      //
      //     <!-- build:css({.tmp,app}) scss/main.css -->
      //
      // dist: {
      //     files: {
      //         '<%= yeoman.dist %>/scss/main.css': [
      //             '.tmp/scss/{,*/}*.css',
      //             '<%= yeoman.app %>/scss/{,*/}*.css'
      //         ]
      //     }
      // }
    },
    htmlmin: {
      dist: {
        options: {
          removeCommentsFromCDATA: true,
          // https://github.com/yeoman/grunt-usemin/issues/44
          // collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeAttributeQuotes: false,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeOptionalTags: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>',
          src: '*.html',
          dest: '<%= yeoman.dist %>'
        }]
      },
      deploy: {
        options: {
          collapseWhitespace: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: '{,*/}*.html',
          dest: '<%= yeoman.dist %>'
        }]
      }
    },
    // Put files not handled in other tasks here
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          dest: '<%= yeoman.dist %>',
          src: [
            '*.{ico,png,txt}',
            '.htaccess',
            'img/{,*/}*.{webp,gif,png,jpg,svg}',
            'fonts/{,*/}*.*',
            'bower_components/sass-bootstrap/fonts/*.*'
          ]
        }]
      },
      styles: {
        expand: true,
        dot: true,
        cwd: '<%= yeoman.app %>/scss',
        dest: '.tmp/css/',
        src: '{,*/}*.css'
      }
    },
    modernizr: {
      devFile: '<%= yeoman.app %>/bower_components/modernizr/modernizr.js',
      outputFile: '<%= yeoman.dist %>/bower_components/modernizr/modernizr.js',
      files: [
        '<%= yeoman.dist %>/js/{,*/}*.js',
        '<%= yeoman.dist %>/css/{,*/}*.css',
        '!<%= yeoman.dist %>/js/vendor/*'
      ],
      uglify: true
    },
    concurrent: {
      server: [
        'compass',
        'coffee:dist',
        'dist-js',
        'assemble',
        'copy:dist'
      ],
      test: [
        'coffee',
        'copy:styles'
      ],
      dist: [
        'coffee',
        'dist-js',
        'compass',
        'copy:styles',
        'imagemin',
        'svgmin',
        'htmlmin:dist'
      ]
    },
    assemble: {
      options: {
        flatten: true,
        layout: '<%= yeoman.app %>/templates/layouts/default.hbs',
        partials: [
          '<%= yeoman.app %>/templates/partials/**/*.hbs',
        ],
      },
      pages: {
        options: {
          plugins: ['permalinks'],
          permalinks: {
            structure: ':basename/index.html'
          }
        },
        files: {
          '<%= yeoman.dist %>/': ['<%= yeoman.app %>/templates/pages/*.hbs', '!<%= yeoman.app %>/templates/pages/index.hbs']
        }
      },
      examples: {
        options: {
          layout: '<%= yeoman.app %>/templates/layouts/example.hbs',
          plugins: ['permalinks'],
          permalinks: {
            structure: ':basename/index.html'
          }
        },
        files: {
          '<%= yeoman.dist %>/examples/': ['<%= yeoman.app %>/templates/pages/examples/*.hbs']
        }
      },
      index: {
        files: {
          '<%= yeoman.dist %>/': ['<%= yeoman.app %>/templates/pages/index.hbs']
        }
      }
    }
  });


  grunt.loadNpmTasks('assemble'); // Doesn't follow the grunt-* naming scheme and therefor isn't loaded automatically


  grunt.registerTask('server', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:dist',
      'concurrent:server',
      'autoprefixer',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('dist-js', ['concat', 'uglify']);

  grunt.registerTask('test', [
    'clean:server',
    'concurrent:test',
    'autoprefixer',
    'connect:test',
    'mocha'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    'assemble',
    'useminPrepare',
    'concurrent:dist',
    'autoprefixer',
    'concat',
    'cssmin',
    'uglify',
    'modernizr',
    'copy:dist',
    'bless:dist',
    'rev',
    'usemin',
    'htmlmin:deploy'
  ]);

  grunt.registerTask('default', [
    'jshint',
    'test',
    'build'
  ]);
};
