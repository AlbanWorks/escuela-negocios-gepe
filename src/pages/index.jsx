import { HeadConfig } from "@/components/HeadConfig/HeadConfig";
import Navbar from "@/components/Navbar/Navbar";
import CoursesList from "@/layouts/sections/CoursesLIst/CoursesLIst";
import Footer from "@/layouts/sections/Footer/Footer";
import { Hero } from "@/layouts/sections/Hero/Hero";
import InternationalPresence from "@/layouts/sections/InternationalPresence/InternationalPresence";
import { MainServices } from "@/layouts/sections/MainServices/MainServices";
import Metrics from "@/layouts/sections/Metrics/Metrics";
import { ServiceDescription } from "@/layouts/sections/ServiceDescription/ServiceDescription";
import Testimonials from "@/layouts/sections/Testimonials/Testimonials";
import { SECTION_IDS } from "@/utils/navLinks";


export default function Home() {
	return (
		<>
			<HeadConfig/>
			<main>
				<Navbar/>
			 	<Hero/>
				<ServiceDescription
					id={SECTION_IDS.contabilidad_empresas}
					images={
						[
							{url:'/images/business_section.webp', alt:"contabilidad"},
							{url:'/images/consulting_section.webp', alt:"contabilidad"},
							{url:'/images/accounting_section.webp', alt:"contabilidad"},
						]	
					}
					title={'Escuela de Negocios'}
					description_parts={[
   						<>
							La <b>Escuela de Negocios GEPE</b> es un espacio de formación y transformación empresarial diseñado para desarrollar empresarios y mandos medios capaces de liderar organizaciones en un entorno cada vez más dinámico, competitivo y global.
						</>,
						<>
							Nuestra propuesta de valor se basa en integrar <b>formación práctica + consultoría aplicada</b>, permitiendo que cada participante no solo adquiera conocimientos, sino que los implemente directamente en su empresa. Trabajamos con una mirada sistémica del negocio, abordando los pilares clave de gestión —visión estratégica, planificación, ventas, marketing, recursos humanos y finanzas— para formar líderes con criterio, capacidad de análisis y foco en resultados.
						</>
					]}
					direction={'left'}
					inscriptionTo={'Contabilidad para Empresas'}
				/>
				<ServiceDescription
					id={SECTION_IDS.consultoria_empresarial}
					images={
						[
							{url:'/images/business_section.webp', alt:"contabilidad"},
							{url:'/images/consulting_section.webp', alt:"contabilidad"},
							{url:'/images/accounting_section.webp', alt:"contabilidad"},
						]	
					}
					title={'Consultoría Empresarial'}
					description_parts={[
						<>
							A diferencia de modelos tradicionales, en GEPE Business School entendemos que el verdadero aprendizaje ocurre en la interacción. Por eso, <b>todas nuestras formaciones son presenciales</b>, generando espacios de alto valor donde se potencia el intercambio de experiencias reales, el aprendizaje colaborativo y la construcción de vínculos estratégicos.
						</>,
						<>
							Promovemos activamente el <b>networking entre empresarios y profesionales</b>, creando una comunidad donde se comparten desafíos, oportunidades y soluciones, fortaleciendo no solo a cada participante, sino también al ecosistema empresarial en su conjunto.

							En síntesis, GEPE Business School no es solo una escuela de negocios, es un entorno de crecimiento donde la formación, la práctica y las relaciones estratégicas se combinan para <b>formar líderes preparados</b> para los desafíos del presente y del futuro.						
						</>
					]}
					direction={'right'}
					inscriptionTo={'la Consultoría Empresarial'}
				/>
				<CoursesList/>
				<Metrics/>
				{/*<Testimonials/>*/}
				<div style={{width:'100%', height:'150px'}}>

				</div>
				<InternationalPresence/>
				<Footer/>
			</main>
		</>
	);
}