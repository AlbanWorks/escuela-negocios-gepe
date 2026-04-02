import { TalkHeadConfig } from "@/components/HeadConfig/TalkHeadConfig";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/layouts/sections/Footer/Footer";

export default function ModulePage() {
	return (
		<>
			<TalkHeadConfig/>
			<main>
				<Navbar/>
				<Footer/>
			</main>
		</>
	);
}