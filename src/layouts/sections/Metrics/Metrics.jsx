import { useState, useEffect, useRef } from 'react';
import { useCountUp } from './hooks/useCountUp';
import styles from './Metrics.module.css';

const MetricItem = ({ target, label, suffix = "", shouldAnimate }) => {
  const count = useCountUp(target, 1500, shouldAnimate);
  return (
    <div className={styles.metricCard}>
      <span className={styles.number}>{suffix}{count}</span>
      <p className={styles.label}>{label}</p>
    </div>
  );
};
 
const Metrics = () => {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShouldAnimate(true);
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Impactando en la vida de miles de empresas</h2>
        <p className={styles.subtitle}>
          A través de nuestras charlas, consultorías y/o programas académicos y con más de 15 años de experiencia, hemos acompañado e impactado a miles de empresas en su crecimiento y profesionalización. Nuestro lema, <b>“Nadie llega a la cima solo”</b>, refleja la convicción que nos guía: el verdadero desarrollo empresarial se construye en equipo.
        </p>
		<p className={styles.subtitle}>
			A lo largo de este camino, hemos contribuido a formar y fortalecer miles de equipos de trabajo que hoy acompañan a los empresarios en sus desafíos diarios de dirección, aportando estructura, claridad y capacidad de gestión para lograr mejores resultados.
		</p>
        <div className={styles.grid}>
          <MetricItem target={1000} label="Clientes Satisfechos" suffix="+" shouldAnimate={shouldAnimate} />
          <MetricItem target={15} label="Años de Experiencia" suffix="+" shouldAnimate={shouldAnimate} />
          <MetricItem target={7} label="Sedes" suffix="+" shouldAnimate={shouldAnimate} />
        </div>
      </div>
    </section>
  );
};

export default Metrics;