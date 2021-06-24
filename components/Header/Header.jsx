import { ScoutLogo } from '../icons/ScoutLogo';
import { VisuallyHidden } from '../Typography/Typography';
import styles from './Header.module.css';
import navStyles from '../Navigation/Navigation.module.css';

export function Header() {
	return (
		<header className={styles.header}>
			<button
				id="menuOpen"
				className={[
					navStyles.mobileNavMenuButton,
					navStyles.mobileNavMenuButtonOpen,
				].join(' ')}
			>
				<VisuallyHidden>Open navigation menu</VisuallyHidden>
				<svg
					aria-hidden="true"
					id="Layer_1_1_"
					style={{ enableBackground: 'new 0 0 16 16' }}
					version="1.1"
					viewBox="0 0 16 16"
					xmlSpace="preserve"
					xmlns="http://www.w3.org/2000/svg"
					xmlnsXlink="http://www.w3.org/1999/xlink"
				>
					<rect height="2" width="16" />
					<rect height="2" width="16" y="7" />
					<rect height="2" width="16" y="14" />
				</svg>
			</button>
			<h1 className={styles.mainHeading}>
				<span className={styles.mainHeadingRow}>Hammerwood</span>
				<span className={styles.mainHeadingRow}> Scout Campsite</span>
			</h1>
			<ScoutLogo className={styles.headerLogo} />
		</header>
	);
}
