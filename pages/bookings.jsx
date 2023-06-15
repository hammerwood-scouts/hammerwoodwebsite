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
		</Layout>
	);
}
