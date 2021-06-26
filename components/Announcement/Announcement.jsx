import styles from './Announcement.module.css';

export function Announcement() {
	// This announcement is displayed before the main content. It can be displayed in one of 3 ways which can be changed based on the classes added.
	// The “announcement” class on its own will display a green border and background for informational messages.
	// Adding the “orange” class will show an orange border and background for more warning type messages (i.e. “Booking are almost full.”)
	// Adding the “red” class will show a red border and background for more severe type messages (i.e. “The site is closed.”)
	return (
		<div className={[styles.announcement, styles.red].join(' ')}>
			Notice: The campsite is currently closed due to COVID-19 restrictions.
		</div>
	);
}