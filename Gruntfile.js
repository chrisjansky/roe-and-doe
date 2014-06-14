module.exports = function(grunt) {
 
  grunt.initConfig({
    sass: {
      dist: {
        options: {
          style: 'expanded',
          loadPath: ['assets/'].concat(require('node-neat').includePaths)
        },
        files: {
          'assets/style.css': 'assets/style.scss'
        }
      }
    },
    jade: {
      compile: {
        options: {
          pretty: true
        },
        files: [
          {
            expand: true,
            src: ['*.jade'],
            dest: '.',
            ext: '.html'
          },
        ],
      }
    },
    watch: {
      sass: {
        files: ['assets/*.scss', 'assets/shared/*.scss'],
        tasks: ['sass']
      },
      jade: {
        files: ['*.jade', 'jade/*.jade'],
        tasks: ['jade']
      },
      livereload: {
        options: {livereload: true},
        files: ['*', 'assets/*', 'scss/shared/*', 'jade/*']
      }
    },
    php: {
      dist: {
        options: {
          port: 8000,
          base: '.'
        }
      }
    }
  });
 
  /**
  * Load Grunt plugins
  */
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  /**
  * Default task
  */
  grunt.registerTask('default', [ 'php', 'watch' ]);
 
};