import Link from 'next/link';
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';

const links = [
	{
		name: 'Work',
		href: '/work'
	},
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
		<footer className="slide-in-right text-lg bg-transparent xl:bg-stone-200 my-12 z-40 xl:fixed xl:flex flex-col justify-between bottom-0 right-0 xl:m-0 xl:p-6 xl:h-full xl:w-1/6">
			<div className="xl:hidden my-12 bg-stone-800 h-[0.5px] w-1/4"></div>
			<div>
				<ul>
					{links.map((link) => (
						<li>
							<a className="flex my-2 p-0 items-center" target="_blank" href={link.href}>
								<p className="m-0 p-0 pr-1 hover:pr-2 transition-[400ms]">{link.name}</p>
							</a>
						</li>
					))}
				</ul>
			</div>

			<p className="mt-6 xl:mb-2">
				Website created by <a href="https://btower.dev">Bridger Tower</a> circa 2023.
			</p>
		</footer>
	);
}
