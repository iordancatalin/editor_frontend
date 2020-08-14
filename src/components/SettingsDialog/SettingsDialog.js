import React from 'react';
import Dialog from '../../shared/Dialog';
import styled from 'styled-components';

const title = 'Settings';

const JdkOption = styled.button.attrs(() => ({
  className: 'py-2 px-2 rounded border border-white text-white',
}))`
  background: ${(props) => (props.active ? '#1771C3' : 'transparent')};
  outline: none;

  &:focus {
    outline: none;
  }
`;

const createJdkOption = (jdkOption, index, handleVersionChange) => {
  return (
    <div key={index} className='mr-3 d-inline-block'>
      <JdkOption
        active={jdkOption.active}
        onClick={() => handleVersionChange(index)}
      >
        {jdkOption.name}
      </JdkOption>
    </div>
  );
};

function SettingsDialog(props) {
  const activeJavaVersion = props.activeJdkVersion;

  const jdkOptions = props.availableJdkVersions.map((jdk) => ({
      name: jdk,
      active: jdk === activeJavaVersion,
    }))
    .map((jdk, index) =>
      createJdkOption(jdk, index, props.handleVersionChange)
    );

  const content = <div className='p-4'>{jdkOptions}</div>;

  return <Dialog handleClose={props.handleClose} title={title} content={content}></Dialog>;
}

export default SettingsDialog;
