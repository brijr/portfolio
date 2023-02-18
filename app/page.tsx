import Image from 'next/image';
import Link from 'next/link';
import { Inter } from '@next/font/google';

import Resume from '@/components/Resume';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<main className="text-white">
			{/* Intro Section */}
			<section className="w-full bg-slate-700 lg:p-12 p-6">
				<div className="lg:max-w-screen-md">
					<h1 className="text-4xl mb-16">Bridger Tower is a Designer and Developer</h1>
					<h2 className="text-2xl mb-4">
						Front End Developer :: Passionate Designer :: Creative Technologist :: Product Marketer
						:: Brand Strategist
					</h2>
					<h3 className="text-xl">
						My name is Bridger Tower and I am a <em>designer</em>, <em>developer</em>, and{' '}
						<em>marketer</em> located in Salt Lake City, Utah. I am passionate about the balance of
						aesthetics and usability on the web and in software.
					</h3>
				</div>
			</section>
			{/* Page Content */}
			<section className="w-full bg-slate-800 lg:p-12 p-6">
				<div className="lg:max-w-screen-md">
					<Resume />
				</div>
			</section>
		</main>
	);
}
