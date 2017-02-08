module.exports = {

  options: {
    livereload: true
  },

  scripts: {
    files: ['src/js/**/*.js'],
    tasks: ['browserify:build']
  },

  css: {
    files: ['src/sass/**/*.scss'],
    tasks: ['sass:build', 'autoprefixer:build', 'stripmq:build'],
    options: {
      spawn: false
    }
  },

  images: {
    //files: ['src/img/**/*.{png,jpg,gif}'],
    files: [],
    tasks: ['imagemin:build']
  },

  fonts: {
    files: ['src/fonts/**/*.*'],
    tasks: ['copy:build']
  },

  html: {
    files: ['src/**/*.html'],
    tasks: ['includereplace:build']
  }
  
}