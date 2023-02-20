import work from '@/stores/work.json';

export default function Projects() {
	return (
		<>
			<h2 className="text-4xl mb-12 font-semi-bold ">Project Highlights</h2>
			<ul>
				{work.projects.map(
					(project: { name: string; url: string; technology: string; year: number }) => (
						<li key={project.name} className="mb-6 pl-4 border-l-2 flex flex-col">
							<a
								href={project.url}
								target="_blank"
								rel="noreferrer"
								className="text-xl transition-all duration-500 hover:pl-2"
							>
								{project.name} &rarr;
							</a>
							<small className="opacity-50">
								{project.technology} | {project.year}
							</small>
						</li>
					)
				)}
			</ul>
		</>
	);
}
