import { Layout } from '../components/Layout/Layout';

export default function Bookings() {
	return (
		<Layout title="Bookings">
			<h1>Bookings & Enquiries</h1>
			<p>
				We recommend that all organisers arrange a site visit before their stay.
				This will help you to choose a site, plan your stay, and improve your
				risk assessments.
			</p>
			<p>
				<strong>Booking contact: Trevor Flanders</strong>
			</p>
			<address>
				<strong>Trevor Flanders</strong>
				<br />
				94 Summerhouse Drive
				<br />
				Bexley
				<br />
				Kent
				<br />
				DA5 2EJ
				<br />
				<br />
				<strong>Tel: </strong>
				<a href="tel:+447503213588">07503 213588</a>
				<br />
				<strong>Email: </strong>
				<a href="mailto:trevor.flanders@hotmail.co.uk">
					trevor.flanders@hotmail.co.uk
				</a>
				<br />
			</address>

			<h2>Prices</h2>
			<span>(valid from 1st April 2019)</span>

			<h3>Prices per person</h3>
			<table>
				<tbody>
					<tr>
						<td>Day use only</td>
						<td>£1.50</td>
					</tr>
					<tr>
						<td>Camping (24 hours)</td>
						<td>£3.50</td>
					</tr>
					<tr>
						<td>Hall & Lodge*</td>
						<td>£5.00</td>
					</tr>
				</tbody>
			</table>
			<p>*Available separately on request.</p>
			<p>
				A deposit is payable once booked. If this deposit is not paid in
				reasonable time we may allow another party to book that site or
				building.
			</p>

			<h3>Deposit amount</h3>
			<table>
				<tbody>
					<tr>
						<td>Camping (3 nights or less)</td>
						<td>£10.00</td>
					</tr>
					<tr>
						<td>Camping (more than 3 nights)</td>
						<td>£50.00</td>
					</tr>
					<tr>
						<td>Hall & Lodge (3 nights or less)</td>
						<td>£20.00</td>
					</tr>
					<tr>
						<td>Hall & Lodge (more than 3 nights)</td>
						<td>£80.00</td>
					</tr>
				</tbody>
			</table>
		</Layout>
	);
}
