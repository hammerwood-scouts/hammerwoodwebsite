import { Layout } from '../components/Layout/Layout';

export default function Location() {
	return (
		<Layout title="Location">
			<h1>Location</h1>
			<p>
				Hammerwood is located off the A264, between East Grinstead and Holtye.
				Follow the signs for Hammerwood Park into Hammerwood hamlet. Travel down
				the wiggly road and when you pass the barns on the left you need to take
				a right turn, before the sign marked “private road”. Travel down the
				track next to the fields until you reach the campsite. On entering the
				campsite, you must immediately turn right into the car park. (Note: this
				track is not suitable for anything larger than an ordinary width
				minibus.)
			</p>
			<p>
				When traveling from the East you need to take the exit on the left
				immediately after St. Stephen’s Church.
			</p>

			<iframe
				className="google-maps-embed"
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3191.966604700625!2d0.052008212538554345!3d51.12962427772824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDA3JzQ2LjciTiAwwrAwMycwNy41IkU!5e1!3m2!1sen!2suk!4v1434993334935"
				frameBorder="0"
			></iframe>
		</Layout>
	);
}
