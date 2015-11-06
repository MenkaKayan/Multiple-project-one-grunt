/**
 * Example Grunt Hub
 *
 * Edit the hub.all.src to point to your Gruntfile locations.
 * Then run `grunt`.
 */
module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            'dist/*',
            '!dist/.git*'
          ]
        }]
      },
      server: '.tmp'
    },
    watch: {
      styles: {
        files: ['styles/{,*/}*.css'],
        tasks: ['newer:copy:styles']
      }
    },
    hub: {
      all: {
        src: ['*/Gruntfile.js'],
        tasks: ['jshint', 'build'],
      },
    },
    copy: {
      main: {
        files: [
          {
            expand: true,
            cwd: 'project1/dist/',
            src: ['**'],
            dest: 'dist/project1'
          },
          {
            expand: true,
            cwd: 'project2/dist/',
            src: ['**'],
            dest: 'dist/project2'
          },
          {
            src: 'index.html',
            dest: 'dist/'
          },
          {
            expand: true,
            dot: true,
            cwd: 'styles/',
            dest: 'dist/styles/',
            src: '{,*/}*.css'
          }
        ]

      }
    }

  });
  
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-hub');
  grunt.loadNpmTasks('grunt-contrib-copy');
  
  grunt.registerTask('default', ['clean', 'hub', 'copy']);
};
