import Link from 'next/link';
import { VisuallyHidden } from '../Typography/Typography';
import styles from './Navigation.module.css';

export function Navigation() {
	return (
		<>
			<MobileNavigation />
			<DesktopNavigation />
		</>
	);
}

function MobileNavigation() {
	return (
		<nav className={styles.mobileNavigation}>
			<button
				id="menuClose"
				className={[
					styles.mobileNavMenuButton,
					styles.mobileNavMenuButtonClose,
				].join(' ')}
			>
				<VisuallyHidden>Close navigation menu</VisuallyHidden>
				<svg
					aria-hidden="true"
					version="1.1"
					viewBox="0 0 14 14"
					xmlns="http://www.w3.org/2000/svg"
					xmlnsXlink="http://www.w3.org/1999/xlink"
				>
					<g id="Core" transform="translate(-341.000000, -89.000000)">
						<g id="close" transform="translate(341.000000, 89.000000)">
							<path
								d="M14,1.4 L12.6,0 L7,5.6 L1.4,0 L0,1.4 L5.6,7 L0,12.6 L1.4,14 L7,8.4 L12.6,14 L14,12.6 L8.4,7 L14,1.4 Z"
								id="Shape"
							/>
						</g>
					</g>
				</svg>
			</button>
			<NavLinks />
		</nav>
	);
}

function DesktopNavigation() {
	return (
		<nav className={styles.desktopNavigation}>
			<NavLinks />
		</nav>
	);
}

function NavLink({ href, children }) {
	return (
		<li>
			<Link href={href}>
				<a className={styles.navigationLink}>{children}</a>
			</Link>
		</li>
	);
}

function NavLinks() {
	const links = [
		{ path: '/camping', name: 'Camping' },
		{ path: '/facilities', name: 'Facilities' },
		{ path: '/hiking', name: 'Hiking' },
		{ path: '/location', name: 'Location' },
		{ path: '/bookings', name: 'Bookings' },
	];

	return (
		<ul className={styles.navigationLinks}>
			{links.map(({ path, name }, i) => {
				return (
					<NavLink key={i} href={path}>
						{name}
					</NavLink>
				);
			})}
		</ul>
	);
}
