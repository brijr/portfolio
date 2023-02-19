import Image from 'next/image';
import Link from 'next/link';

import { Key } from 'react';

var accessToken = '33f6b249840bf29923d747505622fb27fefa014de97c331c2633ae85c2770b36';

async function getDribbbleShots() {
	const res = await fetch(`https://api.dribbble.com/v2/user/shots?access_token=${accessToken}`);
	const data = await res.json();
	return data;
}

export default async function DribbleShots() {
	const data = await getDribbbleShots();
	return (
		<div>
			<h3 className="text-4xl mb-6">
				Recent Designs from <a href="https://dribbble.com/brijr">my Dribbble</a>
			</h3>
			<ul className="grid grid-cols-2 gap-2">
				{data.map(
					(shot: {
						title: Key | null | undefined;
						html_url: string | undefined;
						images: { normal: string | undefined };
					}) => (
						<li key={shot.title}>
							<a href={shot.html_url} target="_blank">
								<img
									className="hover:scale-110 transition-all"
									src={shot.images.normal}
									alt="Dribbble Shot by Bridger Tower"
								/>
							</a>
						</li>
					)
				)}
			</ul>
		</div>
	);
}
