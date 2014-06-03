module.exports = function(grunt) {

  grunt.config.set('autoprefixer', {

    options: {
      browsers: ['last 2 version', 'ie 9']
    },

    multiple_files: {
      src: '.tmp/public/styles/**/*.css'
    }

  });

  grunt.loadNpmTasks('grunt-autoprefixer');
};
