import Image from 'next/image';
import Link from 'next/link';

export default function Work() {
	return (
		<main className="text-white">
			{/* Intro Section */}
			<section className="w-full bg-neutral-500 lg:p-32 p-6">
				<div className="lg:max-w-screen-md">
					<h1 className="text-6xl mb-12">
						Work{' '}
						<span className="block text-2xl opacity-75 leading-tight mt-4">
							Experience and Projects
						</span>
					</h1>
					<h2 className="hidden text-2xl mb-4">
						Front End Developer :: Product Designer :: Creative Technologist :: Educated Marketer ::
						Brand Strategist
					</h2>
				</div>
			</section>
			{/* Page Content */}
			<section className="w-full bg-neutral-300 text-neutral-800 lg:p-32 p-6">
				<div className="lg:max-w-screen-md">
					<h3 className="text-4xl">
						My name is Bridger Tower and I am a <em>designer</em>, <em>developer</em>, and{' '}
						<em>marketer</em> located in Salt Lake City, Utah. I am passionate about the balance of
						<span className="highlight">aesthetics</span> and{' '}
						<span className="highlight">usability</span> on the web and in software.
					</h3>
				</div>
			</section>
		</main>
	);
}
