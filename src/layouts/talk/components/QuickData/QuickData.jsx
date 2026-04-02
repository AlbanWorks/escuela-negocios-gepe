import React from 'react'
import st from './QuickData.module.css'
import { DateIcon } from '@/components/svgIcons/DateIcon'
import ClockIcon from '@/components/svgIcons/ClockIcon'
import LocationPin from '@/components/svgIcons/LocationPin'

export const QuickData = () => {
	return (
		<article className={st.container}>
			<div className={st.bullet}>
				<ClockIcon stroke={'var(--gepe_blue1)'} size={36} slim={true}/>
				<div className={st.data}>
					<span className={st.bulletTitle}>FECHA</span>
					<span className={st.bulletContent}>1-1-1</span>
				</div>
			</div>
			<div className={st.bullet}>
				<DateIcon stroke={'var(--gepe_blue1)'} size={36} slim/>
				<div className={st.data}>
					<span className={st.bulletTitle}>HORA</span>
					<span className={st.bulletContent}>15:00 a 18:00hs</span>
				</div>
			</div>
			<div className={st.bullet}>
				<LocationPin stroke={'var(--gepe_blue1)'} size={36} slim/>
				<div className={st.data}>
					<span className={st.bulletTitle}>LUGAR</span>
					<span className={st.bulletContent}>San Miguel de Tucuman</span>
				</div>
			</div>
		</article>
	)
}
