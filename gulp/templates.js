const { readFile, readdir, writeFile, access, mkdir } = require('fs').promises;

const templates = async () => {
	const layout = await readFile('layouts/layout.html', 'utf-8');
	const pages = await readdir('pages/');

	if (pages.length < 1) {
		return;
	}

	try {
		await access(`dist`);
	} catch (error) {
		await mkdir(`dist`);
	}

	const promises = pages.map((filename) => {
		return readFile(`pages/${filename}`, 'utf-8').then((content) => {
			const newContent = layout.replace(/{{\s*content\s*}}/, content.trimEnd());
			return writeFile(`dist/${filename}`, newContent, { flag: 'w' });
		});
	});

	return Promise.all(promises);
};

module.exports = templates;
