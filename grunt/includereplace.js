module.exports = {

  build: {
    files: [{
      src: ['*.html', '!**/_*.html'], 
      dest: 'build/', 
      expand: true, 
      cwd: 'src/'
    }]
  },

  dist: {
    files: [{
      src: ['*.html', '!**/_*.html'], 
      dest: 'dist/', 
      expand: true, 
      cwd: 'src/'
    }]
  },

}