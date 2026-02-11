import Button from "./Button";

const Landing = () => {
	return (
		<>
			{/* landing */}
			<section className="h-[110vh] relative">
				{/* main section */}
				<div className="flex flex-col items-center justify-center w-fit pt-[15vh] ml-[6vw] bg-red-400/0">
					<h1 className="wim text-[25vh] leading-[22.5vh] text-white">
						Blinker
					</h1>
					{/* buttons */}
					<div className="flex flex-col items-end justify-center w-full gap-[1vh]">
						<Button text="Run a Blinky workshop for your Club" />
						<Button text="Join a blinky workshop" />
					</div>
				</div>
				{/* background image */}
				<img
					src="/imgs/bg.png"
					className="w-full h-[130vh] object-cover absolute top-[-20vh] z-[-1]"
					alt=""
				/>
			</section>

			{/* how it works */}
			<section className="min-h-[80vh] bg-[#1e2f23] mt-[-2vh] w-full relative pt-[5vh]">
				{/* title */}
				<h2 className="wim text-[20vh] text-white w-fit leading-[20vh] mx-auto ml-[5vw] relative">
					How it works?
				</h2>
				{/* steps */}
				<div className="flex flex-col items-end justify-between mr-[12.5vw] h-[60vh] relative">
					{/* line with dots */}
					<div className="flex flex-col h-[60vh] w-[5vw] bg-red-300/0 absolute top-0 right-[-7.5vw] items-center justify-between py-[5vh]">
						<div className="h-full w-[0.5vw] bg-white absolute top-0 left-[50%] translate-x-[-50%] z-0"></div>
						<div className="w-[2.5vw] h-[2.5vw] bg-white border-[0.45vh] border-black z-10"></div>
						<div className="w-[2.5vw] h-[2.5vw] bg-white border-[0.45vh] border-black z-10"></div>
						<div className="w-[2.5vw] h-[2.5vw] bg-white border-[0.45vh] border-black z-10"></div>
					</div>
					{/* labels */}
					<h1 className="wim text-[12.5vh] text-white leading-[15vh] ml-auto">
						Apply
					</h1>
					<h1 className="wim text-[12.5vh] text-white leading-[15vh] ml-auto">
						Run a workshop
					</h1>
					<h1 className="wim text-[12.5vh] text-white leading-[15vh] ml-auto">
						get free Blinky kits and PCB's
					</h1>
				</div>
			</section>
		</>
	);
};

export default Landing;
