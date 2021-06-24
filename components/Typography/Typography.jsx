import styles from './Typography.module.css';

export function VisuallyHidden({ children }) {
	return <span className={styles.visuallyHidden}>{children}</span>;
}
