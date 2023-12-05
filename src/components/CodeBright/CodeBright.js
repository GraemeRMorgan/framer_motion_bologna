import React from 'react';
import { Code } from 'bright';
import styles from './CodeBright.module.css';

const CodeBright = ({ code }) => {
  Code.theme = "material-darker";
  return (
    <div className="codeWrapperBorder">
      <Code lang="css">{code}</Code>
    </div>
  );
}

export default CodeBright;
