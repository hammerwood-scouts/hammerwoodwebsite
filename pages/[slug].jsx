import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import matter from 'gray-matter';
import fs from 'fs';
import yaml from 'js-yaml';
import path from 'path';

import { Layout } from '../components/Layout/Layout';

const postsDirectory = path.join(process.cwd(), 'content/pages');

function fetchPostContent() {
	// Get file names under /posts
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
			const matterData = matterResult.data;
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

const slugToPostContent = ((postContents) => {
	let hash = {};
	postContents.forEach((it) => (hash[it.slug] = it));
	return hash;
})(fetchPostContent());

// console.log(slugToPostContent);

export default function Page({ source }) {
	return (
		<Layout title={source.title}>
			<MDXRemote {...source} />
		</Layout>
	);
}

export const getStaticPaths = async () => {
	// const paths = fetchPostContent().map((it) => '/' + it.slug);
	return {
		paths: [{ params: { slug: 'test' } }],
		fallback: false,
	};
};

export const getStaticProps = async ({ params }) => {
	const { slug } = params;
	console.log(slugToPostContent);
	console.log(fetchPostContent());
	const source = fs.readFileSync(slugToPostContent[slug].fullPath, 'utf8');
	const { content, data } = matter(source, {
		engines: {
			yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }),
		},
	});
	const mdxSource = await serialize(content, { scope: data });
	return {
		props: {
			source: mdxSource,
		},
	};
};
