import React, { FunctionComponent } from 'react';

import {
  Container
} from './styles'
import { ActionType, CartDispatch, StateTypes } from '../../routes'

interface ToppingProps {
  stepsDispatch: CartDispatch;
  state: StateTypes;
}

const Topping: FunctionComponent<ToppingProps> = ({ stepsDispatch }) => {
  return (
    <Container>
      HI
    </Container>
  );
};

export default Topping;