import React from 'react'
import st from './Service.module.css'
import Link from 'next/link'

export const Service = ({img, title, description, goToId}) => {

  	return (
		<article className={st.container}>
			<img 
				src={img} 
				alt="foto una de los servicios de GEPE" 
				className={st.image}
			/>
			<div className={st.contentContainer}>
				<h3 className={st.title}>{title}</h3>
				<p className={st.description}>{description}</p>
				<button className={st.button}>
					<Link href={goToId} className={st.link}>
        				{'Ver mas info'}
      				</Link>
				</button>
			</div>
		</article>
  	)
}
