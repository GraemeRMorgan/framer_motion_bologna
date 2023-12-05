import React from 'react';
import styles from './Footer.module.css';
import Link from 'next/link';


function Footer() {
  return (
  <div className={styles.footerMain}>
    <br />
    <br />
    <br />
    <br />
    <div className={styles.container}>
    <Link href="/" className="linkBack">🏡 Home</Link>
    </div>
    <p className={styles.footerFont}>Created by Graeme Morgan</p>
    <br />
    <br />
  </div>
  );
}

export default Footer;
