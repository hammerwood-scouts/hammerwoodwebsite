import { Layout } from '../components/Layout/Layout';

export default function Meetings() {
	return (
		<Layout>
			<h1>Meetings</h1>
			<table class="meetings-table">
				<thead>
					<tr class="header-row">
						<th>Meeting</th>
						<th>Date</th>
						<th>Documentation</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Management Meeting #48</td>
						<td>17/07/2021</td>
						<td>
							<a
								href="https://docs.google.com/document/d/1hUdsDM4X80AOBdx9XqedbLup7KxbHzeF_0bHor7hCl8/edit?usp=sharing"
								target="_blank"
								rel="noopener noreferrer"
							>
								Upcoming Meeting Agenda
							</a>
						</td>
					</tr>
					<tr>
						<td>Management Meeting #47</td>
						<td>15/05/2021</td>
						<td>
							<a
								href="https://drive.google.com/file/d/1XSIbdVvgxOZ3qFLrCefGSo-q9fBk140p/view?usp=sharing"
								target="_blank"
								rel="noopener noreferrer"
							>
								Draft Meeting Minutes
							</a>
						</td>
					</tr>
					<tr>
						<td>Management Meeting #46</td>
						<td>20/03/2021</td>
						<td>
							{' '}
							<a
								href="https://drive.google.com/file/d/11By-LdCcJzfB2lBdsTS5LkI3LB1qGZRa/view?usp=sharing"
								target="_blank"
								rel="noopener noreferrer"
							>
								Approved Meeting Minutes
							</a>
						</td>
					</tr>
					<tr>
						<td>Management Meeting #45</td>
						<td>16/01/2021</td>
						<td>
							<a
								href="https://drive.google.com/file/d/16XS8uwDe8vzrIm1QLNbzzi1dSlgWjOrC/view?usp=sharing"
								target="_blank"
								rel="noopener noreferrer"
							>
								Approved Meeting Minutes
							</a>
						</td>
					</tr>
					<tr>
						<td>Management Meeting #44</td>
						<td>19/09/2020</td>
						<td>
							<a
								href="https://drive.google.com/file/d/1IsSnxCDIEimPcIkG9sy4wZ4IgfLbIRQv/view?usp=sharing"
								target="_blank"
								rel="noopener noreferrer"
							>
								Approved Meeting Minutes
							</a>
						</td>
					</tr>
					<tr>
						<td>AGM 2020</td>
						<td>19/09/2020</td>
						<td>
							<a
								href="https://docs.google.com/document/d/1VrbFGzFAyuiMxCVGbi91y7CAcA7eATVqrW8CoxK0Y_c/edit?usp=sharing"
								target="_blank"
								rel="noopener noreferrer"
							>
								Draft Meeting Minutes
							</a>
						</td>
					</tr>
					<tr>
						<td>Management Meeting #43</td>
						<td>20/06/2020</td>
						<td>
							<a
								href="https://docs.google.com/document/d/1PdrTKTiAtJznVmfw9L679jlhCB9_qxT2UpQz-kwGOs8/edit?usp=sharing"
								target="_blank"
								rel="noopener noreferrer"
							>
								Approved Meeting Minutes
							</a>
						</td>
					</tr>
					<tr>
						<td>Management Meeting #42</td>
						<td>14/03/2020</td>
						<td>
							<a
								href="https://drive.google.com/file/d/1Fy1YeuaFP5zQmW4weV2CWrMViCaWTJi0/view?usp=sharing"
								target="_blank"
								rel="noopener noreferrer"
							>
								Approved Meeting Minutes
							</a>
						</td>
					</tr>
					<tr>
						<td>Management Meeting #41</td>
						<td>18/01/2020</td>
						<td>
							<a
								href="https://drive.google.com/file/d/1WvEtg3kVWmg2PKPxBzuGWZ_6lPicsbNR/view?usp=sharing"
								target="_blank"
								rel="noopener noreferrer"
							>
								Approved Meeting Minutes
							</a>
						</td>
					</tr>
				</tbody>
			</table>
		</Layout>
	);
}
