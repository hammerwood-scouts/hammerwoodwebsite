import { useState } from 'react';
import { ScoutLogo } from '../icons/ScoutLogo';
import {
	DesktopNavigation,
	MobileNavigation,
	MobileNavigationOpenButton,
} from '../Navigation/Navigation';
import styles from './Header.module.css';

export function Header() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<header className={styles.header}>
				<MobileNavigationOpenButton
					onClick={(event) => {
						event.preventDefault();
						setIsOpen(true);
					}}
				/>
				<h1 className={styles.heading}>
					<span className={styles.headingRow}>Hammerwood</span>
					<span className={styles.headingRow}> Scout Campsite</span>
				</h1>
				<ScoutLogo className={styles.headerLogo} />
			</header>
			<DesktopNavigation />
			<MobileNavigation
				open={isOpen}
				onNavClose={(event) => {
					event.preventDefault();
					setIsOpen(false);
				}}
			/>
		</>
	);
}
