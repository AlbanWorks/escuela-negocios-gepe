import Link from 'next/link';
import styles from './NavOption.module.css';

const NavOption = ({ label, href, onClick }) => {
  return (
    <li className={styles.item}>
      <Link href={href} className={styles.link} onClick={onClick}>
        {label}
      </Link>
    </li>
  );
};

export default NavOption;