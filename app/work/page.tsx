import Image from 'next/image';
import Link from 'next/link';

import Resume from '@/components/Resume';
import Projects from '@/components/Projects';

export default function Work() {
	return (
		<main className="text-white">
			{/* Intro Section */}
			<section className="w-full bg-neutral-500 lg:p-32 p-6">
				<div className="lg:max-w-screen-md">
					<h1 className="text-6xl mb-12 tracking-in-expand">
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
				<div className="lg:max-w-screen-md mb-12 lg:mb-24">
					<Projects />
				</div>
				<div className="lg:max-w-screen-md">
					<Resume />
				</div>
			</section>
		</main>
	);
}
