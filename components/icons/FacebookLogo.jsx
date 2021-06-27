import styles from './Logos.module.css';

export function FacebookLogo() {
	return (
		<svg
			className={[styles.logo, styles.facebook].join(' ')}
			alt="Facebook Logo"
			xmlns="http://www.w3.org/2000/svg"
			width="40"
			height="40"
			viewBox="126.445 2.281 589 589"
		>
			<circle cx="420.945" cy="296.781" r="294.5" fill="#3c5a9a" />
			<path
				d="M516.704 92.677h-65.239c-38.715 0-81.777 16.283-81.777 72.402.189 19.554 0 38.281 0 59.357H324.9v71.271h46.174v205.177h84.847V294.353h56.002l5.067-70.117h-62.531s.14-31.191 0-40.249c0-22.177 23.076-20.907 24.464-20.907 10.981 0 32.332.032 37.813 0V92.677h-.032z"
				fill="#fff"
			/>
		</svg>
	);
}
