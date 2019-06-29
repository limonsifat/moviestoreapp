var express = require('express');
var movieRoute = express.Router();
var movieController = require('../controllers/movie-controller');

var router = function(){

	/*MOVIE APIS*/
	movieRoute.route('/addMovie')
		.post(function(req,res) {
			return movieController.addMovie(req, res);
		});

	movieRoute.route('/updateMovie')
		.post(function(req,res) {
			return movieController.updateMovie(req, res);
		});

	movieRoute.route('/deleteMovie')
		.post(function(req,res) {
			return movieController.deleteMovie(req, res);
		});

	movieRoute.route('/getMovies')
		.get(function(req,res) {
			return movieController.getMovies(req, res);
		});

    return movieRoute;
}

module.exports = router;
