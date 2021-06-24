import { Announcement } from '../Announcement/Announcement';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { Navigation } from '../Navigation/Navigation';

export const Layout = (props) => {
	return (
		<>
			<Header />
			<Navigation />
			<main>
				<Announcement />
				{props.children}
			</main>
			<Footer />
		</>
	);
};
