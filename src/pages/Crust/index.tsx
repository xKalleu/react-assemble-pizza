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
import { CartDispatch, StateTypes } from '../../routes'
import pizzaCrusts from '../../fake-data/pizza-crust'

interface CrustProps {
  stepsDispatch: CartDispatch;
  state: StateTypes;
}


const Crust: FunctionComponent<CrustProps> = ({ stepsDispatch, state }) => {
  return (
    <Container>
      <Title>
        Choose your crust
      </Title>

      <Grid>
        {pizzaCrusts.map((pizzaCrust) => (
          <Box key={pizzaCrust.id} isSelected={pizzaCrust.id === state.crusts} >
            <Link to="/crusts" onClick={() => stepsDispatch({ type: 'SET_CRUST', crustId: pizzaCrust.id })}>
              <Image>
                <Icon name="pizza" width={100} />
              </Image>
              <Description>
                <Value>
                  {state.crusts}
                  {pizzaCrust.value}
                </Value>
                {pizzaCrust.name}
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

export default Crust;