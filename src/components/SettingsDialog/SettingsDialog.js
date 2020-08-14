import React from 'react';
import Dialog from '../../shared/Dialog';
import styled from 'styled-components';

const title = 'Settings';

const JdkOption = styled.button.attrs(() => ({
  className: 'px-2 rounded border border-secondary text-white',
}))`
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
  background: ${(props) => (props.active ? '#42ab77' : '#5b6066')};
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

  const jdkOptions = props.availableJdkVersions
    .map((jdk) => ({
      name: jdk,
      active: jdk === activeJavaVersion,
    }))
    .map((jdk, index) =>
      createJdkOption(jdk, index, props.handleVersionChange)
    );

  const content = <div className='p-4'>{jdkOptions}</div>;

  return (
    <Dialog
      minHeight={350}
      minWidth={500}
      handleClose={props.handleClose}
      title={title}
      content={content}
    ></Dialog>
  );
}

export default SettingsDialog;
