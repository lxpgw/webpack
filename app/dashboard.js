require('b')


require(['c'], function(msg) {
  console.log(msg)
  console.log('.....')
});
