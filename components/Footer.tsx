import Link from 'next/link';
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';

const internalLinks = [
  {
    name: 'Work',
    href: '/work',
  },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
];

const links = [
	{
		name: 'Resume',
		href: 'https://read.cv/btower'
	},

	{
		name: 'Thoughts',
		href: 'https://brijr.medium.com/'
	},
	{
		name: 'LinkedIn',
		href: 'https://linkedin.com/in/brdgr'
	},
	{
		name: 'GitHub',
		href: 'https://github.com/brijr'
	}
];

export default function Footer() {
	return (
		<footer className="slide-in-right text-lg bg-transparent xl:bg-stone-200 my-12 z-40 xl:fixed xl:flex flex-col justify-between bottom-0 right-0 xl:m-0 xl:p-12 xl:h-full xl:w-1/6">
			<div className="xl:hidden my-12 bg-stone-800 h-[0.5px] w-1/4"></div>
			<div>
				<ul>
					{internalLinks.map((link) => (
						<li>
							<Link className="flex my-2 p-0 items-center group" href={link.href}>
								<p className="m-0 p-0 pr-1 hover:pr-2 transition-[400ms]">{link.name}</p>
								<ArrowUpRightIcon className="hidden w-5 h-5 group-hover:inline" strokeWidth="2" />
							</Link>
						</li>
					))}
				</ul>
			</div>
			<div>
				<ul>
					{links.map((link) => (
						<li>
							<a className="flex my-2 p-0 items-center group" target="_blank" href={link.href}>
								<p className="m-0 p-0 pr-1 hover:pr-2 transition-[400ms]">{link.name}</p>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-5 h-5 hidden group-hover:inline"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
									/>
								</svg>
							</a>
						</li>
					))}
				</ul>
			</div>

			<small className="mt-6 xl:mb-2 leading-tight">
				Website created by <a href="https://btower.dev">Bridger Tower</a> circa 2023.
			</small>
		</footer>
	);
}
