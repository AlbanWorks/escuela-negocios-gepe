import React from 'react'
import { Hero } from './components/Hero/Hero'
import { Inscriptions } from './components/Inscriptions/Inscriptions'
import { Classes } from './components/Classes/Classes'
import { Description } from './components/Description/Description'

export const Course = () => {
	return (
		<>
			<Hero/>
			<Description/>
			<Classes/>
			<Inscriptions/>
		</>
	)
}
