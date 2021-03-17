const { readFile, readdir, writeFile, access, mkdir } = require('fs').promises;

const templates = async () => {
	// Get the contents of the layout template
	const layout = await readFile('layouts/layout.html', 'utf-8');

	// Get the names of each page
	const pages = await readdir('pages/');

	// If there aren’t any pages just return early
	if (pages.length < 1) {
		return;
	}

	await access('dist') // Check to see if a "dist" directory exists.
		.catch(() => mkdir('dist')) // If not, create it
		.catch(() => {}); // In the meantime, this may have already been created by another task

	// Iterate through each filename in the pages directory…
	const promises = pages.map((filename) => {
		// …read the contents of the file…
		return readFile(`pages/${filename}`, 'utf-8').then((content) => {
			// …create the final file’s contents by replacing "{{ content }}" in the layout content
			// with the contents of the page…
			const newContent = layout.replace(/{{\s*content\s*}}/, content.trimEnd());

			// …write the final contents into the "dist" directory, keeping the page filename
			return writeFile(`dist/${filename}`, newContent, { flag: 'w' });
		});
	});

	return Promise.all(promises);
};

module.exports = templates;
