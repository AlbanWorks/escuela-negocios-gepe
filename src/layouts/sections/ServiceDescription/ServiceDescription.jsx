import React,{useState, useEffect} from 'react'
import st from './ServiceDescription.module.css'
import WPForm from '@/components/WPForm/WPForm'

export const ServiceDescription = ({id, img, title, description_parts, direction, inscriptionTo}) => {
	const [isFormOpen, setIsFormOpen] = useState(false)
	const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER

	  // Bloquear scroll al abrir menú
	  useEffect(() => {
		document.body.style.overflow = isFormOpen ? 'hidden' : 'unset'; 
	  }, [isFormOpen]);

	return (
		<section 
			className={
				`${st.container} 
				${direction === 'right' ? st.containerRight : st.containerLeft}`
			} 
			id={id}
		>
			<img 
				className={st.img}
				src={img.url} 
				alt={img.alt} 
			/>
			<article className={st.contentContainer}>
				{
					description_parts.map((part, index) =>
						<p className={st.description} key={index}>{part}</p>
					)
				}
			</article>
			{
				isFormOpen &&
					<div className={st.formOverlay}>
						<button className={st.formOverlayButton} onClick={()=> setIsFormOpen(!isFormOpen)}>✕</button>
						<WPForm 
							whatsappNumber={phoneNumber}
							subject={inscriptionTo}
						/>
					</div>
			}
		</section>
	)
}
