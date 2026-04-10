const Button = ({ text, link, size = "default" }) => {
	const isSmall = size === "small";
	const isLarge = size === "large";

	const faceClass = isLarge
		? "relative bg-white text-[3vh] md:text-[5.5vh] wim px-[5vw] md:px-[2.25vw] py-[0.75vh] md:py-[0.25vh] z-10 inline-block group-hover:translate-x-[0.3vw] group-hover:translate-y-[0.5vh] transition-all ease-in-out"
		: isSmall
		? "relative bg-white text-[1.8vh] md:text-[2.5vh] wim px-[3vw] md:px-[1.25vw] py-[0.3vh] md:py-0 z-10 inline-block group-hover:translate-x-[0.3vw] group-hover:translate-y-[0.5vh] transition-all ease-in-out"
		: "relative bg-white text-[2.5vh] md:text-[4vh] wim px-[4vw] md:px-[1.75vw] py-[0.5vh] md:py-0 z-10 inline-block group-hover:translate-x-[0.3vw] group-hover:translate-y-[0.5vh] transition-all ease-in-out";

	return (
		<button className={`relative pr-[1.5vw] md:pr-[0.6vw] pb-[1.1vh] group cursor-pointer`}>
			{/* shadow */}
			<span className="absolute inset-0 bg-black z-0 w-[98%] h-[92%] mt-auto ml-auto"></span>

			{/* button face */}
			<span className={faceClass}>
				{text}
			</span>
		</button>
	);
};

export default Button;