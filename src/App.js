import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useRef, useState, useEffect } from 'react';
import {
  ButtonsPanel,
  ConsoleContainer,
  JavaEditorContainer,
} from './App.style';
import ButtonIcon from './components/ButtonIcon/ButtonIcon';
import Console from './components/Console/Console';
import JavaEditor from './components/JavaEditor/JavaEditor';
import { initializeIcons } from './util/icons';
import { SAMPLE_CODE } from './util/constants';
import { runCode, fetchAvailableJavaVersions } from './service/Service';
import SettingsDialog from './components/SettingsDialog/SettingsDialog';

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

function App() {
  const editorRef = useRef();
  const [isConsoleMinimized, setConsoleMinimized] = useState(true);
  const [isConsoleLoading, setConsoleLoading] = useState(false);
  const [terminalEndpoint, setTerminalEndpoint] = useState(null);
  const [availableJdkVersions, setAvailableJdkVersions] = useState([]);
  const [activeJdkVersion, setActiveJdkVersion] = useState(null);
  const [openDialog, setOpenDialog] = useState(null);

  useEffect(() => {
    const fetchJavaVersions = async () => {
      const response = await fetchAvailableJavaVersions();
      const availableJavaVersions = await response.json();

      setAvailableJdkVersions(availableJavaVersions);
      setActiveJdkVersion(availableJavaVersions[0]);
    };

    fetchJavaVersions();
  }, []);

  const runHandleClick = async () => {
    setConsoleMinimized(false);
    setConsoleLoading(true);

    const requestBody = {
      javaVersion: activeJdkVersion,
      code: editorRef.current.getValue(),
    };
    const executionResponse = await runCode(requestBody);

    setTerminalEndpoint(executionResponse.body.terminalEndpoint);
    setConsoleLoading(false);
  };

  const runButton = createRunButton(runHandleClick);

  const settingsHandleClick = () => setOpenDialog('SETTINGS');
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

  const handleCloseDialog = () => setOpenDialog(null);

  const createSettingsDialog = () => {
    const handleJdkVersionChange = (index) =>
      setActiveJdkVersion(availableJdkVersions[index]);

    return (
      <SettingsDialog
        handleClose={handleCloseDialog}
        activeJdkVersion={activeJdkVersion}
        availableJdkVersions={availableJdkVersions}
        handleVersionChange={handleJdkVersionChange}
      ></SettingsDialog>
    );
  };

  const getOpenDialog = () => {
    switch (openDialog) {
      case 'SETTINGS':
        return createSettingsDialog();
      default:
        return null;
    }
  };

  const dialog = getOpenDialog();

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
          activeJdkVersion={activeJdkVersion}
          isLoading={isConsoleLoading}
          terminalEndpoint={terminalEndpoint}
          minimizedConsole={isConsoleMinimized}
          handleToggle={handleConsoleToggle}
        ></Console>
      </ConsoleContainer>

      <ButtonsPanel>{buttonComponents}</ButtonsPanel>

      {dialog}
    </div>
  );
}

export default App;
