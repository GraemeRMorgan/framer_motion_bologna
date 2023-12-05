// This is a child of a client-side component.

import React from 'react';
import Link from 'next/link';
import Cookies from 'js-cookie';

import { SITE_TITLE, DARK_ICON, LIGHT_ICON, COLOR_THEME_COOKIE_NAME } from '@/constants';

import styles from './Logo.module.css';

function Logo({ mobileAlignment = 'left', theme }) {
  
  return (
    <Link
      href="/"
      className={styles.wrapper}
      data-mobile-alignment={mobileAlignment}
    >
      {SITE_TITLE}   {theme == 'light' ? LIGHT_ICON : DARK_ICON}
      
      
 
    </Link>
  );
}

export default Logo;
