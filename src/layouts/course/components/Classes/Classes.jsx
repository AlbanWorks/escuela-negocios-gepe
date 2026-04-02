import React from 'react'
import st from './Classes.module.css'
export const Classes = () => {
	return (
		<section className={st.container}>
			<h3 className={st.title}>8 clases que transformarán tu gestión</h3>
			<p className={st.description}>Modalidad presencial · 4 horas por clase</p>
			<div className={st.classesContainer}>
				<div className={st.class}>
					<span className={st.classNumber}>1</span>
					<span className={st.classTitle}>Selección y Armado del Equipo Inicial</span>
				</div>
				<div className={st.class}>
					<span className={st.classNumber}>2</span>
					<span className={st.classTitle}>Selección y Armado del Equipo Inicial</span>
				</div>
				<div className={st.class}>
					<span className={st.classNumber}>3</span>
					<span className={st.classTitle}>Selección y Armado del Equipo Inicial</span>
				</div>
				<div className={st.class}>
					<span className={st.classNumber}>4</span>
					<span className={st.classTitle}>Selección y Armado del Equipo Inicial</span>
				</div>
				<div className={st.class}>
					<span className={st.classNumber}>5</span>
					<span className={st.classTitle}>Selección y Armado del Equipo Inicial</span>
				</div>
			</div>
			<div className={st.dateContainer}>
				<div className={st.date}>
					<span className={st.dateHeader}>📍 Lugar</span>
					<span className={st.dateTitle}>Junín 67, Piso 5, Oficina D</span>
					<span className={st.dateExtras}>Tucumán, Argentina</span>
				</div>
				<div className={st.date}>
					<span className={st.dateHeader}>📅 Inicio</span>
					<span className={st.dateTitle}>8 de Abril</span>
					<span className={st.dateExtras}>8 clases de 4 hs · Presencial</span>
				</div>
			</div>
		</section>
	)
}
