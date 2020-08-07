import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LogComponent, ConsoleHeader } from './Console.style';

const createLogElement = (log, index) => {
  const className = log.level === 'ERROR' ? 'text-danger' : 'text-white';

  return (
    <div key={index}>
      <LogComponent className={className}>{log.message}</LogComponent>
    </div>
  );
};

function Console(props) {
  const iconName = props.minimizedConsole ? 'chevron-up' : 'chevron-down';
  const infoStyle = { color: '#B2B2B2' };
  const logElements = props.logs.map(createLogElement);

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

      <div className='py-2 px-4 code-font'>
        <span style={infoStyle}>
          2020-07-30 19:22:55 [INFO] Running Java version: openjdk-11.0.6_10
        </span>
        <div className='mt-2'>{logElements}</div>
      </div>
    </div>
  );
}

export default Console;