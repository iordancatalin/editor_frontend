import React from 'react';
import Editor from '@monaco-editor/react';

const LANGUAGE = 'java';
const THEME = 'dark';

function JavaEditor(props) {
  return (
    <Editor
      language={LANGUAGE}
      theme={THEME}
      value={props.sampleCode}
      editorDidMount={props.editorDidMount}
    />
  );
}

export default JavaEditor;
