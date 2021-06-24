import { Announcement } from '../Announcement/Announcement';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { Navigation } from '../Navigation/Navigation';
import styles from './Layout.module.css';

export const Layout = (props) => {
	return (
		<>
			<Header />
			<Navigation />
			<main className={styles.main}>
				<Announcement />
				{props.children}
			</main>
			<Footer />
		</>
	);
};
