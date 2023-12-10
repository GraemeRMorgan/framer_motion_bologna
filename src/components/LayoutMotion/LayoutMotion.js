"use client";
import React from 'react';
import { motion } from 'framer-motion';
import styles from './LayoutMotion.module.css';


function LayoutMotion() {

  const [isMaximized, setIsMaximized] = React.useState(false);
  const SPRING = {
    type: 'spring',
    stiffness: 200,
    damping: 40,
  };

  return (
    <>
      <motion.div
        layout={true}
        transition={SPRING}
        className={`${styles.cube} ${isMaximized ? styles.cube2 : ''}`}
        onClick={() => setIsMaximized(!isMaximized)}
      >
      </motion.div>
  
    </>
    );

}

export default LayoutMotion;
