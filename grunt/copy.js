module.exports = {
  build: {
    files: [{
      expand: true,               
      cwd: 'src/fonts/',   
      src: ['**/*.*'],
      dest: 'build/fonts/'
    }]
  },
  dist: {
    files: [{
      expand: true,               
      cwd: 'src/fonts/',   
      src: ['**/*.*'],
      dest: 'dist/fonts/'
    }]
  }
}