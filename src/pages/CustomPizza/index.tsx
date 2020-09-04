import React, { FunctionComponent } from 'react';

import {
  Container,
  Description,
  Title,
  Value
} from './styles'

import { formatMoney } from '../../assets/lib/utils';
import { IStateTypes } from '../../routes'

interface CustomProps {
  state: IStateTypes;
}

const CustomPizza: FunctionComponent<CustomProps> = ({ state }) => {
  const { name } = state.size[0]

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
          Toppings:
        </Value>
        {state.toppings.map((topping: React.ReactNode) => (
          <Value>
            {topping}
          </Value>
        ))}
        <Value>
          Amount: $ {formatMoney(state.value!)}
        </Value>

      </Description>
    </Container >
  );
};

export default CustomPizza;