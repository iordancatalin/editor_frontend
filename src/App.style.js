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
  className: 'main-font container-fluid p-0 background-secondary',
}))`

  ${(props) => {
    const consoleHeight = props.minimizedConsole
      ? MINIMIZED_CONSOLE_HEIGHT
      : MAXIMIZED_CONSOLE_HEIGHT;

    return css`
      min-height: ${consoleHeight}px;
      max-height: ${consoleHeight}px;
    `;
  }}

  overflow: ${(props) => (props.minimizedConsole ? 'hidden' : 'auto')};
  border-top: 2px solid #59819c;
`;

export const EditorContainer = styled(Container).attrs(() => ({
  className: 'background-primary container-fluid p-0',
}))`
  ${(props) => {
    const consoleHeight = props.minimizedConsole
      ? MINIMIZED_CONSOLE_HEIGHT
      : MAXIMIZED_CONSOLE_HEIGHT;

    return css`
      min-height: calc(100% - ${consoleHeight}px);
      max-height: calc(100% - ${consoleHeight}px);
    `;
  }}

  overflow: auto;
`;

export const ButtonsPanel = styled.div.attrs(() => ({
  className: 'position-fixed p-2 d-flex align-items-end flex-column',
}))`
  right: 30px;
  top: 0;
`;
