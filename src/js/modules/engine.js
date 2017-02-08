var skrollr = require('skrollr');
var cache = require('../modules/cache');
var s = {};

var engine = {

  init: function() {
    this.markers();
    this.slides();
    this.timeline();
    this.run();
  },

  // creates the slides on mobile
  mobile: function(){
    for( var i=0; i<elms['sections'].length; i++ ) {
      console.log('ok');
    }
  },

  markers: function() {
    // set the height of the scroll area according to number of slides
    elms['body'].setAttribute('style', 'min-height: ' + (elms['slides'].length * 100 ) + '%' );

    // create the markers
    for( var i=0; i<elms['slides'].length; i++) {
      var section = document.createElement('div');
      var marker = document.createElement('div');
      var id = 'marker' + i;
      var slide = elms['slides'][i];

      // set attributes on the newly created elements
      section.setAttribute('class', 'section');
      marker.setAttribute('class', 'marker');
      marker.setAttribute('id', id );

      // append the newly created elements to the DOM
      section.appendChild(marker);
      elms['markers'].appendChild(section);
    }

  },

  slides: function() {
    for( var i=0; i<elms['slides'].length; i++) {
      var id = 'marker' + i;
      var effect = elms['slides'][i].dataset.effect;

       // slide in from right 
      if( effect == 'slideInRight') {
        this.setAttributes( elms['slides'][i], {
          'data-bottom-top': 'transform: translate3d(0%,0,0)',
          'data-center': 'transform: translate3d(-100%,0,0)',
          'data-anchor-target': '#' + id
        });

      // slide in from left
      } else if ( effect == 'slideInLeft') {
        this.setAttributes( elms['slides'][i], {
          'data-bottom-top': 'transform: translate3d(0%,0,0)',
          'data-center': 'transform: translate3d(100%,0,0)',
          'data-anchor-target': '#' + id
        });

      // slide in from bottom
      } else if ( effect == 'slideInBottom') {
        this.setAttributes( elms['slides'][i], {
          'data-bottom-top': 'transform: translate3d(0%,0,0)',
          'data-center': 'transform: translate3d(-100%,0,0)',
          'data-anchor-target': '#' + id
        });

      // slide in from top
      } else if ( effect == 'slideInTop') {
        this.setAttributes( elms['slides'][i], {
          'data-bottom-top': 'transform: translate3d(0%,0,0)',
          'data-center': 'transform: translate3d(100%,0,0)',
          'data-anchor-target': '#' + id
        });
      }
      
    }
  },


  timeline: function() {
    var indexes = new Array;
    var curPos = 0;

    // calculate the indexes for the slides
    // the timeline moves when at an index
    // indexes are calculated by counting the
    // number of slides per section
    for( var i=0; i<elms['sections'].length; i++ ) {
      var id = elms['sections'][i].getAttribute('id');
      var slides = document.querySelectorAll('[data-id*='+ id +']');
      indexes.push( slides.length );
    }

    for( var i=0; i<elms['slides'].length; i++) {
      if( i == (indexes[0]) ) {
        //remove the first element from the array..
        indexes.shift();
        // and update the new index adding its value
        indexes[0] = i + indexes[0];
        //update the current position
        curPos = curPos - 100;
      } 
      // set the timeline animation attributes
      elms['timeline'].setAttribute('data-' + i*100 + 'p', 'transform: translate3d(0,'+ curPos +'%,0)');
    }
  },

  releaseBodyHeight: function() {
     elms['body'].setAttribute('style', 'min-height: auto' );
  },

  // initiate skrollr
  run: function() {
    s = skrollr.init({
      forceHeight: false,
      smoothScrolling: true
    });
  },

  // destroy skrollr
  destroy: function() {
    if( 'destroy' in s ) {
      this.releaseBodyHeight();
      s.destroy();  
    }
  },

  /* 
  ** helpers
  */

  setAttributes: function( elm, attrs ) {
    for(var key in attrs) {
      elm.setAttribute(key, attrs[key]);
    }
  }
}

module.exports = engine;


