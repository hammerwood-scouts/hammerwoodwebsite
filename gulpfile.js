const { watch } = require('gulp');

// Pull in each task
const templates = require('./gulp/templates');

// Set each directory and contents that we want to watch and
// assign the relevant task. `ignoreInitial` set to true will
// prevent the task being run when we run `gulp watch`, but it
// will run when a file changes.
const watcher = () => {
	watch('./{layouts,pages}/**/*.html', { ignoreInitial: true }, templates);
};

exports.templates = templates;
exports.watch = watcher;
