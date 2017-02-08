module.exports = {
  options: {
    shim: {
      'skrollr': {
        path: 'src/components/skrollr/src/skrollr',
        exports: 'skrollr'
      },

      /*
      'skrollr.stylesheets': {
        path: 'src/components/skrollr-stylesheets/src/skrollr.stylesheets',
        exports: 'skrollr-stylesheets'
      }
      */
    }
  },

  build: {
    files: {
       'build/js/main.js': ['src/js/main.js']
    }
  },

  dist: {
    files: {
       '.tmp/js/main.js': ['src/js/main.js']
    }
  }
}