module.exports = function(grunt) {
  require('load-grunt-config')(grunt);

  // default task, creates build folder first if it doesn't exist yet
  grunt.registerTask('default', [
    'includereplace:build', 
    //'imagemin:build',
    'copy:build',
    'sass:build', 
    'autoprefixer:build',
    'browserify:build', 
    'php:dev',
    'watch'
  ]);

  // optimize
  grunt.registerTask('optimize', [
    'includereplace:dist',
    'imagemin:dist',
    'copy:dist',
    'sass:dist', 
    'modernizr',
    'autoprefixer:dist', 
    'stripmq:dist',
    'browserify:dist', 
    'uglify', 
    'concat',
    'processhtml:dist',
    'php:penthouse',
    'penthouse',
    'processhtml:opt',
    'clean:dist',
    'htmlmin',
    'php:preview'
  ]);

  grunt.registerTask('push', ['ftpush:push']);
}