import { useState, useEffect } from 'react';
import NavOption from './components/NavOption/NavOption';
import { useActiveSection } from './hooks/useActiveSection';
import styles from './Navbar.module.css';
import { SECTION_IDS } from '@/utils/navLinks';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER
  const navLinks = [
    { label: 'Cursos', href: `#sdasdasd`},
	  { label: 'Aula Virtual', href: `#${SECTION_IDS.escuela_negocios}`},
	  { label: 'Contacto', href: `https://wa.me/${phoneNumber}?text=${'Hola, vengo de la web de GEPE'}`},
  ];

  const closeMenu = () => setIsOpen(false);

  // Bloquear scroll al abrir menú
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  return (
    <nav className={styles.nav}>
      <div 
        className={`${styles.overlay} ${isOpen ? styles.overlayVisible : ''}`} 
        onClick={closeMenu}
      />

      <div className={styles.container}>
        <div className={styles.logoWrapper}>
          <img src="/images/navbar_logo.webp" alt="Logo" className={styles.logo} />
        </div>

        <button className={styles.hamburger} onClick={() => setIsOpen(true)}>
          ☰
        </button>

        <ul className={`${styles.menu} ${isOpen ? styles.menuOpen : ''}`}>

          <button className={styles.closeBtn} onClick={closeMenu}>✕</button>
          
          {navLinks.map((link) => (
            <NavOption 
              key={link.href} 
              {...link} 
              onClick={closeMenu} 
            />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;