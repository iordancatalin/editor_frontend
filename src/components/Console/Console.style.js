import styled from 'styled-components';

export const ErrorLogComponent = styled.pre.attrs((props) => ({
  className: 'text-danger',
}))`
  font-size: 100%;
  margin-bottom: 3px;
`;

export const ConsoleHeader = styled.div.attrs(() => ({
  className:
    'main-font row m-0 cursor-pointer p-2 position-sticky background-primary',
}))`
  left: 0;
  top: 0;
  font-size: 14px;
  height: 35px;
`;
