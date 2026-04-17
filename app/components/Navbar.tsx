"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          🎬 MovieHub
        </Link>
        <ul className={styles.navLinks}>
          <li>
            <Link 
              href="/" 
              className={pathname === '/' ? styles.active : ''}
            >
              Movies
            </Link>
          </li>
          <li>
            <Link 
              href="/review" 
              className={pathname === '/review' ? styles.active : ''}
            >
              Review
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
