import { useState, useEffect } from 'react';
import styles from './CoursesLIst.module.css';

const COURSES_MOCK = [
  {
    id: "c-001",
    title: "Programa Ejecutivo: Estrategias de Profesionalización Empresarial",
    category: "Formación para Empresas",
    modality: "Presencial (Barcelona)",
    date: "12 Mayo",
    duration: "Cursos largos",
    status: "Inscríbete"
  },
  {
    id: "c-002",
    title: "Taller Avanzado de Contabilidad y Análisis Financiero para Directivos",
    category: "Contabilidad para Empresas",
    modality: "Presencial (Valencia)",
    date: "18 Mayo",
    duration: "Módulos cortos",
    status: "Inscríbete"
  },
  {
    id: "c-003",
    title: "Consultoría Estratégica: Optimización de Procesos Operativos",
    category: "Consultoría",
    modality: "Presencial (Buenos Aires)",
    date: "22 Mayo",
    duration: "Charlas individuales",
    status: "Inscríbete"
  },
  {
    id: "c-004",
    title: "Gestión Patrimonial y Fiscalidad Internacional",
    category: "Contabilidad para Empresas",
    modality: "Presencial Tucumán",
    date: "05 Junio",
    duration: "Módulos cortos",
    status: "Inscríbete"
  },
  {
    id: "c-005",
    title: "Liderazgo en Tiempos de Incertidumbre: El Rol del Empresario",
    category: "Formación para Empresas",
    modality: "Presencial (Córdoba, AR)",
    date: "10 Junio",
    duration: "Charlas individuales",
    status: "Inscríbete"
  },
  {
    id: "c-006",
    title: "Máster en Administración y Dirección de PyMEs",
    category: "Formación para Empresas",
    modality: "Presencial (Mar del Plata)",
    date: "15 Junio",
    duration: "Cursos largos",
    status: "Inscríbete"
  }
];

export default function CoursesList() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Simulamos llamada a API
    setCourses(COURSES_MOCK);
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          ¿Quieres ser parte de nuestros programas y profesionalizar tu empresa?
        </h2>
        <p className={styles.subtitle}>
         Formate con nuestros programas Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates labore quae, esse cupiditate expedita perspiciatis et eum possimus eaque.
        </p>
      </div>
      <div className={styles.list}>
        {courses.map((course) => (
          <div key={course.id} className={styles.courseItem}>
            <div className={styles.courseName}>{course.title}</div>
            <div className={styles.date}>{course.date} - {course.modality}</div>
            <a href="#" className={styles.button}>
              <span>Inscribirse</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}