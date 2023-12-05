"use client";
import React from 'react';
import { CodeBlock, dracula } from 'react-code-blocks';

function Code({ code, language, showLineNumbers, startingLineNumber }) {
  return (
    <CodeBlock
      text={code}
      language={language}
      showLineNumbers={showLineNumbers}
      startingLineNumber={startingLineNumber}
      theme={dracula}
    />
    );
}

export default Code;
