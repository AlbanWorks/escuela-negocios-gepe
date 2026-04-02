import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import styles from './Testimonials.module.css';

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

 const data = [
    {
      id: 1,
      name: "Juan Pérez",
      role: "Director en Logística Norte",
      text: "La transición a procesos digitales fue impecable. Entendieron nuestras necesidades desde el día uno.",
      image: "/images/user1.webp"
    },
    {
      id: 2,
      name: "María García",
      role: "Dueña de Estudio G&A",
      text: "Excelente atención y soporte técnico. El sistema de gestión que implementaron nos ahorró horas de trabajo semanal.",
      image: "/images/user1.webp"
    },
    {
      id: 3,
      name: "Roberto Gómez",
      role: "Gerente de Operaciones",
      text: "Un socio estratégico fundamental. Su consultoría nos permitió escalar el negocio de forma organizada.",
      image: "/images/user1.webp"
    }
  ];

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, setScrollSnaps, onSelect]);

  return (
    <section id="testimonios" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Lo que dicen nuestros alumnos</h2>
        
        <div className={styles.viewport} ref={emblaRef}>
          <div className={styles.container_inner}>
            {data.map((item) => (
              <div key={item.id} className={styles.slide}>
                <div className={styles.card}>
                  <img src={item.image} alt={item.name} className={styles.image} />
                  <h3 className={styles.name}>{item.name}</h3>
                  <p className={styles.role}>{item.role}</p>
                  <p className={styles.text}>"{item.text}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className={`${styles.arrow} ${styles.prev}`} onClick={scrollPrev}>‹</button>
        <button className={`${styles.arrow} ${styles.next}`} onClick={scrollNext}>›</button>
        <div className={styles.dots}>
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === selectedIndex ? styles.dotActive : ''}`}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;