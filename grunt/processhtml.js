module.exports = {
  options: {
    commentMarker: 'process',
    customBlockTypes: [
      'src/components/grunt/include-above-the-fold-css.js',
      'src/components/grunt/async-css.js',
      'src/components/grunt/async-js.js'
    ]
  },

  dist: {
    files: [{
      expand: true,               
      cwd: 'dist/',   
      src: ['**/*.{html,htm}'],
      dest: 'dist/'
    }]
  },

  opt: {
    files: [{
      expand: true,               
      cwd: 'dist/',   
      src: ['**/*.{html,htm}'],
      dest: 'dist/'
    }]
  }
}