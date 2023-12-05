import React from 'react';
import "../../app/globals.css";
import styles from './CodeLine.module.css';

function CodeLine({message, style}){
  
  
  return <>
   
    <code className={styles.display}>{message}</code> 
    
  </>;
}

export default CodeLine;
