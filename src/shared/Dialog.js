import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DialogContainer = styled.div.attrs((prosp) => ({
  className:
    'd-flex justify-content-center align-items-center background-secondary',
}))`
  height: 100vh;
  width: 100vw;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 20;
  background: rgba(0, 0, 0, 0.4);
`;

function Dialog(props) {
  const minHeight = props.minHeight || 400;
  const maxHeight = props.maxHeight || 600;
  const minWidth = props.minWidth || 600;
  const maxWidth = props.maxWidth || 800;
  const title = props.title || 'No title';
  const content = props.content || (
    <h1 className='text-center text-danger'>No content for this dialog</h1>
  );

  return (
    <DialogContainer>
      <div
        style={{ minHeight, maxHeight, minWidth, maxWidth }}
        className='bg-dark p-1 rounded'
      >
        <div className='row m-0 p-2 border-bottom border-secondary'>
          <div className='col-10 d-flex align-items-center text-white main-font'>
            {title}
          </div>
          <div className='col-2 d-flex justify-content-end'>
            <button
              onClick={() => props.handleClose()}
              className='btn text-white'
            >
              <FontAwesomeIcon icon='times'></FontAwesomeIcon>
            </button>
          </div>
        </div>

        <div>{content}</div>
      </div>
    </DialogContainer>
  );
}

export default Dialog;
