import React from 'react'
import st from './TalkBody.module.css'

export const TalkBody = () => {
	return (
		<article className={st.container}>
			<h2 className={st.title}>Sesión Informativa - PRESENCIAL TUCUMAN</h2>
			<p className={st.description}>
				Te invitamos a una sesión informativa presencial exclusiva Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eveniet eligendi cupiditate, corrupti quidem molestias excepturi.
				Durante este encuentro podrás conocer:
			</p>
			<ul className={st.list}>
				<li><span>✔ El contenido y agenda del workshop</span></li>
				<li><span>✔ El contenido y agenda del workshop</span></li>
				<li><span>✔ El contenido y agenda del workshop</span></li>
				<li><span>✔ El contenido y agenda del workshop</span></li>
				<li><span>✔ El contenido y agenda del workshop</span></li>
			</ul>
			<span className={st.bullet}>📅 <b>Fecha:</b> 7 de abril</span>
			<span className={st.bullet}>📅 <b>Fecha:</b> 7 de abril</span>
			<span className={st.bullet}>📅 <b>Fecha:</b> 7 de abril</span>
		</article>
	)
}
