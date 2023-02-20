import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

export default function Cards() {
	return (
		<section className="grid grid-cols-2 lg:grid-cols-4 w-full gap-4 my-12">
			<Link
				href="/work"
				className="w-full h-32 lg:h-48 flex items-end rounded-lg p-6 transition-all hover:bg-slate-200 hover:text-slate-800 border-slate-200 border-2"
			>
				<p className="text-xl -mb-1 font-semibold">Work</p>
				<ArrowUpRightIcon className="w-5 h-5 ml-2 mb-px" />
			</Link>
			<Link
				href="/design"
				className="w-full h-32 lg:h-48 flex items-end rounded-lg p-6 transition-all hover:bg-slate-200 hover:text-slate-800 border-slate-200 border-2"
			>
				<p className="text-xl -mb-1 font-semibold">Design</p>
				<ArrowUpRightIcon className="w-5 h-5 ml-2 mb-px" />
			</Link>
			<Link
				href="/code"
				className="w-full h-32 lg:h-48 flex items-end rounded-lg p-6 transition-all hover:bg-slate-200 hover:text-slate-800 border-slate-200 border-2"
			>
				<p className="text-xl -mb-1 font-semibold">Code</p>
				<ArrowUpRightIcon className="w-5 h-5 ml-2 mb-px" />
			</Link>

			<Link
				href="/marketing"
				className="w-full h-32 lg:h-48 flex items-end rounded-lg p-6 transition-all hover:bg-slate-200 hover:text-slate-800 border-slate-200 border-2"
			>
				<p className="text-xl -mb-1 font-semibold">Marketing</p>
				<ArrowUpRightIcon className="w-5 h-5 ml-2 mb-px" />
			</Link>
		</section>
	);
}
