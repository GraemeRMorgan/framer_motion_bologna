"use client";
import React from 'react';
import styles from './Toggle.module.css';
import { motion } from 'framer-motion';
import ThreeBreaks from '../ThreeBreaks';

// function Toggle({ value, onChange, ...delegated }) {
function Toggle() {

  const [isEnabled, setIsEnabled] = React.useState(false);

  return (
    <div>
      <button
        type="button"
        role="switch"
        aria-checked={isEnabled}
        className={styles.wrapper}
        onClick={() => setIsEnabled(!isEnabled)}
        >
        <motion.span
          className={styles.ball}
          initial={false}
          transition={{
            type: 'spring',
            stiffness: 600,
            damping: 50,
          }}
          animate={{
            x: isEnabled ? '100%' : '0%',
          }}
        />
        </button>
    </div>
  );
}

export default Toggle;
