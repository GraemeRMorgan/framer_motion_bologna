"use client";
import React from 'react';
import styles from './SectionCard.module.css'

const SectionCard = () => {
  const [animationFinished, setAnimationFinished] = React.useState(false);

  const handleHoverStart = () => {
    setAnimationFinished(false);
  }
  const handleHoverEnd = () => {
    setAnimationFinished(true);
  }

  return (
  <div className={`${styles.sectionCard} ${styles.shadowLight} ${animationFinished ? `${styles.finished}` : ''}`}
  onMouseEnter={handleHoverStart}
  onMouseLeave={handleHoverEnd}>
    {/* <span className={styles.cardAction}>Hello</span> */}

  </div>
  );
}

export default SectionCard;
