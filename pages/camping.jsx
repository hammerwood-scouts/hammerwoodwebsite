import { Layout } from '../components/Layout/Layout';

export default function Camping() {
	return (
		<Layout title="Camping">
			<h1>Camping</h1>
			<img
				alt="A photo of one of the camping sites"
				src="/images/camp_trees.jpg"
			/>
			<p>
				The campsite has 10 managed camping grounds, each with their own
				qualities. Some are open and have plenty of space, while others are more
				sheltered. Much of the site is quite wild, and camping can be arranged
				in alternative areas for more ‘wild’ or ‘survival’ style camps.
			</p>
			<p>
				In addition to two main campfire circles, campfires are permitted on
				individual sites. There is plenty of wood on the ground, as well as
				areas with a lot of thin, dead standing trees. Care should be taken in
				these areas but it can be good sawing practise for scouts. We sometimes
				have piles of wood available to use. Please check with a member of site
				staff before using these piles if they are on a site.
			</p>
			<img
				alt="A photo of the field at the bottom of the campsite"
				src="/images/camp_field.jpg"
			/>
			<p>
				At the southern end of the site we have 2 playing fields. These are
				available for everyone to use. If required, you may be able to book one
				of them for a large camp.
			</p>
			<p>
				There are taps for water access across the site, and some camping
				grounds have a sink and/or very basic outdoor kitchen setup. The toilet
				block is available for all campers.
			</p>
		</Layout>
	);
}
