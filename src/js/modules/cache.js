global.elms = new Array;

var cache = {
  init: function() {
    // cache the used elements
    elms['slides'] = document.querySelectorAll('.slide');
    elms['sections'] = document.querySelectorAll('#timeline > section');
    elms['markers'] = document.getElementById('markers');
    elms['timeline'] = document.getElementById('timeline');
    elms['body'] = document.getElementsByTagName('body')[0];
  }
}

module.exports = cache;