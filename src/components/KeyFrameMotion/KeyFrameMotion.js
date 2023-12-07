"use client";
import React from 'react';
import { motion } from 'framer-motion';
import styles from './KeyFrameMotion.module.css';
import ThreeBreaks from '../ThreeBreaks';

function KeyFrameMotion() {
  const [isClicked, setisClicked] = React.useState(false);

  const handleClick = () => {
    setisClicked(!isClicked);

    setTimeout(() => {
      setisClicked(false);
    }, 2000)
  }

  return (
    <div>
      <motion.div
        className={styles.cube}
        animate={{
          x: isClicked ? [0, 200, 200,200,0] : 0,
          rotate: isClicked ? [0,180,180,90,0] : 0,
          borderRadius: isClicked ? ["6%", "50%", "6%", "6%", "6%"] : 0,
          scale: isClicked ? [1,0.5,0.5,0.5,1] : 1
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.5, 1]

        }}
      />
      <br />
      <button className={styles.buttonVar1} onClick={handleClick}>Keyframe Animation</button>

    </div>);
}

export default KeyFrameMotion;

