const Button = ({ text, link }) => {
	return (
		<button className={`relative pr-[0.6vw] pb-[1.1vh] group cursor-pointer`}>
			{/* shadow */}
			<span className="absolute inset-0 bg-black z-0 w-[98%] h-[92%] mt-auto ml-auto"></span>

			{/* button face */}
			<span className="relative bg-white text-[4vh] wim px-[1.75vw] py-0 z-10 inline-block group-hover:translate-x-[0.3vw] group-hover:translate-y-[0.5vh] transition-all ease-in-out">
				{text}
			</span>
		</button>
	);
};

export default Button;
