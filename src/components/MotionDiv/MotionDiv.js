"use client";
import React from 'react';
import styles from "./MotionDiv.module.css";
import { Play } from "react-feather";

function MotionDiv({ easeFunction, keyframe }) {
  const [isActive, setIsActive] = React.useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  }
  const resetState = () => {
    setIsActive(false);
  }
  React.useEffect(() => {
    // Set a timeout to reset the state after a certain time (e.g., 3000 milliseconds)
    const timeoutId = setTimeout(resetState, 1000);

    // Clear the timeout if the component unmounts or if you want to cancel it for some reason
    return () => clearTimeout(timeoutId);
  }, [isActive]);

  return (
    <div >
      <div className={styles.flexItem}>

        {easeFunction === undefined ?
          <div className={`${keyframe ? styles[`keyframeAnimation`] : ''} ${isActive ? styles["keyframeStart"] : ''}`} /> :
          <div className={`${styles['translatable-div']} ${isActive ? styles[`${easeFunction}`] : ''}`} />}
      </div>
      <button className={styles.motionButton} onClick={handleClick}>{easeFunction || 'Play Animation'}</button>

    </div>)
}

export default MotionDiv;
