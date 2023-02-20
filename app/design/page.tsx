import dynamic from 'next/dynamic';
import { Key } from 'react';
import Projects from '@/components/Projects';

var accessToken = '33f6b249840bf29923d747505622fb27fefa014de97c331c2633ae85c2770b36';

async function getDribbbleShots() {
	const res = await fetch(`https://api.dribbble.com/v2/user/shots?access_token=${accessToken}`);
	const data = await res.json();
	return data;
}

export default async function Design() {
	const data = await getDribbbleShots();

	return (
		<main className="text-white">
			{/* Intro Section */}
			<section className="w-full bg-slate-500 lg:p-32 p-6">
				<div className="lg:max-w-screen-md">
					<h1 className="text-6xl mb-12">
						Design{' '}
						<span className="block text-2xl opacity-75 leading-tight mt-4">Simple, but Better</span>
					</h1>
					<h2 className="hidden text-2xl mb-4">
						Front End Developer :: Product Designer :: Creative Technologist :: Educated Marketer ::
						Brand Strategist
					</h2>
				</div>
			</section>
			{/* Page Content */}
			<section className="w-full bg-slate-300 text-slate-900 lg:p-32 p-6">
				{/* Thoughts Section */}
				<div className="lg:max-w-screen-md">
					<p className="mb-8 text-2xl">
						I have made design a major part of my life for years. I constantly strive to improve the
						world around me through design.
					</p>
					<p>
						Design shapes how we interact with the world around us. It can help bring clarity and
						purpose to seemingly mundane objects or experiences. It can also be an avenue for
						self-expression, allowing us to create something that expresses our values, beliefs, and
						ideas.
					</p>
					<p className="my-4">
						Design plays an integral role in creating an aesthetic that enhances user experiences,
						while adding functionality. From the way a chair is designed to provide comfort, to the
						way a website is designed to be user-friendly and visually appealing, design helps us to
						interact with objects and experiences in meaningful ways. Design is everywhere and it
						helps to create a world that we can enjoy, appreciate and learn from.
					</p>
					<p className="mt-8 mb-8 text-xl pl-4 border-l-2">
						"Less, but better." <small>Dieter Rams</small>
					</p>
				</div>
				<div className="lg:max-w-screen-md p-4 md:p-8 mb-12 rounded-xl text-lg bg-slate-200">
					<p className="mb-4 border-b-2 opacity-75 text-2xl font-medium">
						What makes up my design process?
					</p>
					<ul className="list-item md:grid md:grid-cols-2">
						<li>&rarr; Research</li>
						<li>&rarr; Branding</li>
						<li>&rarr; Typography</li>
						<li>&rarr; Color Theory</li>
						<li>&rarr; Motion Design</li>
						<li>&rarr; User Experience Design (UX Design)</li>
						<li>&rarr; User Interface Design (UI Design)</li>
						<li>&rarr; Design Systems</li>
						<li>&rarr; Aesthetics</li>
						<li>&rarr; Minimalism</li>
						<li>&rarr; Figma and Prototyping</li>
						<li>&rarr; Wireframing</li>
						<li>&rarr; Site Architecture</li>
					</ul>
				</div>

				<div className="lg:max-w-screen-md mb-12 md:mb-24 md:mt-24">
					<Projects />
				</div>
				{/* Dribbble section */}
				<div className="lg:max-w-screen-md">
					<h3 className="text-4xl mb-6">
						Recent Designs from <a href="https://dribbble.com/brijr">my Dribbble</a>
					</h3>
					<ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
						{data.map(
							(shot: {
								title: Key | any | undefined;
								html_url: any | undefined;
								images: { normal: any | undefined };
							}) => (
								<li key={shot.title}>
									<a href={shot.html_url} rel="noreferrer" target="_blank">
										<img
											className="hover:scale-110 transition-all"
											src={shot.images.normal}
											alt="Dribbble Shot by Bridger Tower"
										/>
									</a>
								</li>
							)
						)}
					</ul>
				</div>
			</section>
		</main>
	);
}
