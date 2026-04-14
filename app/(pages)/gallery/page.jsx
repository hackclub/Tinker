"use client";
import Navbar from "../../components/Navbar";
import React, { useState } from "react";

const example_projects = [
	{
		name: "Example Project",
		image: "/imgs/projects/someimage",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Integer non libero nec nulla facilisis dapibus. Donec vehicula, nunc non fermentum gravida, justo erat pretium purus, vitae imperdiet risus turpis non ipsum.",
		creator: "someone",
		creatorLink: "https://github.com/",
		repo: "https://github.com/",
	},
	{
		name: "Example Project",
		image: "/imgs/projects/someimage",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur vel sem sit amet dolor tristique accumsan.",
		creator: "someone",
		creatorLink: "https://github.com/",
		repo: "https://github.com/",
	},
	{
		name: "Example Project",
		image: "/imgs/projects/someimage",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
		creator: "someone",
		creatorLink: "https://github.com/",
		repo: "https://github.com/",
	},
	{
		name: "Example Project",
		image: "/imgs/projects/someimage",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Integer non libero nec nulla facilisis dapibus. Donec vehicula, nunc non fermentum gravida, justo erat pretium purus, vitae imperdiet risus turpis non ipsum.",
		creator: "someone",
		creatorLink: "https://github.com/",
		repo: "https://github.com/",
	},
	{
		name: "Example Project",
		image: "/imgs/projects/someimage",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur vel sem sit amet dolor tristique accumsan.",
		creator: "someone",
		creatorLink: "https://github.com/",
		repo: "https://github.com/",
	},
	{
		name: "Example Project",
		image: "/imgs/projects/someimage",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
		creator: "someone",
		creatorLink: "https://github.com/",
		repo: "https://github.com/",
	},
	{
		name: "Example Project",
		image: "/imgs/projects/someimage",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Integer non libero nec nulla facilisis dapibus. Donec vehicula, nunc non fermentum gravida, justo erat pretium purus, vitae imperdiet risus turpis non ipsum.",
		creator: "someone",
		creatorLink: "https://github.com/",
		repo: "https://github.com/",
	},
	{
		name: "Example Project",
		image: "/imgs/projects/someimage",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur vel sem sit amet dolor tristique accumsan.",
		creator: "someone",
		creatorLink: "https://github.com/",
		repo: "https://github.com/",
	},
	{
		name: "Example Project",
		image: "/imgs/projects/someimage",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
		creator: "someone",
		creatorLink: "https://github.com/",
		repo: "https://github.com/",
	},
];

export default function Gallery() {
	const [activeProject, setActiveProject] = useState(null);

	return (
		<section
			className="min-h-screen w-full relative"
			style={{ backgroundImage: "url('/imgs/bg-dots.png')" }}
		>
			<Navbar />

			<div className="min-h-screen w-full flex flex-col items-center py-[3vh] pt-[10vh] md:pt-[8vh] px-[4vw] md:px-[5vw]">
				<h1 className="wim text-[10vh] md:text-[17.5vh] text-white">Gallery</h1>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[4vw] md:gap-[2vw] w-full md:w-[90vw]">
					{example_projects.map((proj, idx) => (
						<div
							key={idx}
							onClick={() => setActiveProject(proj)}
							className="relative group cursor-pointer pr-[2vw] md:pr-[0.6vw] pb-[1.1vh]"
						>
							<span className="absolute inset-0 bg-black z-0 translate-x-[0.6vw] translate-y-[0.75vh] transition-all group-hover:translate-x-[0.3vw] group-hover:translate-y-[0.4vh]"></span>

							<div className="relative z-10 bg-white overflow-hidden transition-all group-hover:translate-x-[0.4vw] group-hover:translate-y-[0.5vh]">
								<img
									src={proj.image}
									alt={proj.name}
									className="w-full h-[25vh] md:h-[20vh] object-cover bg-gray-300"
								/>
								<div className="py-[1.5vh] md:py-[0.75vh] px-[4vw] md:px-[1vw] flex flex-col gap-[0.6vh] md:gap-[0.4vh]">
									<h2 className="text-[2.8vh] md:text-[3vh] font-bold tracking-[2px] wim">
										{proj.name}
									</h2>

									<p className="text-[1.8vh] md:text-[2vh] font-light line-clamp-3">
										{proj.description}
									</p>

									<a
										href={proj.creatorLink}
										target="_blank"
										rel="noopener noreferrer"
										onClick={(e) => e.stopPropagation()}
										className="text-[1.6vh] md:text-[1.75vh] italic hover:underline"
									>
										Created by: {proj.creator}
									</a>

									<a
										href={proj.repo}
										target="_blank"
										rel="noopener noreferrer"
										onClick={(e) => e.stopPropagation()}
										className="text-[#1c2d4d] wim text-[2.2vh] md:text-[2.5vh] tracking-[0.1vw] font-semibold hover:underline"
									>
										View Repository
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
				{/* Footer */}
				<div className="mt-[5vh] py-[1.5vh] tracking-[0.1vh] wim text-white text-[1.75vh] w-full text-center md:text-[3.5vh]">
					Made by Clay and Jane
				</div>
			</div>

			{activeProject && (
				<div
					className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-[4vw] md:px-[5vw]"
					onClick={() => setActiveProject(null)}
				>
					<div
						className="bg-white w-full md:max-w-[70vw] max-h-[85vh] overflow-y-auto p-[4vw] md:p-[3vh] relative"
						onClick={(e) => e.stopPropagation()}
					>
						<button
							onClick={() => setActiveProject(null)}
							className="absolute top-[2vh] right-[4vw] md:right-[3vw] text-[3vh] font-bold z-10 cursor-pointer"
						>
							✕
						</button>

						<img
							src={activeProject.image}
							alt={activeProject.name}
							className="w-full h-[25vh] md:h-[40vh] object-cover mb-[2vh]"
						/>

						<h2 className="wim text-[4vh] md:text-[5vh] mb-[1vh]">{activeProject.name}</h2>

						<p className="text-[1.8vh] md:text-[2.2vh] mb-[2vh]">{activeProject.description}</p>

						<a
							href={activeProject.creatorLink}
							target="_blank"
							rel="noopener noreferrer"
							className="block italic text-[1.8vh] md:text-[2vh] hover:underline mb-[1vh]"
						>
							Created by: {activeProject.creator}
						</a>

						<a
							href={activeProject.repo}
							target="_blank"
							rel="noopener noreferrer"
							className="wim text-[2.5vh] md:text-[3vh] tracking-[0.1vw] font-semibold hover:underline"
						>
							View Repository
						</a>
					</div>
				</div>
			)}
		</section>
	);
}
