import styled from 'styled-components';

export const ConsoleHeader = styled.div.attrs(() => ({
  className:
    'main-font row m-0 cursor-pointer p-2 position-sticky background-primary',
}))`
  left: 0;
  top: 0;
  font-size: 14px;
  height: 35px;
`;

export const Terminal = styled.iframe.attrs(() => ({
  className: 'w-100 border-0',
}))`
  height: calc(100% - 0.5rem);
`;
