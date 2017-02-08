module.exports = {
  build: {
    options: {
      style: 'expanded'
    },
    files: {
      'build/css/main.css': 'src/sass/main.scss'
    }
  },

  dist: {
    options: {
      style: 'compressed',
      sourceMap: false
    },
    files: {
      'dist/css/main.min.css': 'src/sass/main.scss'
    }
  }

}