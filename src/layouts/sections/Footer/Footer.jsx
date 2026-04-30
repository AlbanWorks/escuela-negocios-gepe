import Link from 'next/link';
import styles from './Footer.module.css';
import { SECTION_IDS } from '@/utils/navLinks';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
        <div className={styles.logoContainer}>
				<img 
					src="/images/navbar_logo.webp" 
					alt="Logo de GEPE" 
					className={styles.logo} 
				/>
			</div>
          <p className={styles.mission}>
            Impulsamos la profesionalización de pequeñas y medianas empresas con soluciones reales y visión estratégica.
          </p>
        </div>
        <div className={styles.column}>
          <h4 className={styles.title}>Navegación</h4>
          <ul className={styles.list}>
            <li><Link href={`/#${SECTION_IDS.cursos}`} className={styles.link}>Programas</Link></li>
            <li><Link href={`/#`}  className={styles.link}>Aula virtual</Link></li>
            <li><Link href={`/#${SECTION_IDS.testimonios}`} className={styles.link}>Alumnos</Link></li>
			<li><Link href={`/#${SECTION_IDS.sedes}`} className={styles.link}>Sedes</Link></li>
            <li><Link href="" className={styles.link}>Contacto</Link></li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4 className={styles.title}>Contacto</h4>
          <ul className={styles.list}>
            <li>info@gepe.ar</li>
            <li>{phoneNumber}</li>
            <li>Tucumán, Argentina</li>
          </ul>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className={styles.bottomContainer}>
          <p>&copy; {currentYear} GEPE. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;