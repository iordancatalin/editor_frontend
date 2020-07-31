import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from 'react';
import Editor from './components/Editor';
import Console from './components/Console';
import ButtonIcon from './components/ButtonIcon/ButtonIcon';
import { initializeIcons } from './util/icons';
import { ConsoleContainer, EditorContainer, ButtonsPanel } from './App.style';

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
    handleClick: (reactEvent) =>
      console.log('Copy button clicked', reactEvent),
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

function App() {
  const [isConsoleMinimized, setConsoleMinimized] = useState(true);
  const buttonComponents = BUTTONS.map(createButtonIcon);

  return (
    <div className='h-100'>
      <EditorContainer minimizedConsole={isConsoleMinimized}>
        <Editor></Editor>
      </EditorContainer>

      <ConsoleContainer minimizedConsole={isConsoleMinimized}>
        <Console
          minimizedConsole={isConsoleMinimized}
          handleToggle={() => setConsoleMinimized(!isConsoleMinimized)}
        ></Console>
      </ConsoleContainer>

      <ButtonsPanel>{buttonComponents}</ButtonsPanel>
    </div>
  );
}

export default App;
