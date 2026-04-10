"use client";
import { useEffect, useState, useRef } from "react";
import Button from "./Button";
export const dynamic = "force-dynamic";

const START_TOP_VH = 0.2;
const END_TOP_VH = 0.65;

const Landing = () => {
	const [pcbProgress, setPcbProgress] = useState(0);
	const [unpinTop, setUnpinTop] = useState(null);
	const [isMobile, setIsMobile] = useState(false);
	const unpinnedRef = useRef(false);

	useEffect(() => {
		const checkMobile = () => setIsMobile(window.innerWidth < 768);
		checkMobile();
		window.addEventListener("resize", checkMobile);

		const onScroll = () => {
			const vh = window.innerHeight;
			const scrollVh = window.scrollY / vh;

			let p = 0;

			if (scrollVh <= 110 / 100) {
				p = scrollVh / (110 / 100);
			} else {
				p = 1 + (scrollVh - 110 / 100) / (70 / 100);
			}

			p = Math.min(p, 2);

			if (p < 2) {
				unpinnedRef.current = false;
				setUnpinTop(null);
			}

			if (p === 2 && !unpinnedRef.current) {
				unpinnedRef.current = true;
				setUnpinTop(window.scrollY + vh * END_TOP_VH);
			}

			setPcbProgress(p);
		};

		window.addEventListener("scroll", onScroll);

		onScroll();

		return () => {
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("resize", checkMobile);
		};
	}, []);

	const isPinned = pcbProgress < 2;

	const animatedTopVh =
		pcbProgress <= 1
			? START_TOP_VH
			: START_TOP_VH +
			  Math.min(pcbProgress - 1, 1) * (END_TOP_VH - START_TOP_VH);

	return (
		<div style={{ backgroundImage: "url('/imgs/bg-dots.png')" }}>
			<img
				src="/imgs/transition1.png"
				className="w-full h-[40vh] md:h-[80vh] object-cover absolute top-[30vh] z-0"
				alt=""
			/>
			{/* landing */}
			<section className="h-[110vh] relative">
				<div className="flex flex-col items-center justify-center w-fit pt-[15vh] ml-[6vw]">
					<div className="mr-auto relative pr-[0.5vw] pb-[1vh] group cursor-pointer w-[35vw] md:w-[15vw] mb-[2vh]">
						{/* back */}
						<span className="absolute inset-0 bg-black z-0 w-[96.5%] h-[96%] ml-[1.5vw] md:ml-[0.7vw] mt-[0.5vh] transition-all ease-in-out group-hover:mt-[0.2vh] group-hover:translate-y-[0.35vh]"></span>

						{/* logo face */}
						<img
							src="/imgs/SSCS-logo.png"
							className="relative z-10 w-full bg-white p-[2vh] transition-all ease-in-out group-hover:translate-x-[0.4vw] group-hover:translate-y-[0.6vh]"
							alt="SSCS Logo"
						/>
					</div>

					<h1 className="wim text-[16vh] md:text-[28vh] leading-[14vh] md:leading-[25vh] text-white">Tinker</h1>

					<div className="flex flex-col items-start justify-center w-full gap-[1.5vh] mt-[1vh]">
						{/* Join workshop - prominent, unified box */}
						<div className="relative pr-[1.5vw] md:pr-[0.6vw] pb-[1.1vh]">
							<span className="absolute inset-0 bg-black z-0 w-[98%] h-[92%] mt-auto ml-auto"></span>
							<div className="relative z-10 bg-white flex flex-row items-stretch">
								<span className="text-[3vh] md:text-[5.5vh] wim px-[4vw] md:px-[2vw] py-[0.75vh] md:py-[0.25vh] whitespace-nowrap flex items-center">
									Join a Blinky Workshop
								</span>
								<div className="w-[0.3vh] bg-black/20 shrink-0 self-stretch"></div>
								<input
									type="text"
									maxLength={4}
									placeholder="ABCD"
									className="text-[3vh] md:text-[5.5vh] wim w-[18vw] md:w-[8vw] text-center uppercase tracking-[0.5vw] outline-none bg-transparent py-[0.75vh] md:py-[0.25vh]"
								/>
								<button className="bg-black text-white text-[2vh] md:text-[3.5vh] wim px-[3vw] md:px-[1.5vw] cursor-pointer hover:bg-black/80 transition-colors whitespace-nowrap flex items-center">
									Go!
								</button>
							</div>
						</div>
						{/* Run workshop - small */}
						<Button text="Run a Blinky Workshop for your Club" size="small" />
					</div>
				</div>

				{/* PCB */}
				<div
					className="z-10 hidden md:block"
					style={{
						position: isPinned ? "fixed" : "absolute",
						top: isPinned
							? `${animatedTopVh * 100}vh`
							: unpinTop !== null
							? `${unpinTop}px`
							: `${END_TOP_VH * 100}vh`,
						left:
							pcbProgress <= 1
								? `${41 - pcbProgress * 30}vw`
								: `${10 + (pcbProgress - 1) * 55}vw`,
						transform:
							pcbProgress <= 1
								? `rotate(${10 - pcbProgress * 20}deg)`
								: `rotate(${-10 + (pcbProgress - 1) * 30}deg)`,
					}}
				>
					<img
						src="/imgs/pcb.png"
						className="w-[22.5vw] drop-shadow-2xl drop-shadow-black/30"
						alt=""
					/>
				</div>

				{/* Mobile PCB - static, no scroll animation */}
				{isMobile && (
					<div className="md:hidden absolute right-[5vw] top-[18vh] z-10">
						<img
							src="/imgs/pcb.png"
							className="w-[35vw] drop-shadow-2xl drop-shadow-black/30 rotate-[-10deg]"
							alt=""
						/>
					</div>
				)}
			</section>

			{/* how it works */}
			<section className="min-h-[50vh] md:min-h-[80vh] bg-[#1e2f23] mt-[-2vh] w-full relative pt-[5vh]">
				<h2 className="wim text-[10vh] md:text-[20vh] text-white w-fit leading-[10vh] md:leading-[20vh] mx-auto ml-[5vw] relative">
					How it works?
				</h2>

				<div className="flex flex-col items-end justify-between mr-[12.5vw] h-[30vh] md:h-[60vh] relative">
					<div className="flex flex-col h-[30vh] md:h-[60vh] w-[5vw] absolute top-0 right-[-7.5vw] items-center justify-between py-[3vh] md:py-[5vh]">
						<div className="h-full w-[1vw] md:w-[0.5vw] bg-white absolute top-0 left-[50%] translate-x-[-50%]" />
						<div className="w-[5vw] h-[5vw] md:w-[2.5vw] md:h-[2.5vw] bg-white border-[0.45vh] border-black z-10" />
						<div className="w-[5vw] h-[5vw] md:w-[2.5vw] md:h-[2.5vw] bg-white border-[0.45vh] border-black z-10" />
						<div className="w-[5vw] h-[5vw] md:w-[2.5vw] md:h-[2.5vw] bg-white border-[0.45vh] border-black z-10" />
					</div>

					<h1 className="wim text-[5vh] pl-[10vw] md:pl-0 md:text-[12.5vh] text-white leading-[6vh] md:leading-[15vh] ml-auto">
						Apply
					</h1>
					<h1 className="wim text-[5vh] pl-[10vw] md:pl-0 md:text-[12.5vh] text-white leading-[6vh] md:leading-[15vh] ml-auto">
						Run a workshop
					</h1>
					<h1 className="wim text-[5vh] pl-[10vw] md:pl-0 md:text-[12.5vh] text-white leading-[6vh] md:leading-[15vh] ml-auto">
						get free Blinky kits and PCB&apos;s
					</h1>
				</div>
			</section>

			{/* Pictures */}
			<section className="bg-[#1e2f23] pb-[5vh] pt-[5vh] md:pt-[13vh] relative">
				<div className="grid grid-cols-2 md:grid-cols-4 items-center justify-center gap-[2vw] md:gap-[2vh] h-auto md:h-[40vh] min-w-fit group relative px-[5vw]">
					<img
						src="/imgs/workshop1.png"
						className="w-full md:w-[22.5vw] transition-all duration-[0.25s] ease-in-out p-[1vh] bg-white shadow-2xl shadow-black/70 rotate-3 md:rotate-8 group-hover:rotate-0"
						alt="picture of a workshop"
					/>
					<img
						src="/imgs/workshop2.png"
						className="w-full md:w-[22.5vw] transition-all duration-[0.25s] ease-in-out p-[1vh] bg-white shadow-2xl shadow-black/70 rotate-[-3deg] md:rotate-[-5deg] group-hover:rotate-0"
						alt="picture of a workshop"
					/>
					<img
						src="/imgs/workshop3.png"
						className="w-full md:w-[22.5vw] transition-all duration-[0.25s] ease-in-out p-[1vh] bg-white shadow-2xl shadow-black/70 rotate-3 md:rotate-12 group-hover:rotate-0"
						alt="picture of a workshop"
					/>
					<img
						src="/imgs/workshop4.png"
						className="w-full md:w-[22.5vw] transition-all duration-[0.25s] ease-in-out p-[1vh] bg-white shadow-2xl shadow-black/70 rotate-[-3deg] md:rotate-[-5deg] group-hover:rotate-0"
						alt="picture of a workshop"
					/>
				</div>
				<h3 className="wim text-[8vh] md:text-[10vh] text-white leading-[8vh] md:leading-[10vh] ml-auto absolute bottom-[-10vh] z-80 left-[5vw]">
					Workshop Pictures
				</h3>
			</section>

			{/* Contains */}
			<section className="min-h-[80vh] bg-[#20633B] relative">
				{/* transition image */}
				<img
					src="/imgs/transition.png"
					alt="transition image"
					className="w-[105vw] left-[-5vw]"
				/>
				{/* title */}
				<h2 className="wim text-[8vh] md:text-[20vh] text-white w-fit leading-[8vh] md:leading-[18vh] mx-auto ml-[5vw] relative">
					Blinky Kit Contains
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 w-[90vw] mx-auto gap-y-[1.5vh] md:gap-y-[2vh] gap-x-[2vw] mt-[2vh] pb-[8vh]">
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
							className="w-full bg-neutral-100 text-[1.8vh] md:text-[2vh] 2xl:text-[2.25vh] py-[1.2vh] md:py-[1vh] px-[4vw] md:px-[2vw] relative border-[0.45vh] border-black/0 font-semibold tracking-[0.15vh]"
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
			</section>

			<section className="min-h-[40vh] md:min-h-[70vh] relative">
				{/* transition image */}
				<img
					src="/imgs/transition2.png"
					className="w-full"
					alt="transition image"
				/>
				<h1 className="text-white text-[10vh] md:text-[20vh] wim absolute bottom-[12.5vh] left-[5vw]">
					Tinker
				</h1>
				{/* Footer */}
				<div className="absolute bottom-[0vh] bg-black/20 py-[1.5vh] tracking-[0.1vh] left-[50%] translate-x-[-50%] wim text-white text-[1.75vh] w-full text-center md:text-[3.5vh]">
					Made with love by Hack Clubbers
				</div>
			</section>
		</div>
	);
};

export default Landing;
