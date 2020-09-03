import React, { FunctionComponent, useState } from 'react';

import {
  Box,
  Button,
  Container,
  Description,
  Grid,
  Image,
  Input,
  Title,
  Value
} from './styles'

import { formatMoney } from '../../assets/lib/utils';
import { PizzaDispatch, StateTypes } from '../../routes'
import Icon from '../../components/Icon'
import pizzaCrusts from '../../fake-data/pizza-crust'

interface CrustProps {
  stepsDispatch: PizzaDispatch;
  state: StateTypes;
}

const Crust: FunctionComponent<CrustProps> = ({ stepsDispatch, state }) => {
  const [crustValue, setCrustValue] = useState(0)

  return (
    <Container>
      <Title>
        Choose your crust
      </Title>

      <Grid>
        {pizzaCrusts.map((pizzaCrust) => (
          <Box key={pizzaCrust.id} onChange={() => { stepsDispatch({ type: 'SET_CRUST', crustStr: pizzaCrust.name }) }}>
            <Input type="radio" value="pizza" name="pizza select" onClick={() => setCrustValue(pizzaCrust.value)} />
            <Image>
              <Icon name="pizza" width={100} />
            </Image>
            <Description>
              <Value>
                $ {formatMoney(pizzaCrust.value)}
              </Value>
              {pizzaCrust.name}
            </Description>
          </Box>
        ))}

        <Button to="/toppings" onClick={() => { stepsDispatch({ type: 'SET_VALUE', value: crustValue + state.value! }); }} >Continue</Button>
      </Grid>
    </Container >
  );
};

export default Crust;