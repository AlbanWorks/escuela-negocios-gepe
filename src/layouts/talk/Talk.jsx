import React from 'react'
import st from './Talk.module.css'
import { QuickData } from './components/QuickData/QuickData'
import { TalkBody } from './components/TalkBody/TalkBody'
import WPForm from '@/components/WPForm/WPForm'

const Talk = () => {
	return (
		<section className={st.container}>
			<div className={st.infoContainer}>
				<h1 className={st.title}>Sesión Informativa - PRESENCIAL TUCUMAN</h1>
				<QuickData/>
				<div className={st.formMobileContainer}>
					<WPForm/>
				</div>
				<TalkBody/>
			</div>
			<div className={st.formDesktopContainer}>
				<WPForm/>
			</div>
		</section>
	)
}

export default Talk