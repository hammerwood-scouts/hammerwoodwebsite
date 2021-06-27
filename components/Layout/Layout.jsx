import Head from 'next/head';
import { Announcement } from '../Announcement/Announcement';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import styles from './Layout.module.css';

export const Layout = (props) => {
	return (
		<>
			<Head>
				<title>Hammerwood Scout Campsite</title>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta property="og:url" content="https://www.hammerwood.org.uk" />
				<meta
					property="og:image"
					content="https://github.com/tcluk/hammerwood/blob/master/trees.JPG?raw=true"
				/>
				<meta property="og:title" content="Hammerwood Scout Campsite" />
				<meta property="og:description" content="Hammerwood Scout Campsite" />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/images/favicons/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/images/favicons/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/images/favicons/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
			</Head>
			<Header />
			<main className={styles.main}>
				<Announcement />
				{props.children}
			</main>
			<Footer />
		</>
	);
};
