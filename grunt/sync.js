module.exports = {
  build: {
    files: [{
      cwd: 'src/img/',
      src: ['**/*'],
      dest: 'build/img',
    }],
  verbose: true // Display log messages when copying files
  }
}