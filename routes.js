const express = require('express');
var path = require('path');
const app = express();

/*USER AUTHENTICATION API ROUTE*/
var usersRoutes = require('./routes/user-routes')();
app.use('/api/user', usersRoutes);

/*MOVIES API ROUTE*/
var moviesRoutes = require('./routes/movies-routes')();
app.use('/api/movies', moviesRoutes);

/*CATEGORIES API ROUTE*/
var categoryRoutes = require('./routes/category-routes')();
app.use('/api/category', categoryRoutes);


/*VIEWS ROUTES*/
app.get('/', function ( req, res ) {
   res.sendFile(path.join(__dirname, 'views/movies/public-movies.html'));
});

app.get('/login', function ( req, res ) {
   res.sendFile(path.join(__dirname, 'views/user/login.html'));
});

app.get('/signup', function ( req, res ) {
   res.sendFile(path.join(__dirname, 'views/user/signup.html'));
});

/*CATEGORY VIEW ROUTES*/
app.get('/category', function ( req, res ) {
   res.sendFile(path.join(__dirname, 'views/category/view-category.html'));
});

app.get('/category/add-category', function ( req, res ) {
   res.sendFile(path.join(__dirname, 'views/category/add-category.html'));
});

app.get('/category/update-category', function ( req, res ) {
   res.sendFile(path.join(__dirname, 'views/category/update-category.html'));
});

/*MOVIES VIEW ROUTES*/
app.get('/movies', function ( req, res ) {
   res.sendFile(path.join(__dirname, 'views/movies/view-movies.html'));
});

app.get('/movies/update-movies', function ( req, res ) {
   res.sendFile(path.join(__dirname, 'views/movies/update-movies.html'));
});

app.get('/movies/add-movies', function ( req, res ) {
   res.sendFile(path.join(__dirname, 'views/movies/add-movie.html'));
});

/*USER VIEW ROUTES*/

app.get('/update-profile', function ( req, res ) {
   res.sendFile(path.join(__dirname, 'views/user/update-profile.html'));
});

app.use(function(req, res){ res.redirect('/login'); });

// Export our changes
module.exports = app; 