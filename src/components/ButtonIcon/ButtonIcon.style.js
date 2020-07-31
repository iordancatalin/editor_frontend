import styled, { css } from 'styled-components';

const BasicButton = styled.button.attrs(() => ({
  className:
    'code-font text-center text-truncate d-flex justify-content-center align-items-center',
}))`
  border: 0;
  color: #e2e2e2;
  transition: color 0.3s ease-out, width 0.4s;
  border-radius: 30px !important;

  ${(props) =>
    props.animation &&
    css`
      & .text-container {
        position: absolute;
        width: 0px;
        height: 0px;
        overflow: hidden;
        transition: width 0.4s;
      }

      &:hover {
        color: #fff;
        width: 145px;

        & .text-container {
          position: relative;
          width: auto;
          height: auto;
        }
      }
    `}
  &:focus {
    outline: none !important;
  }
`;

export const PrimaryButton = styled(BasicButton)`
  height: 60px;
  width: 60px;

  background-color: #42ab77;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  ${(props) =>
    props.animation &&
    css`
      &:hover .text-container {
        font-size: 1.2rem;
      }
    `}
`;

export const SecondaryButton = styled(BasicButton)`
  height: 40px;
  width: 40px;
  background-color: rgba(177, 177, 177, 0.27);

  ${(props) =>
    props.animation &&
    css`
      &:hover .text-container {
        font-size: 1rem;
      }
    `}
`;

export const DefaultButton = styled(BasicButton)`
  height: 40px;
  width: 40px;
  background-color: #ffa500;
`;
