const { src, dest } = require('gulp');

const images = async () => {
	// Essentially just copy the contents of the "images" directory
	// into the "dist" directory
	return src('images/**/*').pipe(dest('dist/images'));
};

module.exports = images;
