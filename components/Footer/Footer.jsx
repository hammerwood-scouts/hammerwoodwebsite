import { FacebookLogo } from '../icons/FacebookLogo';
import { InstagramLogo } from '../icons/InstagramLogo';
import { VisuallyHidden } from '../Typography/Typography';
import styles from './Footer.module.css';

export function Footer() {
	return (
		<footer className={styles.footer}>
			<div>
				<a
					href="https://www.facebook.com/pages/Hammerwood%20Scout%20Campsite/412629742110381/"
					className={styles.socialLink}
				>
					<FacebookLogo />
					<VisuallyHidden>Follow us on facebook</VisuallyHidden>
				</a>
				<a
					href="https://www.instagram.com/hammerwood_campsite/"
					className={styles.socialLink}
				>
					<InstagramLogo />
					<VisuallyHidden>Follow us on instagram</VisuallyHidden>
				</a>
			</div>
			<p>© Hammerwood Scout Campsite Management Committee</p>
		</footer>
	);
}
