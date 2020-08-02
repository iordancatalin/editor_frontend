import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

function Console(props) {
  const iconName = props.minimizedConsole ? 'chevron-up' : 'chevron-down';
  const infoStyle = { color: '#B2B2B2' };

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
        <br />
        <br />
        <pre style={{ fontSize: '100%', color: '#fff' }}>
          Matrix is:
          <br />
          <br />
          1 2 3 4 5
          <br />
          6 7 8 9 0
          <br />
          0 9 8 7 6
          <br />
          5 4 3 2 1
          <br />
          1 2 3 4 5
          <br />
        </pre>
      </div>
    </div>
  );
}

const ConsoleHeader = styled.div.attrs(() => ({
  className: 'main-font row m-0 cursor-pointer p-2 position-sticky background-primary',
}))`
  left: 0;
  top: 0;
  font-size: 14px;

  /* &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  } */
`;

export default Console;
