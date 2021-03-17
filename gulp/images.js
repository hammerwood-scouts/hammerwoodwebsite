const { src, dest } = require('gulp');

const images = async () => {
	return src('images/**/*').pipe(dest('dist/images'));
};

module.exports = images;
