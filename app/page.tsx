import Image from 'next/image';
import Link from 'next/link';

// Components
import Cards from '@/components/Cards';

// Image Imports
import cap from '@/public/cap.svg';
import venn from '@/public/venn.png';

export default function Home() {
	return (
		<main className="text-white">
			{/* Intro Section */}
			<section className="w-full bg-slate-700 lg:p-32 p-6">
				<div className="lg:max-w-screen-md">
					<h1 className="text-6xl mb-12">
						Bridger Tower{' '}
						<span className="block text-2xl opacity-75 leading-tight mt-4">
							Product Designer / Frontend Developer
						</span>
					</h1>
					<h2 className="hidden text-2xl mb-4">
						Front End Developer :: Product Designer :: Creative Technologist :: Brand Strategist
					</h2>
				</div>
			</section>
			{/* Page Content */}
			<section className="w-full bg-slate-800 lg:p-32 p-6">
				<div className="lg:max-w-screen-md">
					<h3 className="text-4xl">
						I am a{' '}
						<Link className="hover:font-bold transition-all duration-500" href="/design">
							designer
						</Link>
						,{' '}
						<Link className="hover:font-bold transition-all duration-500" href="/code">
							developer
						</Link>
						, and{' '}
						<Link className="hover:font-bold transition-all duration-500" href="/marketing">
							marketer
						</Link>{' '}
						located in Salt Lake City, Utah. I am passionate about the balance of
						<span className="highlight">aesthetics</span> and{' '}
						<span className="highlight">usability</span> on the web and in software.
					</h3>
				</div>
				<div className="slide-in-bottom lg:max-w-screen-md">
					<Cards />
					<h3 className="mb-4">
						I live for <span>design</span>, <span>code</span>, <span>technology</span>, and{' '}
						<span>marketing</span>.
					</h3>
					<p className="mb-4">
						As one studied and involved heavily in design, development, and marketing and I seek to
						bridge the gaps between them.
					</p>
					<p>
						I believe the combination and collaboration of design, code, technology, and marketing
						leads to powerful products, impactful websites, and further innovation.
					</p>
					<div className="my-12 lg:w-3/4">
						<Image src={venn} alt="Venn diagram of Bridger Tower's Favorite Place" />
					</div>
				</div>
			</section>
		</main>
	);
}
