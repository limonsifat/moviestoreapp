var express = require('express');
var categoryRoute = express.Router();
var categoryController = require('../controllers/category-controller');

var router = function(){

	/*CATEGORY APIS*/
	categoryRoute.route('/addCategory')
		.post(function(req,res) {
			return categoryController.addCategory(req, res);
		});

	categoryRoute.route('/deleteCategory')
		.post(function(req,res) {
			return categoryController.deleteCategory(req, res);
		});

	categoryRoute.route('/getAllCategories')
		.get(function(req,res) {
			return categoryController.getAllCategories(req, res);
		});

	categoryRoute.route('/updateCategories')
		.post(function(req,res) {
			return categoryController.updateCategories(req, res);
		});	

    return categoryRoute;
}

module.exports = router;
