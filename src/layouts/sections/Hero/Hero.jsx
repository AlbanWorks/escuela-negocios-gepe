import React,{useState,useEffect} from 'react';
import Link from 'next/link';
import styles from './Hero.module.css';
import { SECTION_IDS } from '@/utils/navLinks';

const images = [
  '/images/hero.webp',
  '/images/hero2.webp',
  '/images/hero3.webp',
];

export const Hero = () => {

	const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="inicio" className={styles.hero}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Escuela de negocios de GEPE
          </h1>
          <p className={styles.subtitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam culpa aspernatur eius sed
          </p>
          <div className={styles.buttonContainer}>
            <Link href={"#" + SECTION_IDS.servicios} className={styles.button}>
              Ver Cursos
            </Link>
          </div>
        </div>
    </section>
  );
};

