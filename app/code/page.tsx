import Image from 'next/image';
import Link from 'next/link';

import Projects from '@/components/Projects';

export default function Code() {
	return (
		<main className="text-white">
			{/* Intro Section */}
			<section className="w-full bg-zinc-800 lg:p-32 p-6">
				<div className="lg:max-w-screen-md">
					<h1 className="text-6xl mb-12">
						Code{' '}
						<span className="block text-2xl opacity-75 leading-tight mt-4">
							Endless Possibilities
						</span>
					</h1>
					<h2 className="hidden text-2xl mb-4">
						Front End Developer :: Product Designer :: Creative Technologist :: Educated Marketer ::
						Brand Strategist
					</h2>
				</div>
			</section>

			{/* Page Content */}
			<section className="w-full bg-zinc-700 lg:p-32 p-6">
				{/* Thoughts Section */}
				<div className="lg:max-w-screen-md">
					<p className="mb-8 text-2xl">
						The journey of learning to code has been one of the most fulfilling experiences of my
						life.
					</p>
					<p className="my-4">
						I've always been fascinated by the endless possibilities that code can provide. I've
						always been a creative person, and I've always been a problem solver. When I discovered
						that I could combine these two passions, I knew I had found my calling.
					</p>
					<p>
						I seek everyday to grow as a developer and consistently take the time to learn new
						technologies that will set me and my company up for success.
					</p>

					<p className="mt-8 mb-8 text-xl pl-4 border-l-2">
						"Never stop improving." <small>Lowe's</small>
					</p>
				</div>
				<div className="lg:max-w-screen-md p-4 md:p-8 mb-12 rounded-xl text-lg bg-zinc-600">
					<p className="mb-4 opacity-75 text-2xl font-medium">What makes up my dev tech stack?</p>
					<div className="flex xl:gap-6 gap-4 flex-col xl:flex-row">
						<div className="xl:w-1/2">
							<h5 className="bold text-xl mb-2">// Technologies in Use</h5>
							<ul>
								<li>
									&rarr; &nbsp;
									<a href="https://nextjs.org">Next JS</a> and{' '}
									<a href="https://beta.reactjs.org/">React</a>
								</li>
								<li>
									&rarr; &nbsp;
									<a href="https://www.typescriptlang.org/">TypeScript</a>
								</li>
								<li>
									&rarr; &nbsp;
									<a href="https://tailwindcss.com">Tailwind CSS</a>
								</li>
								<li>
									&rarr; &nbsp;
									<a href="https://www.framer.com/motion/">Framer Motion</a>
								</li>
								<li>
									&rarr; &nbsp;
									<a href="https://www.figma.com">Figma</a>
								</li>
								<li>&rarr;&nbsp; GraphQL</li>
								<li>
									&rarr; &nbsp;
									<a href="https://svelte.dev">Svelte</a> and{' '}
									<a href="https://kit.Svelte.dev">SvelteKit</a>
								</li>
								<li>
									&rarr; &nbsp;<a href="https://js.info">Javascript</a> and{' '}
									<a href="https://www.json.org/json-en.html">JSON</a>
								</li>
								<li>
									&rarr; &nbsp;
									<a href="https://webflow.com">Webflow</a> and their CMS
								</li>
								<li>
									&rarr; &nbsp;
									<a href="https://wordpress.org">Wordpress</a> and some{' '}
									<a href="https://www.php.net/">PHP</a>
								</li>
								<li>
									&rarr; &nbsp;
									<a href="https://shopify.com">Shopify</a> and{' '}
									<a href="https://shopify.dev/api/liquid">Liquid</a>
								</li>
							</ul>
						</div>
						<div className="rounded-xl xl:w-1/2">
							<h5 className="bold text-xl mb-2">// Dev Learning Roadmap</h5>
							<ul>
								<li>&rarr; Backend Development for Web Applications</li>
								<li>&rarr; Continual Mastery of Current Languages</li>
								<li>&rarr; Always be Learning and Building</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="lg:max-w-screen-lg flex gap-1">
					{' '}
					<a href="https://www.javascript.com" target="_blank" rel="noreferrer noopener">
						<img
							src="https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/core/javascript.svg"
							alt="JavaScript"
							width="50"
							height="50"
						/>
					</a>{' '}
					<a href="https://www.php.net" target="_blank" rel="noreferrer noopener">
						<img
							src="https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/core/php.svg"
							alt="PHP"
							width="50"
							height="50"
						/>
					</a>{' '}
					<a href="https://www.typescriptlang.org" target="_blank" rel="noreferrer noopener">
						<img
							src="https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/core/typescript.svg"
							alt="Typescript"
							width="50"
							height="50"
						/>
					</a>{' '}
					<a href="https://html.com/html5/" target="_blank" rel="noreferrer noopener">
						<img
							src="https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/frontend/html5.svg"
							alt="HTML5"
							width="50"
							height="50"
						/>
					</a>{' '}
					<a href="https://css3.com" target="_blank" rel="noreferrer noopener">
						<img
							src="https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/frontend/css3.svg"
							alt="CSS3"
							width="50"
							height="50"
						/>
					</a>{' '}
					<a href="https://reactjs.org" target="_blank" rel="noreferrer noopener">
						<img
							src="https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/frontend/react.svg"
							alt="React"
							width="50"
							height="50"
						/>
					</a>{' '}
					<a href="http://svelte.dev" target="_blank" rel="noreferrer noopener">
						<img
							src="https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/frontend/svelte.svg"
							alt="Svelte"
							width="50"
							height="50"
						/>
					</a>{' '}
					<a href="https://nextjs.org" target="_blank" rel="noreferrer noopener">
						<img
							src="https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/frontend/nextjs.svg"
							alt="NextJS"
							width="50"
							height="50"
						/>
					</a>{' '}
					<a href="https://sass-lang.com" target="_blank" rel="noreferrer noopener">
						<img
							src="https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/frontend/sass.svg"
							alt="SASS"
							width="50"
							height="50"
						/>
					</a>{' '}
					<a href="http://tailwindcss.com" target="_blank" rel="noreferrer noopener">
						<img
							src="https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/frontend/tailwind.svg"
							alt="Tailwind"
							width="50"
							height="50"
						/>
					</a>{' '}
					<a href="https://mui.com/material-ui/" target="_blank" rel="noreferrer noopener">
						<img
							src="https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/frontend/mui.svg"
							alt="Material UI"
							width="50"
							height="50"
						/>
					</a>{' '}
					<a href="https://firebase.google.com" target="_blank" rel="noreferrer noopener">
						<img
							src="https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/backend/firebase.svg"
							alt="Firebase"
							width="50"
							height="50"
						/>
					</a>{' '}
					<a href="https://supabase.com" target="_blank" rel="noreferrer noopener">
						<img
							src="https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/backend/supabase.svg"
							alt="Supabase"
							width="50"
							height="50"
						/>
					</a>{' '}
					<a href="http://sanity.io" target="_blank" rel="noreferrer noopener">
						<img
							src="https://raw.githubusercontent.com/0xShapeShifter/dev-story/master/public/images/skills/backend/sanity.svg"
							alt="Sanity"
							width="50"
							height="50"
						/>
					</a>
				</div>

				<div className="lg:max-w-screen-md mb-12 md:mb-24 md:mt-24">
					<Projects />
				</div>
			</section>
		</main>
	);
}
