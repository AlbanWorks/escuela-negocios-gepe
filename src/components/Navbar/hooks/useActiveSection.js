import { useState, useEffect } from 'react';

export const useActiveSection = (sectionIds) => {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Si la sección está visible en un 60%, la marcamos activa
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { 
        // El rootMargin es clave: detecta la sección cuando está 
        // en el área central/superior de la pantalla
        rootMargin: '-20% 0px -70% 0px' 
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
};