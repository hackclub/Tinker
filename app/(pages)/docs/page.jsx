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

	useEffect(() => {
		const loadMarkdown = async () => {
			const res = await fetch(docsContent[activeDoc].file);
			const text = await res.text();
			setMarkdown(text);
		};

		loadMarkdown();
	}, [activeDoc]);

	return (
		<section className="min-h-screen w-full relative">
			<img
				src="/imgs/bg.png"
				className="w-full h-screen object-cover fixed top-0 left-0 z-[-1]"
				alt=""
			/>

			<Navbar />

			<div className="flex w-full min-h-screen pt-[12vh] px-[4vw] gap-[3vw]">
				{/* Sidebar */}
				<div className="w-[18vw] bg-white p-[2vh] h-fit fixed">
					<h2 className="wim text-[3.5vh] mb-[2vh] tracking-[0.15vw]">Docs</h2>

					<div className="flex flex-col gap-[1vh]">
						{Object.keys(docsContent).map((key) => (
							<button
								key={key}
								onClick={() => setActiveDoc(key)}
								className={`text-left wim text-[2.6vh] tracking-[0.1vw] px-[1vw] py-[0.75vh] transition-all ease-in-out ${
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
				<div className="flex-1 bg-white p-[4vh] ml-[21vw] mb-[4vh]">
					<h1 className="wim text-[6vh] tracking-[0.2vw] mb-[2vh]">
						{docsContent[activeDoc].title}
					</h1>

					<div className="prose max-w-[70ch] text-[2.2vh]">
						<ReactMarkdown
							remarkPlugins={[remarkGfm]}
							components={{
								h1: ({ node, ...props }) => (
									<h1 className="text-4xl font-bold mt-8 mb-4" {...props} />
								),
								h2: ({ node, ...props }) => (
									<h2 className="text-3xl font-bold mt-6 mb-3" {...props} />
								),
								h3: ({ node, ...props }) => (
									<h3 className="text-2xl font-bold mt-4 mb-2" {...props} />
								),
								p: ({ node, ...props }) => (
									<p className="mb-4 leading-relaxed" {...props} />
								),
								ul: ({ node, ...props }) => (
									<ul className="list-disc pl-6 mb-4" {...props} />
								),
								ol: ({ node, ...props }) => (
									<ol className="list-decimal pl-6 mb-4" {...props} />
								),
								li: ({ node, ...props }) => <li className="mb-1" {...props} />,
								a: ({ node, ...props }) => (
									<a className="text-blue-600 hover:underline" {...props} />
								),
								code: ({ node, inline, ...props }) =>
									inline ? (
										<code className="bg-gray-100 px-1 rounded" {...props} />
									) : (
										<code
											className="block bg-gray-100 p-4 rounded-lg overflow-x-auto"
											{...props}
										/>
									),
								table: ({ node, ...props }) => (
									<table
										className="min-w-full border-collapse border border-gray-300 mb-4"
										{...props}
									/>
								),
								th: ({ node, ...props }) => (
									<th
										className="border border-gray-300 px-4 py-2 bg-gray-100"
										{...props}
									/>
								),
								td: ({ node, ...props }) => (
									<td className="border border-gray-300 px-4 py-2" {...props} />
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
