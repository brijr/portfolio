const testimonials = [
	{
		quote:
			"I've worked with Bridger on many projects, including product management and design projects. Not only does he excel in working with a team, but he has a keen eye for design and a deep understanding of the customer. Bridger never loses sight of the long term goals. Not only is he great to work with, but he is overall a genuine person that is needed on any team. I would recommend Bridger to anyone looking for a talented product designer.",
		name: 'Cameron Youngblood',
		title: 'Fullstack Developer',
		href: 'https://media.licdn.com/dms/image/D5603AQH8aZ_0o0LFeQ/profile-displayphoto-shrink_100_100/0/1676184286240?e=1682553600&v=beta&t=zROpar2QmJq-2-PDdTc3uHfBOzcBVlfo4FvUOjDb3rU'
	},
	{
		quote:
			"Bridger is an incredible team member and creative force. I had the privilege of working with him for the past year. He always brought great contemporary ideas, excellent problem solving strategies and an eagerness to learn that can't be surpassed. A unicorn in the trade - his working knowledge of both design and development constantly wowed the team. He is authentic, kind, and processes problems with such thoughtfulness and intelligence. It has been such a pleasure working with him, learning from him and having him on my team. Any company would be so lucky to have him.",
		name: 'Tasha Monserrat',
		title: 'Creative Director',
		href: 'https://media.licdn.com/dms/image/C4E03AQGKTmZo-Po1Pg/profile-displayphoto-shrink_100_100/0/1517685695118?e=1682553600&v=beta&t=QaP9MQMb2HVtfX53Hqczcre89ATMptAzHQgVbT8Ai8Q'
	},
	{
		quote:
			'Bridger is a brilliant developer with a talented eye for all things design! I was lucky enough to work with him during our time at Tackle on many projects and his level of dedication to our website and brand assets was bar none. Bridger is genuinely a wonderful person all-around and any team should consider themselves very lucky to have Bridger on their side!',
		name: 'Thao Littler',
		title: 'Sr. Customer Advocacy Manager',
		href: 'https://media.licdn.com/dms/image/D5603AQH7d-z7eBbXgQ/profile-displayphoto-shrink_100_100/0/1674774701043?e=1682553600&v=beta&t=0MrF4XDWGrch6jcIL4JOxu3VXzTtir3o2ZHWGvEZCY4'
	},
	{
		quote:
			"Bridger is hands-down one of the most talented (and kind) people I have ever worked with. During our time together on the creative team at Tackle, I had the pleasure of collaborating directly with Bridger on a variety of projects. His 'can-do' attitude and willingness to face any challenge with creative solutions is something rare and so incredibly valuable. Bridger's work ethic goes above and beyond, proving to be a dedicated team member that is always ready and willing to support the needs of others. Bridger is a jack-of-all-trades, bringing both excellent web development skills and innovative design solutions to the table. His love for learning is inspirational, keeping up with the latest and greatest design/web development technology and trends. Any team would be so lucky to have Bridger and would greatly benefit from everything he contributes to a team!",
		name: 'Mary-Louise Wang',
		title: 'Graphic Designer',
		href: 'https://media.licdn.com/dms/image/C5603AQFXaIviygo4hg/profile-displayphoto-shrink_100_100/0/1649254576391?e=1682553600&v=beta&t=w3bPC0ayz6u5mVMpnBdsPtYtWrw2mcUv-S5uSULnl6A'
	},
	{
		quote:
			'Bridger extremely talented, creative, and analytical. He is flexible, he rolls with the punches and gets things done quickly and thoughtfully. Bridger supported the entire marketing team, through tracking leads, revamping the entire website, and most impressively creating our first-ever interactive page that led to the most views on our annual report for the entire year!',
		name: 'Michelle Artreche',
		title: 'Marketing Manager',
		href: 'https://media.licdn.com/dms/image/D5603AQHI-8qao4Gl1Q/profile-displayphoto-shrink_100_100/0/1676484764671?e=1682553600&v=beta&t=Qi7PiuAjmul2B1um0Q9R6ggfU6pdJsTnLJ_6Y6SHUdM'
	}
];

export default function Testimonials() {
	return (
		<section>
			<div className="mx-auto max-w-screen-xl py-24">
				<h2 className="text-3xl font-medium mb-6">Testimonials</h2>
				<div className="[column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8">
					<ul>
						{testimonials.map(
							(testimonial: { quote: string; name: string; title: string; href: string }) => (
								<li key={testimonial.name} className="mb-8 sm:break-inside-avoid">
									<blockquote className="rounded-xl bg-gray-50 p-6 shadow-md">
										<p className="leading-relaxed text-gray-700">{testimonial.quote}</p>
									</blockquote>
									<div className="mt-4 flex items-center gap-4">
										<img
											alt="Headshot"
											src={testimonial.href}
											className="h-12 w-12 rounded-full object-cover"
										/>
										<div className="text-sm">
											<p className="font-medium">{testimonial.name}</p>
											<p className="mt-1">{testimonial.title}</p>
										</div>
									</div>
								</li>
							)
						)}
					</ul>
				</div>
			</div>
		</section>
	);
}
