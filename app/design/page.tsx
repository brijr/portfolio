import DribbbleShots from '@/components/DribbbleShots';
import dynamic from 'next/dynamic';

const WithCustomLoading = dynamic(() => import('@/components/DribbbleShots'), {
	loading: () => <p>Loading...</p>
});

export default async function Design() {
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
				<div className="lg:max-w-screen-md">
					<DribbbleShots />
				</div>
			</section>
		</main>
	);
}
