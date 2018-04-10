// @flow
import React from 'react';
import styled from 'styled-components';

type Props = {
  type: string,
  onClick: Function,
  text: string,
  variant: string
};

const defaultProps = {
  type: 'button',
  onClick: () => null,
  text: 'Button',
  variant: 'default'
};

const ButtonWrap = styled.button`
  border-radius: 4px;
  padding: 7px 15px;
  border: none;
  background: ${(props: Props) => props.variant};
  color: ${(props: Props) => color[props.variant]}
  &:focus {
    outline: none;
  }
`;

const color = (model: string) => {
  const colors = {
    primary: "#ffffff",
    default: "#141414"
  };
  return colors[model];
};

const model = (variant: string) => {
  const models = {
    primary: "#698fed",
    default: "#ffffff"
  };
  return models[variant];
};

/**
 * Stateless component example
 */
export default function Button({type, onClick, variant, text}: Props = defaultProps) {
  return (
    <ButtonWrap type={type} onClick={onClick} model={model(variant)}>
      {text}
    </ButtonWrap>
  );
}