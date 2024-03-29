import Image from 'next/image';
import Link from 'next/link';

// Components
import Cards from '@/components/Cards';
import Library from '@/components/Library';
import Testimonials from '@/components/Testimonials';

// Image Imports
import venn from '@/public/venn.png';

export default function Home() {
	return (
		<main className="text-white ">
			{/* Intro Section */}
			<section className="w-full bg-slate-700 lg:p-32 p-6">
				<div className="lg:max-w-screen-md">
					<h1 className="text-6xl mb-12 tracking-in-expand">
						Bridger Tower{' '}
						<span className="block text-2xl opacity-75 leading-tight mt-4">
							Designer and Developer
						</span>
					</h1>
					<h2 className="hidden text-2xl mb-4">
						Marketing Designer :: Web Developer :: Product Fanatic :: Creative Technologist :: Brand
						Strategist
					</h2>
				</div>
			</section>
			{/* Page Content */}
			<section className="w-full bg-slate-800 lg:p-32 p-6">
				<div className="lg:max-w-screen-md">
					<h3 className="text-2xl lg:text-4xl">
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
						leads to powerful products, impactful digital experiences, and further innovation.
					</p>
					<div className="my-12 lg:w-3/4">
						<Image src={venn} alt="Venn diagram of Bridger Tower's Favorite Place" />
					</div>
					<a
						className="w-full my-16 text-xl h-32 lg:h-48 flex font-semibold items-end rounded-lg p-6 transition-all hover:text-slate-800 hover:bg-slate-200 border-slate-200 border-2"
						href="https://bridger.info"
						rel="noreferrer"
						target="_blank"
					>
						See my Product Design Portfolio &rarr;
					</a>
				</div>
				<div className="lg:max-w-screen-md">
					<Library />
				</div>
				<div className="lg:max-w-screen-md">

					<Testimonials />
					<p>&rarr; Thanks for visiting!</p>
					<a className="block" href="https://github.com/brijr/portfolio">
						&rarr; Check out the Source Code for this portfolio here!
					</a>
				</div>
			</section>
		</main>
	);
}
