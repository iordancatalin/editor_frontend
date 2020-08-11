import styled, { css } from 'styled-components';
import {
  MINIMIZED_CONSOLE_HEIGHT,
  MAXIMIZED_CONSOLE_HEIGHT,
} from './util/constants';

const Container = styled.div`
  transition-duration: 0.4s;
  transition-timing-function: ease-out;
`;

export const ConsoleContainer = styled(Container).attrs(() => ({
  className: 'main-font container-fluid p-0 background-primary',
}))`

  ${(props) => {
    const consoleHeight = props.minimizedConsole
      ? MINIMIZED_CONSOLE_HEIGHT
      : MAXIMIZED_CONSOLE_HEIGHT;

    return css`
      height: ${consoleHeight}px;
    `;
  }}

  overflow: ${(props) => (props.minimizedConsole ? 'hidden' : 'auto')};
  border-top: 1px solid #94989C;

  &::-webkit-scrollbar-thumb {
    display: none;
  }

  &:hover {
    ::-webkit-scrollbar-thumb {
      display: block;
    } 
  }
`;

export const JavaEditorContainer = styled(Container)`
  ${(props) => {
    const consoleHeight = props.minimizedConsole
      ? MINIMIZED_CONSOLE_HEIGHT
      : MAXIMIZED_CONSOLE_HEIGHT;

    return css`
      height: calc(100% - ${consoleHeight}px);
    `;
  }}

  overflow: hidden;
`;

export const ButtonsPanel = styled.div.attrs(() => ({
  className: 'position-fixed p-2 d-flex align-items-end flex-column',
}))`
  right: 30px;
  top: 0;
`;
