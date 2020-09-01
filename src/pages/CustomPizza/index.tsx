import React, { FunctionComponent } from 'react';

import {
  Container,
  Title,
  Description,
  Value
} from './styles'

import { StateTypes } from '../../routes'

interface CustomProps {
  state: StateTypes;
}

const CustomPizza: FunctionComponent<CustomProps> = ({ state }) => {
  const { name } = state.size[0]
  const amount = state.value?.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

  return (
    <Container>
      <Title>
        Your order is complete
      </Title>

      <Description>
        <Value>
          Size: {name}
        </Value>
        <Value>
          Crust: {state.crusts}
        </Value>
        <Value>
          Amount: $ {amount}
        </Value>

      </Description>
    </Container >
  );
};

export default CustomPizza;