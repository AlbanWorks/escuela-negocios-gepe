import { TalkHeadConfig } from "@/components/HeadConfig/TalkHeadConfig";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/layouts/sections/Footer/Footer";
import Talk from "@/layouts/talk/Talk";

export default function TalkPage() {
	return (
		<>
			<TalkHeadConfig/>
			<main>
				<Navbar/>
				<Talk/>
				<Footer/>
			</main>
		</>
	);
}