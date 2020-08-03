import React from 'react';
import Editor from '@monaco-editor/react';

const code = `
  public class Main {
    public static void main(String[] args) {
      System.out.println("Hello world");
    }
  }
`;

function JavaEditor(props) {
  return (
    <Editor
      language='java'
      theme='dark'
      value={code}
      editorDidMount={props.editorDidMount}
    />
  );
}

export default JavaEditor;
