"use client";
import React from 'react';
import { motion } from 'framer-motion';
import styles from './LayoutMotion.module.css';

function LayoutMotion() {
  

  return( 
    <div>
      <motion.div
        className={styles.cube}
        initial = {{
          opacity: 0.8
        }}
        whileHover={{
          scale: 1.1,
          opacity: 1
        }}
        
      />

    </div>);
  
}

export default LayoutMotion;
