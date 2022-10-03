const figlet = require('figlet');

figlet('Super Mario', {font: 'Ghost'}, function(err, data) {
  (err) 
  ? (console.log('Error'), console.dir(err)) 
  : console.log(data)
});