import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom'

import {
  Container,
  Grid,
  Title,
  Box,
  Image,
  Description,
  Value
} from './styles'

import Icon from '../../components/Icon'
import pizzaSizes from '../../fake-data/pizza-sizes'
import { CartDispatch, StateTypes } from '../../routes'

interface HomeProps {
  stepsDispatch: CartDispatch;
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
          <Box key={pizzaSize.id} isSelected={pizzaSize.id === state.size} >
            <Link to="/crusts" onClick={() => stepsDispatch({ type: 'SET_SIZE', sizeId: pizzaSize.id })}>
              <Image>
                <Icon name="pizza" width={100} />
              </Image>
              <Description>
                <Value>
                  {pizzaSize.size}
                </Value>
                {pizzaSize.name}
              </Description>
            </Link>
          </Box>
        ))}
      </Grid>

      <Title>
        Valor: {state.value}
      </Title>
    </Container>
  );
};

export default Home;