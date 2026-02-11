const Contains = () => {
	return (
		<section className="min-h-[80vh] bg-[#20633B] relative">
			{/* transition image */}
			<img
				src="/imgs/transition.png"
				alt="transition image"
				className="w-[105vw] left-[-5vw]"
			/>
			{/* title */}
			<h2 className="wim text-[20vh] text-white w-fit leading-[20vh] mx-auto ml-[5vw] relative">
				Blinky Kit Contains
			</h2>
			<div className="grid grid-cols-3 w-[90vw] mx-auto gap-y-[2vh] gap-x-[2vw] mt-[2vh] pb-[8vh]">
				{[
					"10x Blue LED's",
					"10x Green LED's",
					"10x White LED's",
					"10x Orange LED's",
					"10x Yellow LED's",
					"2x 1uF Capacitors",
					"2x 10nF Capacitors",
					"2x 1x1 pin headers",
					"2x 1x2 pin headers",
					"2x 470 ohm resistors",
					"2x 1k ohm resistors",
					"2x 50k variable resistors",
					"2x 555 Timer IC's",
					"2x CD4017 LED Controller IC's",
					"1x 9V Battery Buckle",
				].map((item, i) => (
					<div
						key={i}
						className="w-full bg-neutral-100 text-[2vh] 2xl:text-[2.25vh] py-[1vh] px-[2vw] relative border-[0.45vh] border-black/0 font-semibold tracking-[0.15vh]"
					>
						{/* corners */}
						<div className="absolute w-[0.9vh] h-[0.9vh] bg-[#20633B] top-[-0.5vh] left-[-0.5vh] border-b-[0.45vh] border-r-[0.45vh] border-black/0"></div>
						<div className="absolute w-[0.9vh] h-[0.9vh] bg-[#20633B] top-[-0.5vh] right-[-0.5vh] border-b-[0.45vh] border-l-[0.45vh] border-black/0"></div>
						<div className="absolute w-[0.9vh] h-[0.9vh] bg-[#20633B] bottom-[-0.5vh] left-[-0.5vh] border-t-[0.45vh] border-r-[0.45vh] border-black/0"></div>
						<div className="absolute w-[0.9vh] h-[0.9vh] bg-[#20633B] bottom-[-0.5vh] right-[-0.5vh] border-t-[0.45vh] border-l-[0.45vh] border-black/0"></div>
						{/* Item */}
						<span>{item}</span>
					</div>
				))}
			</div>
			{/* transition image */}
			<img
				src="/imgs/transition2.png"
				className="w-full"
				alt="transition image"
			/>
			<h1 className="text-white text-[20vh] wim absolute bottom-[20vh] left-[5vw]">
				Tinker
			</h1>
			{/* Footer */}
			<img src="/imgs/footer.png" className="w-full" alt="footer background" />
			<div className="absolute bottom-[0.35vh] tracking-[0.1vh] left-[50%] translate-x-[-50%] wim text-white text-[3.5vh]">
				Made with love by Hack Clubbers
			</div>
		</section>
	);
};

export default Contains;
