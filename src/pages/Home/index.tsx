import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom'

import {
  Container,
  Grid,
  Title,
  Box,
  Image,
  Description,
  Value,
  Input
} from './styles'

import Icon from '../../components/Icon'
import pizzaSizes from '../../fake-data/pizza-sizes'
import { PizzaDispatch, StateTypes } from '../../routes'

interface HomeProps {
  stepsDispatch: PizzaDispatch;
  state: StateTypes;
}

const Home: FunctionComponent<HomeProps> = ({ stepsDispatch, state }) => {
  return (
    <Container>
      <Title>
        hello, how's your order today?
      </Title>

      <Grid>
        {pizzaSizes.map((pizzaSize) => (
          <Box key={pizzaSize.id} isSelected={pizzaSize.id === state.size} onChange={() => { stepsDispatch({ type: 'SET_SIZE', sizeId: pizzaSize }); stepsDispatch({ type: 'SET_VALUE', value: pizzaSize.value }); }} >
            <Input type="radio" value="MALE" name="gender" />
            <Image>
              <Icon name="pizza" width={100} />
            </Image>
            <Description>
              <Value>
                {pizzaSize.value}
              </Value>
              {pizzaSize.name}
            </Description>
          </Box>
        ))}
        <Link to="/crusts">Next Page</Link>
      </Grid>

      <Title>
        Valor: {state.value}
      </Title>
    </Container >
  );
};

export default Home;