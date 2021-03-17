const { watch, parallel } = require('gulp');

// Pull in each task
const templates = require('./gulp/templates');
const images = require('./gulp/images');
const sass = require('./gulp/sass');

// Set each directory and contents that we want to watch and
// assign the relevant task. `ignoreInitial` set to false will
// run the task when we run `gulp watch`, and it will run
// when a file changes.
const watcher = () => {
	watch('./{layouts,pages}/**/*.html', { ignoreInitial: false }, templates);
	watch('./scss/*.scss', { ignoreInitial: false }, sass);
	watch('./images/**/*', { ignoreInitial: false }, images);
};

exports.default = parallel(templates, images, sass);
exports.templates = templates;
exports.images = images;
exports.sass = sass;
exports.watch = watcher;
