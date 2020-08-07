import styled from 'styled-components';

export const LogComponent = styled.pre.attrs((props) => ({
  className: props.className,
}))`
  font-size: 100%;
`;

export const ConsoleHeader = styled.div.attrs(() => ({
  className:
    'main-font row m-0 cursor-pointer p-2 position-sticky background-primary',
}))`
  left: 0;
  top: 0;
  font-size: 14px;
`;
