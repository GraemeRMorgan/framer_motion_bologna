"use client";
import React from 'react';
import { motion } from 'framer-motion';
import styles from './HoverMotion.module.css';

function HoverMotion() {
  

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

export default HoverMotion;
