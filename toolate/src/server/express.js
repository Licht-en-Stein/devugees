var mongoose = require('mongoose');
var TooLateComers = require('./toolatecomermodel');

const express = require('express');
const server = express();

mongoose.connect('mongodb://localhost/latecomer');

const isProd = process.env.NODE_ENV === 'production';
if (!isProd) {
  const webpack = require('webpack');
  const config = require('../../config/webpack.dev.js');
  const compiler = webpack(config);
  const webpackDevMiddleware = require('webpack-dev-middleware')(
    compiler,
    config.devServer
  );

  server.use(webpackDevMiddleware);

  const webpackHotMiddleware = require('webpack-hot-middleware')(compiler);
  server.use(webpackHotMiddleware);

}
const staticMiddleware = express.static('dist');
server.use(staticMiddleware);


server.post('/toolatecomers', function(req, res) {
	console.log(req.body);
	var newTooLateComer = new TooLateComers(req.body);
	newTooLateComer.save(function(err) {
		if(err) {
			return res.send(err);
		}
		
		console.log('new laty has been saved successfully');
		return res.send({ newTooLateComer: req.body })
	});
});


// load student info via id 
server.get('/toolatecomers', function(req, res) {
	// read statement
	TooLateComers.find({}, function(err, latys) {
		
		if(!latys)
			return res.send({err: 'latys not found'});	

		console.log(latys);
		return res.send(latys);
	});
});

// delete a student
server.delete('/toolatecomers/:id', function(req, res) {
	TooLateComers.findById(req.params.id, function(err, laty) {
		if(!laty)
			return res.send({err: 'laty not found'});

		laty.remove(function(err) {
			if(err) {
				return res.send(err);
			}

			console.log('laty deleted');
			return res.send(laty);
		});
	});
});


const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log('server is listening on port ' + port);
});
