import React from 'react'
import st from './Description.module.css'
import ClockIcon from '@/components/svgIcons/ClockIcon'
export const Description = () => {
	return (
		<section className={st.container}>
			<h3 className={st.title}>¿Te identificás con alguna de estas situaciones?</h3>
			<div className={st.listsContainer}>
				<div className={`${st.list} ${st.problems}`}>
					<div className={st.listTitleContainer}>
						<ClockIcon stroke={'rgb(214, 40, 40)'} size={24}/>
						<span className={st.listTitle}>
							Problemas comunes
						</span>
					</div>
					<ul>
						<li><span>La gente no responde como debería</span></li>
						<li><span>Alta rotación de personal</span></li>
						<li><span>Conflictos internos frecuentes</span></li>
						<li><span>Falta de liderazgo en mandos medios</span></li>
						<li><span>Dificultad para delegar tareas</span></li>
						<li><span>Sos el 'bombero' de tu empresa</span></li>
					</ul>
				</div>
				<div className={`${st.list} ${st.solutions}`}>
					<div className={st.listTitleContainer}>
						<ClockIcon stroke={'rgb(70, 182, 79)'} size={24}/>
						<span className={st.listTitle}>
							Este módulo es para vos
						</span>
					</div>
					<ul>
						<li className={st.lidan}><span>La gente no responde como debería</span></li>
						<li><span>Emprendedores con 2 o más colaboradores</span></li>
						<li><span>Comerciantes que dependen del personal de ventas</span></li>
						<li><span>Empresarios PyME (5 a 50 empleados)</span></li>
						<li><span>Dueños que quieren construir un equipo autónomo</span></li>
					</ul>
				</div>
			</div>
		</section>
	)
}
