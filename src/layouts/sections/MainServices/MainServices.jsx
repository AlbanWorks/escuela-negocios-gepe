import React from 'react'
import st from './MainServices.module.css'
import { Service } from './components/Service/Service'
import { SECTION_IDS } from '@/utils/navLinks'
//	<h2 className={st.title}>Estos son nuestros servicios</h2>
export const MainServices = () => {

  return (
	<section className={st.container} id={SECTION_IDS.servicios}>
		<div className={st.servicesContainer}>
			<Service 
				img={'/images/accounting.webp'}
				title={'Contabilidad para Empresas'}
				description={'Formación y consultoría a medida para tu empresa.'}
				goToId={`#${SECTION_IDS.contabilidad_empresas}`}
			/>
			<Service 
				img={'/images/consulting.webp'}
				title={'Consultoría Empresarial'}
				description={'Formación y consultoría a medida para tu empresa.'}
				goToId={`#${SECTION_IDS.consultoria_empresarial}`}
			/>
			<Service 
				img={'/images/school.webp'}
				title={'Escuela de Negocios'}
				description={'Formación y consultoría a medida para tu empresa.'}
				goToId={`#${SECTION_IDS.escuela_negocios}`}
			/>
		</div>
	</section>
  )
}
