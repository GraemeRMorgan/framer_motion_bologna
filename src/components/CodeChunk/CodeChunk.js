import React from 'react';
import styles from './CodeChunk.module.css';

function CodeChunk({ message }) {
  return (
    <div className={styles.wrapper}>
      <pre>
        <code className={styles.codeChunk}>{message}</code>
      </pre>
    </div>
  );
}

export default CodeChunk;
