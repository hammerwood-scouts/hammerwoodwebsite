const { src, dest } = require('gulp');

module.exports = async () => {
	return src('images/**/*').pipe(dest('dist/images'));
};
