var config = require("./config")
var serveStatic = require('serve-static');
var connect = require('connect');
var app = connect().use(serveStatic(__dirname)).listen(config.portnumber, function(){
  console.log('Server running on '+ config.portnumber + ' ...');
});
