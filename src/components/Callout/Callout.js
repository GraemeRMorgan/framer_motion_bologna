
import React from 'react';
import styles from "./Callout.module.css"
import CodeLine from '../CodeLine';

const  Callout = ({message})  => {
  return (
  <div className={styles.callout}>
    <div className={styles.lightbulb}>
    💡
    </div>
    {message}
  </div>
  );
}

export default Callout;
