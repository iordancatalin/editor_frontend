import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Loader from '../Loader';
import { ConsoleHeader, Terminal } from './Console.style';

const infoStyle = { color: '#B2B2B2' };

const createLoaderElement = () => (
  <div className='mt-5 pt-4'>
    <Loader></Loader>
  </div>
);

const createTerminalElement = (terminalEndpoint) => (
  <Terminal src={terminalEndpoint} title='JavaRunnerTerminal'></Terminal>
);

function Console(props) {
  const iconName = props.minimizedConsole ? 'chevron-up' : 'chevron-down';
  const activeJdkTag = props.activeJdkVersion && (
    <span className='ml-4 text-secondary'>
      <b>#{props.activeJdkVersion}</b>
    </span>
  );

  const consoleContent = props.isLoading
    ? createLoaderElement()
    : createTerminalElement(props.terminalEndpoint);

  return (
    <div className='h-100 position-relative'>
      <ConsoleHeader onClick={props.handleToggle}>
        <div className='col-11 text-white d-flex align-items-center'>
          Console
          {activeJdkTag}
        </div>
        <div className='col-1 text-white d-flex align-items-center justify-content-end'>
          <FontAwesomeIcon className='mr-2' icon={iconName}></FontAwesomeIcon>
        </div>
      </ConsoleHeader>

      <div
        className='pt-2 pb-0 pl-4 pr-0 code-font'
        style={{ height: 'calc(100% - 35px)' }}
      >
        <span className='d-none' style={infoStyle}>
          2020-07-30 19:22:55 [INFO] Running Java version: openjdk-11.0.6_10
        </span>

        <div className='h-100'>{consoleContent}</div>
      </div>
    </div>
  );
}

export default Console;
