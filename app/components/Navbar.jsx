"use client";

const Navbar = () => {
	return (
		<div className="fixed top-[0.75vh] left-0 z-99 w-full pointer-events-auto flex gap-[1.25vw] items-center justify-center">
			<div className="bg-[#1c2d4d] h-[7.5vh] w-[35vw] relative flex items-center justify-start">
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

			{/* Another Button */}
			<div className="">
				<div className="flex relative group min-h-[6vh] w-[12.75vw] items-center justify-center">
					<div className="bg-black px-[2vw] py-[0.75vh] wim text-[4vh] absolute z-0 top-[1.1vh] right-[0.5vw] h-[7.5vh]">
						Join Slack
					</div>
					<button className="bg-white px-[2vw] py-[0.75vh] wim text-[4vh] z-10 mr-[0.5vw] group-hover:translate-x-[0.5vh] group-hover:translate-y-[0.5vh] group-hover:mr-[0.25vw] h-[7.5vh] transition-all cursor-pointer">
						Join Slack
					</button>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
