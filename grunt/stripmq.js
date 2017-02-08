module.exports = {
  build: {
    expand: true,
    cwd: 'build/css/',
    src: ['main.css'],
    dest: 'build/css/legacy'
  },

  dist: {
    expand: true,
    cwd: 'dist/css/',
    src: ['main.min.css'],
    dest: 'dist/css/legacy'
  }
}