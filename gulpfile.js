var gulp = require('gulp');
var server = require('gulp-develop-server');
var runSequence = require('run-sequence');

// run server
gulp.task('server:start', function() {
	server.listen( { path: './server.js' } );
});

// restart server if server.js changed
gulp.task('server:restart', function() {
	gulp.watch( [ './server.js' ], server.restart );
});

// Build Production Files, the Default Task
gulp.task('default', function (cb) {
	runSequence(['server:start', 'server:restart'], cb);
});