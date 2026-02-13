"use client";
import { useEffect, useState, useRef } from "react";
import Button from "./Button";
export const dynamic = "force-dynamic";

const START_TOP_VH = 0.2;
const END_TOP_VH = 0.65;

const Landing = () => {
	const [pcbProgress, setPcbProgress] = useState(0);
	const [unpinTop, setUnpinTop] = useState(null);
	const unpinnedRef = useRef(false);

	useEffect(() => {
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

		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const isPinned = pcbProgress < 2;

	const animatedTopVh =
		pcbProgress <= 1
			? START_TOP_VH
			: START_TOP_VH +
			  Math.min(pcbProgress - 1, 1) * (END_TOP_VH - START_TOP_VH);

	return (
		<>
			{/* landing */}
			<section className="h-[110vh] relative">
				<div className="flex flex-col items-center justify-center w-fit pt-[15vh] ml-[6vw]">
					<div className="mr-auto relative pr-[0.5vw] pb-[1vh] group cursor-pointer w-[15vw] mb-[2vh]">
						{/* back */}
						<span className="absolute inset-0 bg-black z-0 w-[96.5%] h-[97%] ml-[0.75vw] mt-[0.5vh] transition-all ease-in-out group-hover:mt-[0] group-hover:translate-y-[0.35vh]"></span>

						{/* logo face */}
						<img
							src="/imgs/SSCS-logo.png"
							className="relative z-10 w-full bg-white p-[2vh] transition-all ease-in-out group-hover:translate-x-[0.5vw] group-hover:translate-y-[0.25vh]"
							alt="SSCS Logo"
						/>
					</div>

					<h1 className="wim text-[28vh] leading-[25vh] text-white">Tinker</h1>

					<div className="flex flex-col items-end justify-center w-full gap-[1vh]">
						<Button text="Run a Blinky workshop for your Club" />
						<Button text="Join a blinky workshop" />
					</div>
				</div>

				{/* PCB */}
				<div
					className="z-10"
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

				<img
					src="/imgs/bg.png"
					className="w-full h-[130vh] object-cover absolute top-[-20vh] -z-10"
					alt=""
				/>
			</section>

			{/* how it works */}
			<section className="min-h-[80vh] bg-[#1e2f23] mt-[-2vh] w-full relative pt-[5vh]">
				<h2 className="wim text-[20vh] text-white w-fit leading-[20vh] mx-auto ml-[5vw] relative">
					How it works?
				</h2>

				<div className="flex flex-col items-end justify-between mr-[12.5vw] h-[60vh] relative">
					<div className="flex flex-col h-[60vh] w-[5vw] absolute top-0 right-[-7.5vw] items-center justify-between py-[5vh]">
						<div className="h-full w-[0.5vw] bg-white absolute top-0 left-[50%] translate-x-[-50%]" />
						<div className="w-[2.5vw] h-[2.5vw] bg-white border-[0.45vh] border-black z-10" />
						<div className="w-[2.5vw] h-[2.5vw] bg-white border-[0.45vh] border-black z-10" />
						<div className="w-[2.5vw] h-[2.5vw] bg-white border-[0.45vh] border-black z-10" />
					</div>

					<h1 className="wim text-[12.5vh] text-white leading-[15vh] ml-auto">
						Apply
					</h1>
					<h1 className="wim text-[12.5vh] text-white leading-[15vh] ml-auto">
						Run a workshop
					</h1>
					<h1 className="wim text-[12.5vh] text-white leading-[15vh] ml-auto">
						get free Blinky kits and PCB&apos;s
					</h1>
				</div>
			</section>

			{/* Pictures */}
			<section className=" bg-[#1e2f23] pb-[17.5vh] pt-[13vh] relative">
				<div className="flex items-center justify-center gap-[2vh] h-[40vh] min-w-fit group relative">
					<img
						src="/imgs/workshop1.png"
						className="w-[22.5vw] transition-all duration-[0.25s] ease-in-out p-[1vh] bg-white shadow-2xl shadow-black/70 rotate-8 group-hover:rotate-0"
						alt="picture of a workshop"
					/>
					<img
						src="/imgs/workshop2.png"
						className="w-[22.5vw] transition-all duration-[0.25s] ease-in-out p-[1vh] bg-white shadow-2xl shadow-black/70 rotate-[-5deg] group-hover:rotate-0"
						alt="picture of a workshop"
					/>
					<img
						src="/imgs/workshop3.png"
						className="w-[22.5vw] transition-all duration-[0.25s] ease-in-out p-[1vh] bg-white shadow-2xl shadow-black/70 rotate-12 group-hover:rotate-0"
						alt="picture of a workshop"
					/>
					<img
						src="/imgs/workshop4.png"
						className="w-[22.5vw] transition-all duration-[0.25s] ease-in-out p-[1vh] bg-white shadow-2xl shadow-black/70 rotate-[-5deg] group-hover:rotate-0"
						alt="picture of a workshop"
					/>
				</div>
				<h3 className="wim text-[10vh] text-white leading-[10vh] ml-auto absolute bottom-0 left-[5vw]">
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
				<img
					src="/imgs/footer.png"
					className="w-full"
					alt="footer background"
				/>
				<div className="absolute bottom-[0.35vh] tracking-[0.1vh] left-[50%] translate-x-[-50%] wim text-white text-[3.5vh]">
					Made with love by Hack Clubbers
				</div>
			</section>
		</>
	);
};

export default Landing;
