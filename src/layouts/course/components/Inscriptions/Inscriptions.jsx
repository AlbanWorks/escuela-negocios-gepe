import React from 'react'
import st from './Inscriptions.module.css'
import WPForm from '@/components/WPForm/WPForm'

export const Inscriptions = () => {
  return (
	<section className={st.container}>
		<h3 className={st.title}>¿Listo para transformar tu equipo?</h3>
		<p className={st.description}> Completá tus datos y te contactaremos con las formas de pago vigentes.</p>
		<div className={st.formContainer}>
			<WPForm/>
		</div>
	</section>
  )
}
