"use client";
import { useState } from "react";

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<div className="fixed top-[0.75vh] left-0 z-99 w-full pointer-events-auto flex gap-[1.25vw] items-center justify-center">
			{/* Desktop nav */}
			<div className="bg-[#1c2d4d] h-[7.5vh] w-[35vw] relative hidden md:flex items-center justify-start">
				<div className="bg-[#000000] h-[7.5vh] w-[35vw] absolute top-[1.1vh] left-[0.6vw] z-[-1]"></div>
				<a href="https://hackclub.com/" className="mr-[1.5vw]">
					<img
						src="/imgs/hack-club.png"
						className="w-[6.5vw]"
						alt="hack club logo"
					/>
				</a>
				<a href="/" className="text-white text-[3vh] ml-[1vw] wim">
					Tinker
				</a>
				<a href="/gallery" className="text-white text-[3vh] ml-[2.5vw] wim">
					Gallery
				</a>
				<a href="/docs" className="text-white text-[3vh] ml-[2.5vw] wim">
					Documentation
				</a>
			</div>

			{/* Desktop "Join Slack" button */}
			<div className="hidden md:block">
				<div className="flex relative group min-h-[6vh] w-[12.75vw] items-center justify-center">
					<div className="bg-black px-[2vw] py-[0.75vh] wim text-[4vh] absolute z-0 top-[1.1vh] right-[0.5vw] h-[7.5vh]">
						Join Slack
					</div>
					<button className="bg-white px-[2vw] py-[0.75vh] wim text-[4vh] z-10 mr-[0.5vw] group-hover:translate-x-[0.5vh] group-hover:translate-y-[0.5vh] group-hover:mr-[0.25vw] h-[7.5vh] transition-all cursor-pointer">
						Join Slack
					</button>
				</div>
			</div>

			{/* Mobile nav bar */}
			<div className="flex md:hidden items-center justify-between w-[92vw] bg-[#1c2d4d] h-[7vh] px-[4vw] relative">
				<div className="bg-[#000000] h-[7vh] w-full absolute top-[0.8vh] left-[0.6vw] z-[-1]"></div>
				<a href="https://hackclub.com/" className="relative z-10">
					<img
						src="/imgs/hack-club.png"
						className="w-[14vw]"
						alt="hack club logo"
					/>
				</a>
				<a href="/" className="text-white text-[2.5vh] wim relative z-10">
					Tinker
				</a>
				<button
					onClick={() => setMenuOpen(!menuOpen)}
					className="text-white text-[3vh] wim relative z-10 cursor-pointer px-[2vw]"
					aria-label="Toggle menu"
				>
					{menuOpen ? "✕" : "☰"}
				</button>
			</div>

			{/* Mobile dropdown menu */}
			{menuOpen && (
				<div className="md:hidden fixed top-[8.5vh] left-[4vw] w-[92vw] bg-[#1c2d4d] z-99 flex flex-col border-t-[0.3vh] border-white/20">
					<div className="bg-[#000000] w-full h-full absolute top-[0.8vh] left-[0.6vw] z-[-1]"></div>
					<a
						href="/"
						onClick={() => setMenuOpen(false)}
						className="text-white text-[2.8vh] wim px-[5vw] py-[2vh] hover:bg-white/10 transition-colors"
					>
						Home
					</a>
					<a
						href="/gallery"
						onClick={() => setMenuOpen(false)}
						className="text-white text-[2.8vh] wim px-[5vw] py-[2vh] hover:bg-white/10 transition-colors"
					>
						Gallery
					</a>
					<a
						href="/docs"
						onClick={() => setMenuOpen(false)}
						className="text-white text-[2.8vh] wim px-[5vw] py-[2vh] hover:bg-white/10 transition-colors"
					>
						Documentation
					</a>
					<a
						href="#"
						onClick={() => setMenuOpen(false)}
						className="text-white text-[2.8vh] wim px-[5vw] py-[2vh] bg-white/10 hover:bg-white/20 transition-colors"
					>
						Join Slack
					</a>
				</div>
			)}
		</div>
	);
};

export default Navbar;