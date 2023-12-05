'use client';
import React from 'react';
import clsx from 'clsx';
import '../../../src/app/globals.css';
import { Sun, Moon } from 'react-feather';
import Cookie from 'js-cookie';
import { LIGHT_TOKENS, DARK_TOKENS, COLOR_THEME_COOKIE_NAME } from '@/constants';
import Logo from '@/components/Logo';
import VisuallyHidden from '@/components/VisuallyHidden';
import styles from './Header.module.css';



function Header({ initialTheme }) {

  const [theme, setTheme] = React.useState(initialTheme);


  // This function toggles the dark-mode switch and saves a Cookie as well as updating the state.
  const handleToggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    Cookie.set(COLOR_THEME_COOKIE_NAME, newTheme, { expires: 1000 });

    // This creates a theme token which can be used to change the CSS on the root.
    const newTokens = newTheme === 'light' ? LIGHT_TOKENS : DARK_TOKENS;
    const root = document.documentElement;

    // This loops over all of the color constants and updates their values.
    Object.entries(newTokens).forEach(
      ([key, value]) => {
        root.style.setProperty(key, value);
      }
    )

  }


  return (
    <header
      className={styles.wrapper}
    >
      <Logo theme={theme} />
      <div className={styles.actions}>
        {/* This swaps darkmode across the site. */}
        <button className={styles.action} onClick={handleToggleTheme}>
          {theme === 'dark' ? <Moon size="1.5rem" /> : <Sun size="1.5rem" />}
          <VisuallyHidden>
            Toggle dark / light mode
          </VisuallyHidden>
        </button>
      </div>

    </header>
  );
}

export default Header;