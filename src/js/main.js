var Engine = require('./modules/engine');
var cache = require('./modules/cache');
var Flickity = require('flickity-imagesloaded');

let engine

var bp = new Array;
var mobileInitiated = false;

var rwd = {

  mqResponse: function( mq ) {
    if( mq.matches ) {
      engine = new Engine()
    } else {
      engine.destroy();
      rwd.mobile();
      rwd.flickity();
    }
  },

  mobile: function() {
    // check if we haven't done this already
    if( mobileInitiated === false ) {

      // loop over the sections
      for( var i=0;i<elms['sections'].length;i++ ) {
        // create new gallery element
        var gallery = document.createElement('div');
        var id = elms['sections'][i].getAttribute('id');
        // select all attached slides
        var slides = document.querySelectorAll('[data-id*=' + id + ']');

        gallery.setAttribute('class', 'gallery');
        for( var s=0;s<slides.length;s++ ) {
          gallery.appendChild( slides[s].cloneNode(true) );
        };

        // insert the slides after the sections
        elms['sections'][i].parentNode.insertBefore(gallery, elms['sections'][i].nextSibling);
      }
    }
  },

  flickity: function() {
    if( false === mobileInitiated ) {
      var gallery = document.querySelectorAll('.gallery');
      for( var i=0;i<gallery.length;i++ ) {
        if( gallery[i].children.length > 1 ) {
           new Flickity( gallery[i], {
            cellAlign: 'left',
            prevNextButtons: false,
            imagesLoaded: true,
            contain: true
          });
        }
      }
      mobileInitiated = true;
    }
  },

  breakpoints: function() {
    bp[0] = window.matchMedia('screen and (min-width: 768px)');
  },

  events: function() {
    for( var i=0; i< bp.length; i++ ) {
      bp[i].addListener( this.mqResponse );
    }
  },

  init: function() {
    cache.init();
    this.breakpoints();
    this.events();
    for( var i=0; i<bp.length; i++ ) {
      this.mqResponse( bp[i] );
    }
  }
}

rwd.init();
