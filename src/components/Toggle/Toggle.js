import React from 'react';
import styles from './Toggle.module.css';
import { motion } from 'framer-motion';
import ThreeBreaks from '../ThreeBreaks';

function Toggle({ value, onChange, ...delegated }) {
  return (
    <div>
      <button
        type="button"
        role="switch"
        aria-checked={value}
        className={styles.wrapper}
        onClick={() => onChange(!value)}
        {...delegated}>
        <motion.span
          className={styles.ball}
          initial={false}
          transition={{
            type: 'spring',
            stiffness: 600,
            damping: 50,
          }}
          animate={{
            x: value ? '100%' : '0%',
          }}
        />
      </button>
      <ThreeBreaks />
      <ThreeBreaks />
      <ThreeBreaks />
      <ThreeBreaks />
    </div>
  );
}

export default Toggle;
