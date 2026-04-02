import React from 'react'
import st from './Hero.module.css'
import Link from 'next/link'
import ClockIcon from '@/components/svgIcons/ClockIcon'

export const Hero = () => {
	return (
		<section className={st.container}>
			<article className={st.content}>
				<h1 className={st.title}>Módulo Capital Humano</h1>
				<p className={st.description}>
					Desarrollá la capacidad de diseñar, liderar y gestionar estratégicamente el capital humano de tu empresa, transformando a tu equipo en una ventaja competitiva sostenible.
				</p>
				<Link href={"#inscribirse"} className={st.button}>
					Inscribirme
				</Link>
				<div className={st.bulletsContainer}>
					<div className={st.bullet}>
						<ClockIcon stroke={'#fff'} size={28}/>
						<div className={st.bulletContent}>
							<span>8 clases presenciales</span>
							<span>4 hs cada una</span>
						</div>
					</div>
					<div className={st.bullet}>
						<ClockIcon stroke={'#fff'} size={28}/>
						<div className={st.bulletContent}>
							<span>8 clases presenciales</span>
							<span>4 hs cada una</span>
						</div>
					</div>
					<div className={st.bullet}>
						<ClockIcon stroke={'#fff'} size={28}/>
						<div className={st.bulletContent}>
							<span>8 clases presenciales</span>
							<span>4 hs cada una</span>
						</div>
					</div>
				</div>
			</article>
		</section>
	)
}
