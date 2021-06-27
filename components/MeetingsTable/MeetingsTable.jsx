import styles from './MeetingsTable.module.css';

function TableRow({ meeting }) {
	const {
		title,
		date,
		agenda: { link, status },
	} = meeting;
	return (
		<tr>
			<td>{title}</td>
			<td>{date}</td>
			<td>
				<a href={link} target="_blank" rel="noopener noreferrer">
					{status}
				</a>
			</td>
		</tr>
	);
}

export function MeetingsTable({ meetings }) {
	return (
		<table className={styles.meetingsTable}>
			<thead>
				<tr className={styles.headerRow}>
					<th>Meeting</th>
					<th>Date</th>
					<th>Documentation</th>
				</tr>
			</thead>
			<tbody>
				{meetings.map((meeting, index) => {
					return <TableRow key={index} meeting={meeting} />;
				})}
			</tbody>
		</table>
	);
}
