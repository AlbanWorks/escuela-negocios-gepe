import React from 'react'
import st from './Talk.module.css'
import { QuickData } from './components/QuickData/QuickData'
import { TalkBody } from './components/TalkBody/TalkBody'
import WPForm from '@/components/WPForm/WPForm'

const Talk = () => {
	return (
		<section className={st.container}>
			<h1 className={st.title}>Sesión Informativa - PRESENCIAL TUCUMAN</h1>
			<QuickData/>
			<div className={st.formContainer}>
				<WPForm/>
			</div>
			<TalkBody/>
		</section>
	)
}

export default Talk