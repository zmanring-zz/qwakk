/**
 * Compiles SCSS files into CSS.
 *
 * ---------------------------------------------------------------
 *
 * For usage docs see:
 * 		https://github.com/sindresorhus/grunt-sass
 */

module.exports = function(grunt) {

  grunt.config.set('sass', {
    dev: {
      files: [{
        expand: true,
        cwd: 'assets/styles/',
        src: ['importer.scss'],
        dest: '.tmp/public/styles/',
        ext: '.css'
      }]
    }
  });

  grunt.loadNpmTasks('grunt-sass');
};
