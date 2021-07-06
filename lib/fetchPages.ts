import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/pages');

export type PageMetadata = {
	title: string;
	slug: string;
	fullPath: string;
};

export function fetchPages(): PageMetadata[] {
	// Get file names under /content/pages
	const fileNames = fs.readdirSync(postsDirectory);
	const allPostsData = fileNames
		.filter((it) => it.endsWith('.mdx'))
		.map((fileName) => {
			// Read markdown file as string
			const fullPath = path.join(postsDirectory, fileName);
			const fileContents = fs.readFileSync(fullPath, 'utf8');

			// Use gray-matter to parse the post metadata section
			const matterResult = matter(fileContents, {
				engines: {
					yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }),
				},
			});
			const matterData = matterResult.data as PageMetadata;
			matterData.fullPath = fullPath;

			const slug = fileName.replace(/\.mdx$/, '');

			// Validate slug string
			if (matterData.slug !== slug) {
				throw new Error(
					'slug field not match with the path of its content source',
				);
			}

			return matterData;
		});

	return allPostsData;
}
