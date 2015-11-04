/**
 * Example Grunt Hub
 *
 * Edit the hub.all.src to point to your Gruntfile locations.
 * Then run `grunt`.
 */
module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
	watch: {
     
      styles: {
        files: ['../styles/{,*/}*.css'],
        tasks: ['newer:copy:styles']
      }
    },
    hub: {
      all: {
        src: ['../*/Gruntfile.js'],
        tasks: ['jshint', 'build'],
      },
    },
	copy: {
            main: {
                files: [{
                    expand: true,
                    cwd: '../project1/dist/',
                    src: ['**'],
                    dest: '../dist/project1'
                },
				{
                    expand: true,
                    cwd: '../project2/dist/',
                    src: ['**'],
                    dest: '../dist/project2'
                },
				{
        expand: true,
        dot: true,
        cwd: '../styles/',
        dest: '../dist/styles/',
        src: '{,*/}*.css'
      }]
				
            }
        }
		
  });

  grunt.loadNpmTasks('grunt-hub');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.registerTask('default', ['hub', 'copy']);
};
