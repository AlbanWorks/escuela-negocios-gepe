import { useState, useEffect } from 'react';
import NavOption from './components/NavOption/NavOption';
import styles from './Navbar.module.css';
import { SECTION_IDS } from '@/utils/navLinks';
import { useRouter } from 'next/router';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER
  const navLinks = [
    { label: 'Programas', href: `/#${SECTION_IDS.cursos}`},
	{ label: 'Aula Virtual', href: `/#aula-virtual`},
	{ label: 'Alumnos', href: `/#${SECTION_IDS.testimonios}`},
	{ label: 'Sedes', href: `/#${SECTION_IDS.sedes}`},
	{ label: 'Contacto', href: `https://wa.me/${phoneNumber}?text=${'Hola, vengo de la web de GEPE'}`},
  ];
	const router = useRouter()
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
        <div className={styles.logoWrapper} onClick={()=>router.push('/')}>
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