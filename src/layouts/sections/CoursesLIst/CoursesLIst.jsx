import { useState, useEffect } from 'react';
import Link from 'next/link';
import { SECTION_IDS } from '@/utils/navLinks';
import styles from './CoursesLIst.module.css'
const COURSES_MOCK = [
  {
    id: "c-001",
    title: "Programa Ejecutivo: Estrategias de Profesionalización Empresarial",
    category: "Formación para Empresas",
    modality: "Presencial (Barcelona)",
    date: "12 Mayo",
    duration: "course",
    status: "Inscríbete"
  },
  {
    id: "c-002",
    title: "Taller Avanzado de Contabilidad y Análisis Financiero para Directivos",
    category: "Contabilidad para Empresas",
    modality: "Presencial (Valencia)",
    date: "18 Mayo",
    duration: "course",
    status: "Inscríbete"
  },
  {
    id: "c-003",
    title: "Consultoría Estratégica: Optimización de Procesos Operativos",
    category: "Consultoría",
    modality: "Presencial (Buenos Aires)",
    date: "22 Mayo",
    duration: "talk",
    status: "Inscríbete"
  },
  {
    id: "c-004",
    title: "Gestión Patrimonial y Fiscalidad Internacional",
    category: "Contabilidad para Empresas",
    modality: "Presencial Tucumán",
    date: "05 Junio",
    duration: "course",
    status: "Inscríbete"
  },
  {
    id: "c-005",
    title: "Liderazgo en Tiempos de Incertidumbre: El Rol del Empresario",
    category: "Formación para Empresas",
    modality: "Presencial (Córdoba, AR)",
    date: "10 Junio",
    duration: "talk",
    status: "Inscríbete"
  },
  {
    id: "c-006",
    title: "Máster en Administración y Dirección de PyMEs",
    category: "Formación para Empresas",
    modality: "Presencial (Mar del Plata)",
    date: "15 Junio",
    duration: "course",
    status: "Inscríbete"
  }
];

export default function CoursesList() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    setCourses(COURSES_MOCK);
  }, []);

  return (
    <section className={styles.container} id={SECTION_IDS.cursos}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          ¿Quieres ser parte de nuestros programas y profesionalizar tu empresa?
        </h2>
      </div>
      <div className={styles.list}>
        {courses.map((course) => (
          <div key={course.id} className={styles.courseItem}>
            <div className={styles.courseName}>
              <span>{course.title}</span>
              <span className={styles.categoryBadge}>{course.category}</span>
            </div>
            <div className={styles.details}>
              <span className={styles.date}>{course.date}</span>
              <span className={styles.modality}>{course.modality}</span>
            </div>
            <div className={styles.actions}>
				<Link 
					href={course.duration === 'course' ? `/courses/${course.id}` : `/talks/${course.id}`} 
					className={styles.button}
				>
					Inscribirse
				</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}