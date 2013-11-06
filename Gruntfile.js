var exec = require('child_process').exec;

module.exports = function( grunt ) {
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks("grunt-contrib-uglify");

  grunt.initConfig({
     compass: {
        build: {
          options: {
            sassDir: './builder/_sources/Sass',
            cssDir: './builder/assets/css',
            outputStyle: 'compressed'
          }
        },
        debug: {
          options: {
            sassDir: './builder/_sources/Sass',
            cssDir: './builder/assets/css'
          }
        }
     },
     jshint: {
        options: {
          jshintrc: ".jshintrc"
        },
        build: ['./builder/_sources/Js/**/**/*.js']
     },
     uglify: {
      build: {
        files: {
          './builder/assets/js/main.js': ['./builder/_sources/Js/main.js']
        }
      }
    },
    clean: ["./builder/assets/css"],
    watch: {
        options: {
          livereload: false
        },
        css: {
            files: ['./builder/_sources/Sass/**/**/**/*.scss'],
            tasks: ['clean', 'compass:build', 'jekyll']
        },
        js: {
            files: ['./builder/_sources/Js/**/**/*.js'],
            tasks: ['uglify:build', 'jekyll']
        },
        tpl: {
            files: ['./builder/_templates/**/**/*.md'],
            tasks: ['jekyll']
        }
      }
  });

  grunt.registerTask('jekyll', 'Run jekyll', function() {
    var done = this.async();
    grunt.log.writeln( 'Running jekyll build');
    grunt.verbose.writeln( 'Exec: jekyll build');
    exec( "cd builder/ && node _scripts/build.js && jekyll build && cd ..", function( err, stdout, stderr ) {
      if ( stdout ) {
        grunt.log.write( stdout );
      }
      if ( err ) {
        grunt.fatal( err );
      }
      done();
    });
  });

  grunt.registerTask("debug", ["compass:debug", "jekyll"]);
  grunt.registerTask("build", ["compass:build", "jshint:build", "uglify:build", "jekyll"]);
  grunt.registerTask("default", ["debug"]);

};
