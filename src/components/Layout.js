import React, {Component} from 'react';
import styled from 'styled-components';

/**
 * Styled components example
 */
const H1 = styled.h1`
  font-weight: bold;
  font-size: 24px;
  text-transform: uppercase;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

/**
 * Class based component example
 */
export default class Layout extends Component {
  render() {
    return (
      <H1>Kosongan</H1>
    );
  }
}