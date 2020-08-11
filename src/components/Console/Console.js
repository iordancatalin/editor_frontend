import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Loader from '../Loader';
import { ConsoleHeader, ErrorLogComponent } from './Console.style';

const infoStyle = { color: '#B2B2B2' };

const createErrorLog = (error, index) => (
  <div key={index}>
    <ErrorLogComponent>{error}</ErrorLogComponent>
  </div>
);

const createLoaderElement = () => (
  <div className='mt-5 pt-4'>
    <Loader></Loader>
  </div>
);

const createTerminal = ({ terminalEndpoint }) => (
  <iframe
    className='w-100 border-0'
    style={{ height: 'calc(100% - .5rem)' }}
    src={terminalEndpoint}
    title='JavaRunnerTerminal'
  ></iframe>
);

const createConsoleElement = ({ status, body }) => {
  if (status === 400)
    return <div className='mt-2'>{body.map(createErrorLog)}</div>;
  if (status === 200) return createTerminal(body);

  return null;
};

function Console(props) {
  const executionResponse = props.executionResponse;
  const iconName = props.minimizedConsole ? 'chevron-up' : 'chevron-down';

  const consoleContent = props.isLoading
    ? createLoaderElement()
    : createConsoleElement(executionResponse);

  return (
    <div className='h-100 position-relative'>
      <ConsoleHeader onClick={props.handleToggle}>
        <div className='col-11 text-white d-flex align-items-center'>
          Console
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
