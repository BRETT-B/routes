// Angular routes are considered cross-origin. Cross-origin is 
// only supported for: http, https, ftp.
// Our protocol when we load is 'file:
//' This requires something with the said above protocols.
// Node.js is our answer. With the 'connect' and 'serve-static' 
// module. npm-init creates a JSON package.

var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(8000, function(){
	console.log('Listening on Port 8000...');
});