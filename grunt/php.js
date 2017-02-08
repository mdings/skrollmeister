module.exports = {

  dev: {
    options: {
      hostname: 'localhost',
      base: 'build',
      port: 8000
    }
  },

  preview: {
    options: {
      hostname: 'localhost',
      port: 8888,
      base: 'dist',
      keepalive: true,
      open: true
    }
  },

  penthouse: {
    options: {
      hostname: 'localhost',
      port: 9000,
      base: 'dist'
    }
  }
}