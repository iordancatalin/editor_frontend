import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useRef, useState } from 'react';
import {
  ButtonsPanel,
  ConsoleContainer,
  JavaEditorContainer,
} from './App.style';
import ButtonIcon from './components/ButtonIcon/ButtonIcon';
import Console from './components/Console/Console';
import JavaEditor from './components/JavaEditor/JavaEditor';
import { initializeIcons } from './util/icons';

initializeIcons();

const createRunButton = (handleClick) => ({
  type: 'primary',
  text: 'Run',
  fontAwesomeIcon: 'play',
  additionalClass: null,
  handleClick: handleClick,
});

const createSettingsButton = (handleClick) => ({
  type: 'secondary',
  text: 'Settings',
  fontAwesomeIcon: 'cog',
  additionalClass: 'mr-2',
  handleClick: handleClick,
});

const createShortcutsButton = (handleClick) => ({
  type: 'secondary',
  text: 'Shortcuts',
  fontAwesomeIcon: 'code',
  additionalClass: 'mr-2',
  handleClick: handleClick,
});

const createCopyButton = (handleClick) => ({
  type: 'secondary',
  text: 'Copy',
  fontAwesomeIcon: 'copy',
  additionalClass: 'mr-2',
  handleClick: handleClick,
});

const createButtonIcon = (buttonModel, index) => (
  <ButtonIcon
    key={index}
    className={`mt-3 ${buttonModel.additionalClass}`}
    fontAwesomeIcon={buttonModel.fontAwesomeIcon}
    text={buttonModel.text}
    type={buttonModel.type}
    handleClick={buttonModel.handleClick}
  ></ButtonIcon>
);

const runCode = async (code) => {
  const url = 'http://localhost:8082/api/v1/run-java';

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ code }),
  });

  const body = await response.json();

  return { status: response.status, body };
};

const SAMPLE_CODE = `
  public class Main {
    public static void main(String[] args) {
      System.out.println("Hello world");
    }
  }
`;

function App() {
  const editorRef = useRef();
  const [isConsoleMinimized, setConsoleMinimized] = useState(true);
  const [isConsoleLoading, setConsoleLoading] = useState(false);
  const [executionResponse, setExecutionResponse] = useState({status: 0, body: null});

  const runHandleClick = async () => {
    setConsoleMinimized(false);
    setConsoleLoading(true);

    const resp = await runCode(editorRef.current.getValue());
    
    setExecutionResponse(resp);
    setConsoleLoading(false);
  };
  const runButton = createRunButton(runHandleClick);

  const settingsHandleClick = (event) => console.log(event);
  const settingsButton = createSettingsButton(settingsHandleClick);

  const shortcutsHandleClick = (event) => console.log(event);
  const shortcutsButton = createShortcutsButton(shortcutsHandleClick);

  const copyHandleClick = (event) => console.log(event);
  const copyButton = createCopyButton(copyHandleClick);

  const buttonComponents = [
    runButton,
    settingsButton,
    shortcutsButton,
    copyButton,
  ].map(createButtonIcon);

  const handleEditorDidMount = (_, editor) => (editorRef.current = editor);

  const handleConsoleToggle = () => {
    setTimeout(() => editorRef.current.layout(), 400);
    setConsoleMinimized(!isConsoleMinimized);
  };

  return (
    <div className='h-100'>
      <JavaEditorContainer minimizedConsole={isConsoleMinimized}>
        <JavaEditor
          sampleCode={SAMPLE_CODE}
          editorDidMount={handleEditorDidMount}
        ></JavaEditor>
      </JavaEditorContainer>

      <ConsoleContainer minimizedConsole={isConsoleMinimized}>
        <Console
          isLoading={isConsoleLoading}
          executionResponse={executionResponse}
          minimizedConsole={isConsoleMinimized}
          handleToggle={handleConsoleToggle}
        ></Console>
      </ConsoleContainer>

      <ButtonsPanel>{buttonComponents}</ButtonsPanel>
    </div>
  );
}

export default App;
