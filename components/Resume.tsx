import resume from '@/stores/resume.json';

export default function Resume() {
	return (
		<>
			<h2 className="text-2xl mb-4">{`>`} Experience</h2>
			<ul>
				{resume.jobs.map((job) => (
					<li className="mb-8">
						<div className="mb-4">
							<a className="text-xl" href={job.href}>
								{job.title} at {job.company}
							</a>
							<small className="ml-4">{job.years}</small>
							<p className="italic opacity-50">{job.location}</p>
						</div>
						<p className="border-l-2 pl-4">{job.description}</p>
						<div></div>
					</li>
				))}
			</ul>
		</>
	);
}
