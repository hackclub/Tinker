"use client";
import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Navbar from "../../components/Navbar";

const docsContent = {
	blinky: {
		title: "Blinky",
		file: "/blinky.md",
	},
	blinkyeda: {
		title: "BlinkyEDA",
		file: "/blinkyeda.md",
	},
	"blinky-assembly": {
		title: "Blinky-Assembly",
		file: "/blinky-assembly.md",
	},
};

const Docs = () => {
	const [activeDoc, setActiveDoc] = useState("blinky");
	const [markdown, setMarkdown] = useState("");
	const [sidebarOpen, setSidebarOpen] = useState(false);

	useEffect(() => {
		const loadMarkdown = async () => {
			const res = await fetch(docsContent[activeDoc].file);
			const text = await res.text();
			setMarkdown(text);
		};

		loadMarkdown();
	}, [activeDoc]);

	return (
		<section
			className="min-h-screen w-full relative"
			style={{ backgroundImage: "url('/imgs/bg-dots.png')" }}
		>
			<Navbar />

			{/* Mobile doc selector toggle */}
			<button
				onClick={() => setSidebarOpen(!sidebarOpen)}
				className="md:hidden fixed bottom-[3vh] right-[4vw] z-50 bg-[#1c2d4d] text-white wim text-[2.5vh] px-[5vw] py-[1.5vh] shadow-lg cursor-pointer"
			>
				{sidebarOpen ? "✕ Close" : "☰ Docs"}
			</button>

			{/* Mobile sidebar overlay */}
			{sidebarOpen && (
				<div
					className="md:hidden fixed inset-0 bg-black/50 z-40"
					onClick={() => setSidebarOpen(false)}
				/>
			)}

			<div className="flex w-full min-h-screen pt-[10vh] md:pt-[12vh] px-[4vw] gap-[3vw]">
				{/* Sidebar - desktop: always visible, mobile: slide-in drawer */}
				<div
					className={`
						fixed z-50 md:z-auto
						${sidebarOpen ? "left-0" : "left-[-100%]"}
						md:left-auto
						top-0 md:top-auto
						w-[70vw] md:w-[18vw]
						h-full md:h-fit
						bg-white p-[3vh] md:p-[2vh]
						pt-[12vh] md:pt-[2vh]
						transition-all duration-300 ease-in-out
					`}
				>
					<h2 className="wim text-[3.5vh] mb-[2vh] tracking-[0.15vw]">Docs</h2>

					<div className="flex flex-col gap-[1vh]">
						{Object.keys(docsContent).map((key) => (
							<button
								key={key}
								onClick={() => {
									setActiveDoc(key);
									setSidebarOpen(false);
								}}
								className={`text-left wim text-[2.6vh] tracking-[0.1vw] px-[3vw] md:px-[1vw] py-[1.2vh] md:py-[0.75vh] transition-all ease-in-out cursor-pointer ${
									activeDoc === key
										? "bg-[#1c2d4d] text-white"
										: "bg-neutral-100 hover:bg-neutral-200"
								}`}
							>
								{key}
							</button>
						))}
					</div>
				</div>

				{/* Content */}
				<div className="flex-1 bg-white p-[4vw] md:p-[4vh] ml-0 md:ml-[21vw] mb-[4vh]">
					<h1 className="wim text-[5vh] md:text-[8vh] leading-[5vh] md:leading-[8vh] tracking-[0.2vw] mb-[1vh]">
						{docsContent[activeDoc].title}
					</h1>

					<div className="prose max-w-full md:max-w-[70ch] text-[1.8vh] md:text-[2.2vh]">
						<ReactMarkdown
							remarkPlugins={[remarkGfm]}
							components={{
								h1: ({ node, ...props }) => (
									<h1 className="text-3xl md:text-4xl font-bold mt-8 mb-4" {...props} />
								),
								h2: ({ node, ...props }) => (
									<h2 className="text-2xl md:text-3xl font-bold mt-6 mb-3" {...props} />
								),
								h3: ({ node, ...props }) => (
									<h3 className="text-xl md:text-2xl font-bold mt-4 mb-2" {...props} />
								),
								p: ({ node, ...props }) => (
									<p className="mb-4 leading-relaxed" {...props} />
								),
								ul: ({ node, ...props }) => (
									<ul className="list-disc pl-4 md:pl-6 mb-4" {...props} />
								),
								ol: ({ node, ...props }) => (
									<ol className="list-decimal pl-4 md:pl-6 mb-4" {...props} />
								),
								li: ({ node, ...props }) => <li className="mb-1" {...props} />,
								a: ({ node, ...props }) => (
									<a className="text-blue-600 hover:underline break-words" {...props} />
								),
								code: ({ node, inline, ...props }) =>
									inline ? (
										<code className="bg-gray-100 px-1 rounded text-[0.9em] break-words" {...props} />
									) : (
										<code
											className="block bg-gray-100 p-3 md:p-4 rounded-lg overflow-x-auto text-[0.85em]"
											{...props}
										/>
									),
								img: ({ node, ...props }) => (
									<img className="max-w-full h-auto" {...props} />
								),
								table: ({ node, ...props }) => (
									<div className="overflow-x-auto mb-4">
										<table
											className="min-w-full border-collapse border border-gray-300"
											{...props}
										/>
									</div>
								),
								th: ({ node, ...props }) => (
									<th
										className="border border-gray-300 px-2 md:px-4 py-2 bg-gray-100 text-[0.9em]"
										{...props}
									/>
								),
								td: ({ node, ...props }) => (
									<td className="border border-gray-300 px-2 md:px-4 py-2 text-[0.9em]" {...props} />
								),
							}}
						>
							{markdown}
						</ReactMarkdown>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Docs;