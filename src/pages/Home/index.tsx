import React, { FunctionComponent } from 'react';

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
import pizzaSizes from '../../fake-data/pizza-sizes'

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
          <Box key={pizzaSize.id} onChange={() => { stepsDispatch({ type: 'SET_SIZE', sizeId: pizzaSize }); stepsDispatch({ type: 'SET_VALUE', value: pizzaSize.value }); }} >
            <Input type="radio" value="pizza" name="pizza select" />
            <Image>
              <Icon name="pizza" width={100} />
            </Image>
            <Description>
              <Value>
                $ {formatMoney(pizzaSize.value)}
              </Value>
              <Value>
                {pizzaSize.name}
              </Value>
              <Value>
                Max. Ingredients: {pizzaSize.maxIngredients}
              </Value>
            </Description>
          </Box>
        ))}

        <Button to="/crusts">Continue</Button>
      </Grid>
    </Container >
  );
};

export default Home;