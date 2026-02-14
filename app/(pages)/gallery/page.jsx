"use client";
import Navbar from "@/app/components/Navbar";
import React from "react";

const example_projects = [
	{
		name: "Example Project",
		image: "/imgs/projects/someimage",
		description:
			"Lorem Ipsum Dolor Amet, some text here Lorem Ipsum Dolor Amet, some text here Lorem Ipsum Dolor Amet, some text here",
		creator: "someone",
		repo: "https://github.com/",
	},
	{
		name: "Example Project",
		image: "/imgs/projects/someimage",
		description:
			"Lorem Ipsum Dolor Amet, some text here Lorem Ipsum Dolor Amet, some text here Lorem Ipsum Dolor Amet, some text here",
		creator: "someone",
		repo: "https://github.com/",
	},
	{
		name: "Example Project",
		image: "/imgs/projects/someimage",
		description:
			"Lorem Ipsum Dolor Amet, some text here Lorem Ipsum Dolor Amet, some text here Lorem Ipsum Dolor Amet, some text here",
		creator: "someone",
		repo: "https://github.com/",
	},
	{
		name: "Example Project",
		image: "/imgs/projects/someimage",
		description:
			"Lorem Ipsum Dolor Amet, some text here Lorem Ipsum Dolor Amet, some text here Lorem Ipsum Dolor Amet, some text here",
		creator: "someone",
		repo: "https://github.com/",
	},
	{
		name: "Example Project",
		image: "/imgs/projects/someimage",
		description:
			"Lorem Ipsum Dolor Amet, some text here Lorem Ipsum Dolor Amet, some text here Lorem Ipsum Dolor Amet, some text here",
		creator: "someone",
		repo: "https://github.com/",
	},
	{
		name: "Example Project",
		image: "/imgs/projects/someimage",
		description:
			"Lorem Ipsum Dolor Amet, some text here Lorem Ipsum Dolor Amet, some text here Lorem Ipsum Dolor Amet, some text here",
		creator: "someone",
		repo: "https://github.com/",
	},
];

export default function Gallery() {
	return (
		<section className="min-h-screen w-full bg-cover bg-center relative">
			<Navbar />
			<img
				src="/imgs/bg.png"
				className="w-full h-screen object-cover z-[-1] fixed top-0 left-0"
				alt=""
			/>
			<div className="min-h-screen w-full flex flex-col items-center py-[3vh] pt-[8vh] px-[5vw] gap-[0vh]">
				<h1 className="wim text-[17.5vh] text-white mb-[0vh]">Gallery</h1>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2vw] w-[90vw]">
					{example_projects.map((proj, idx) => (
						<div
							key={idx}
							className="relative group cursor-pointer pr-[0.6vw] pb-[1.1vh]"
						>
							{/* shadow */}
							<span className="absolute inset-0 bg-black z-0 w-[97%] h-[96%] mt-auto ml-auto transition-all ease-in-out group-hover:translate-x-[0.2vw] group-hover:translate-y-[0.15vh] rounded-[0vh]"></span>

							{/* card face */}
							<div className="relative z-10 bg-white rounded-[0vh] overflow-hidden transition-all ease-in-out group-hover:translate-x-[0.6vw] group-hover:translate-y-[0.75vh]">
								<img
									src={proj.image}
									alt={proj.name}
									className="w-full h-[20vh] object-cover bg-gray-300"
								/>
								<div className="py-[0.5vh] pb-[1vh] px-[1vw] flex flex-col gap-[0.25vh]">
									<h2 className="text-[3vh] font-bold tracking-[2px] wim">
										{proj.name}
									</h2>
									<p className="text-[2vh] font-light">{proj.description}</p>
									<p className="text-[1.75vh] italic mt-[1vh]">
										Created by: {proj.creator}
									</p>
									<a
										href={proj.repo}
										target="_blank"
										rel="noopener noreferrer"
										className="text-[#1c2d4d] wim text-[2.5vh] tracking-[0.1vw] font-semibold hover:underline"
									>
										View Repository
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
