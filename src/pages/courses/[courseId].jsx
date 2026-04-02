import { CourseHeadConfig } from "@/components/HeadConfig/CourseHeadConfig";
import Navbar from "@/components/Navbar/Navbar";
import { Course } from "@/layouts/course/Course";
import Footer from "@/layouts/sections/Footer/Footer";

export default function CoursePage() {
	return (
		<>
			<CourseHeadConfig/>
			<main>
				<Navbar/>
				<Course/>
				<Footer/>
			</main>
		</>
	);
}