import Link from 'next/link';
import { Layout } from '../components/Layout/Layout';
import { VisuallyHidden } from '../components/Typography/Typography';

export default function Hiking() {
	return (
		<Layout title="Hiking">
			<h1>Hiking</h1>
			<p>
				Situated in the middle of a chain of 6 campsites, Hammerwood Campsite is
				perfect for bronze and silver Duke of Edinburgh Award expeditions.
				Likewise, it is perfect for Chief Scout Award expeditions of all levels.
			</p>
			<figure>
				<img
					src="/images/vanguard-way.jpg"
					alt="The Vanguard Way footpath passing under a stone bridge."
				/>
				<figcaption>
					Photo ©
					<a href="https://www.geograph.org.uk/profile/34298">Peter Trimming</a>
					(
					<a href="http://creativecommons.org/licenses/by-sa/2.0/">
						cc-by-sa/2.0
					</a>
					)
				</figcaption>
			</figure>

			<p>
				<a href="http://www.vanguardway.org.uk/">The Vanguard Way</a> passes
				through Hammerwood Campsite. It is a long distance walking trail from
				South London to Newhaven on the south coast. Hiking around Hammerwood
				can involve traveling through West Sussex, East Sussex and/or Kent.
			</p>
			<h2>Nearby Campsites</h2>
			<Link href="/images/hikingmap.jpg">
				<a>
					<img src="/images/hikingmap.jpg" alt="Map of nearby campsites" />
					<VisuallyHidden>View larger image</VisuallyHidden>
				</a>
			</Link>
			<ol>
				<li>
					<strong>Stanford Scout Camp Site</strong>
					<br />
					<a href="mailto:StanfordScoutCampSite@gmail.com">
						StanfordScoutCampSite@gmail.com
					</a>
					<br />
					<a href="https://sites.google.com/site/stanfordscoutcampsite/">
						https://sites.google.com/site/stanfordscoutcampsite/
					</a>
				</li>
				<li>
					<strong>Blackland Farm Activity Centre</strong>
					<br />
					<a href="mailto:blackland@girlguiding.org.uk">
						blackland@girlguiding.org.uk
					</a>
					<br />
					<a href="http://www.blacklandfarm.org.uk/">
						http://www.blacklandfarm.org.uk/
					</a>
				</li>
				<li>
					<strong>Broadstone Warren Scout Camp (closed)</strong>
					<br />
					<a href="http://www.broadstonewarren.org.uk/">
						http://www.broadstonewarren.org.uk/
					</a>
				</li>
				<li>
					<strong>Hammerwood Scout Campsite</strong>
					<br />
					<a href="mailto:trevor.flanders@hotmail.co.uk">
						trevor.flanders@hotmail.co.uk
					</a>
					<br />
					<a href="http://hammerwood.org.uk/">http://hammerwood.org.uk/</a>
				</li>
				<li>
					<strong>Adamswell Scout Campsite</strong>
					<br />
					<a href="http://www.adamswell.org.uk">http://www.adamswell.org.uk</a>
				</li>
				<li>
					<strong>Woodhill Scout & Guide Centre</strong>
					<br />
					<a href="http://campsites.scouts.org.uk/sites/580">
						http://campsites.scouts.org.uk/sites/580
					</a>
				</li>
			</ol>
		</Layout>
	);
}
