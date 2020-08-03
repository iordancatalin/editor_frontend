import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from 'react';
import JavaEditor from './components/JavaEditor/JavaEditor';
import Console from './components/Console';
import ButtonIcon from './components/ButtonIcon/ButtonIcon';
import { initializeIcons } from './util/icons';
import {
  ConsoleContainer,
  JavaEditorContainer,
  ButtonsPanel,
} from './App.style';

initializeIcons();

const BUTTONS = [
  {
    type: 'primary',
    text: 'Run',
    fontAwesomeIcon: 'play',
    handleClick: (reactEvent) => console.log('Run button clicked', reactEvent),
  },
  {
    type: 'secondary',
    text: 'Settings',
    fontAwesomeIcon: 'cog',
    additionalClass: 'mr-2',
    handleClick: (reactEvent) =>
      console.log('Settings button clicked', reactEvent),
  },
  {
    type: 'secondary',
    text: 'Shortcuts',
    fontAwesomeIcon: 'code',
    additionalClass: 'mr-2',
    handleClick: (reactEvent) =>
      console.log('Shortcuts button clicked', reactEvent),
  },
  {
    type: 'secondary',
    text: 'Copy',
    fontAwesomeIcon: 'copy',
    additionalClass: 'mr-2',
    handleClick: (reactEvent) => console.log('Copy button clicked', reactEvent),
  },
];

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

let editor = null;

function App() {
  const [isConsoleMinimized, setConsoleMinimized] = useState(false);
  const buttonComponents = BUTTONS.map(createButtonIcon);

  const handleEditorDidMount = (_, current) => (editor = current);
  
  const handleConsoleToggle = () => {
    setTimeout(() => editor.layout(), 400);
    setConsoleMinimized(!isConsoleMinimized);
  };

  return (
    <div className='h-100'>
      <JavaEditorContainer minimizedConsole={isConsoleMinimized}>
        <JavaEditor editorDidMount={handleEditorDidMount}></JavaEditor>
      </JavaEditorContainer>

      <ConsoleContainer minimizedConsole={isConsoleMinimized}>
        <Console
          minimizedConsole={isConsoleMinimized}
          handleToggle={handleConsoleToggle}
        ></Console>
      </ConsoleContainer>

      <ButtonsPanel>{buttonComponents}</ButtonsPanel>
    </div>
  );
}

export default App;
