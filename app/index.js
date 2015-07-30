var _ = require('underscore');

require('a.js');

require('b.js')

_.each([1, 2, 4], function(val, idx) {
  console.log(idx, val);
});

$(function() {
  console.log('document ready');
});
