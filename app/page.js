import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Pictures from "./components/Pictures";
import Contains from "./components/Contains";

export default function Home() {
	return (
		<div className="min-h-screen w-full">
			<Navbar />
			<Landing />
			{/* 	<Pictures /> */}
			{/* <Contains /> */}
		</div>
	);
}
