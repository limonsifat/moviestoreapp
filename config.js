/**
 * This module is responsible for maintaining all configurations
 * that are used site wide.
 */
var config = {}

// Application Information
config.app = {}

// HTTP server configuration
config.http = {}
config.http.port = 3000;

// Db Configuration
config.db = {}
config.db.hostURI = 'mongodb+srv://dbuser01:dbuser01admin@moviestore-apcod.mongodb.net/test?retryWrites=true'; 
config.db.username = "dbuser01"; 
config.db.password = "dbuser01admin"; 

config.host = {}

module.exports = config;