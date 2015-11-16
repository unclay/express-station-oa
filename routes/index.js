'use strict';

var page = require('./page');

module.exports = function(app){
	page(app);

	app.get('/test', function(req, res){
		res.send('you name is ' + req.query.name);
	});
}