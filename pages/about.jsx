import { Layout } from '../components/Layout/Layout';

export default function About() {
	return (
		<Layout>
			<h1>About the Campsite</h1>
			<p>
				Hammerwood Scout Campsite is a site of 26 acres of woodland. It is owned
				and managed by 6 Scout groups within the Lewisham Scout District, South
				London, and has been a Scout campsite since 1966.
			</p>
			<p>
				The site is open to Scouts, Guides, youth groups, schools, as well as
				corporate bookings, from the UK and abroad. We are open all year round.
			</p>
			<p>
				The site offers wonderful woodland, open clearings and a large field
				making it suitable for all sorts of different camp activities.
				Surrounded by a network of byways, the site is perfect for hikes and a
				great choice for Duke of Edinburgh training, and for Bronze or Silver
				expeditions.
			</p>
			<p>
				If you have any questions, or would like to arrange a site visit, please{' '}
				<a href="/bookings">contact us</a> and we will be happy to help.
			</p>
			<p>
				Please note that Hammerwood Scout Campsite is not open to public
				camping.
			</p>
		</Layout>
	);
}
