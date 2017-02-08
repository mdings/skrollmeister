module.exports = {
  dist: {
    devFile: 'src/components/modernizr/modernizr.js',
    outputFile: 'dist/js/modernizr.min.js',
    extra: {
      shiv: false // fallback to shiv in HTML from cdn on < IE9
    },
    files: { // files modernizer will look for references
      src: [
        'src/sass/**/*.scss',
        'src/js/**/*.js'
      ]
    }
  }
}