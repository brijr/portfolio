import Image from 'next/image';
import Link from 'next/link';

export default function Marketing() {
	return (
		<main className="text-white">
			{/* Intro Section */}
			<section className="w-full bg-gray-400 lg:p-32 p-6">
				<div className="lg:max-w-screen-md">
					<h1 className="text-6xl mb-12">
						Marketing{' '}
						<span className="block text-2xl opacity-75 leading-tight mt-4">
							Meeting Business Goals
						</span>
					</h1>
					<h2 className="hidden text-2xl mb-4">
						Front End Developer :: Product Designer :: Creative Technologist :: Educated Marketer ::
						Brand Strategist
					</h2>
				</div>
			</section>
			{/* Page Content */}
			<section className="w-full bg-gray-600 lg:p-32 p-6">
				{/* Thoughts Section */}
				<div className="lg:max-w-screen-md">
					<p className="mb-8 text-2xl">
						Marketing, Advertising, and Branding are in my blood, kind of, but not really.
					</p>
					<p>
						I received my Bachelor's Degree in Advertising and Brand Strategy from Brigham Young
						University. Since, I have worked in multiple industries and been exposed to many styles
						of marketing. I bring this experience and knowledge with me in any endeavour I pursue.
					</p>
					<p className="my-4">
						Marketing and branding are essential tools to build successful businesses and brands. To
						effectively use these tools, innovative and creative mindsets are key - it is important
						to be tenacious, daring, and to think outside the box. With a strong focus on customer
						experience, research and analytics, and effective communications, we can create powerful
						and lasting brands that cut through the clutter and drive sustainable growth.
					</p>
					<p className="mt-8 mb-8 text-xl pl-4 border-l-2">
						"Don't find customers for your product, find products for your customer."{' '}
						<small>Seth Godin</small>
					</p>
				</div>
				<div className="lg:max-w-screen-md p-4 md:p-8 mb-12 rounded-xl text-lg bg-gray-700">
					<p className="mb-4 opacity-75 text-2xl font-medium">Marketing Tools and Skills</p>
					<ul className="list-item md:grid md:grid-cols-2">
						<li>&rarr; Search Engine Optimization (SEO)</li>
						<li>&rarr; Web Accessability</li>
						<li>&rarr; Conversion Rate Optimization (CRO)</li>
						<li>&rarr; Landing Pages and Sales Funnels</li>
						<li>&rarr; Web-focused Copy Writing</li>
						<li>&rarr; Email Marketing</li>
						<li>&rarr; Content Marketing</li>
						<li>&rarr; Social Media Marketing</li>
						<li>&rarr; Social Optimization (ex. OpenGraph)</li>
						<li>&rarr; Paid Ads and Organic Traffic</li>
						<li>&rarr; Advertising Best Practices</li>
					</ul>
				</div>
				<div className="lg:max-w-screen-md">
					<a
						className="w-full my-12 text-xl h-32 lg:h-48 flex items-end rounded-lg p-6 transition-all hover:bg-zinc-300 hover:text-slate-800 border-zinc-300 border-2"
						href="https://brijr.medium.com/"
						rel="noreferrer"
						target="_blank"
					>
						Read some of my thoughts &rarr;
					</a>
				</div>
			</section>
		</main>
	);
}
