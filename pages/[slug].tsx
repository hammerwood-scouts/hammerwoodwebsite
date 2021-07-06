import { GetStaticProps, GetStaticPaths } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import matter from 'gray-matter';
import fs from 'fs';
import yaml from 'js-yaml';
import { fetchPages, PageMetadata } from '../lib/fetchPages';

import { Layout } from '../components/Layout/Layout';

const slugToPostContent = ((
	postContents: PageMetadata[],
): Record<PageMetadata['slug'], PageMetadata> => {
	let hash = {};
	postContents.forEach((it) => (hash[it.slug] = it));
	return hash;
})(fetchPages());

export default function Page({ source }) {
	return (
		<Layout title={source.title}>
			<MDXRemote {...source} />
		</Layout>
	);
}

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = fetchPages().map((it) => '/' + it.slug);
	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const slug = params.slug as string;
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
