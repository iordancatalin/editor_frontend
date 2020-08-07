import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {
  DefaultButton, PrimaryButton,
  SecondaryButton
} from './ButtonIcon.style';

const BUTTON_TYPES = [
  {
    type: 'primary',
    instance: PrimaryButton,
  },
  {
    type: 'secondary',
    instance: SecondaryButton,
  },
];

const findButtonByType = type => {
  const index = BUTTON_TYPES.findIndex((button) => button.type === type);
  return index === -1 ? DefaultButton : BUTTON_TYPES[index].instance;
}

function ButtonIcon(props) {
  const ButtonAction = findButtonByType(props.type);

  const textElement = props.text && (
    <div className='ml-3 text-container d-inline-block'>{props.text}</div>
  );

  return (
    <div className={props.className}>
      <ButtonAction onClick={props.handleClick} animation={props.text}>
        <FontAwesomeIcon icon={props.fontAwesomeIcon}></FontAwesomeIcon>
        {textElement}
      </ButtonAction>
    </div>
  );
}

export default ButtonIcon;
