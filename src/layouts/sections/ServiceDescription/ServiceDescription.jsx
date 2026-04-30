import React,{useState, useEffect} from 'react'
import st from './ServiceDescription.module.css'
import WPForm from '@/components/WPForm/WPForm'
import Carousel from './components/Carousel/Carousel'

export const ServiceDescription = ({id, images, title, description_parts, direction, inscriptionTo}) => {
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
			<Carousel images={images}/>
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
