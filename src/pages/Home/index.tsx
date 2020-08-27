import React, { Dispatch } from 'react';
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
import { ActionType } from '../../routes'


const Home = ({ stepsDispatch: Dispatch<any> }) => {
  return (
    <Container>
      <Title>
        hello, how's your order today?
      </Title>

      <Grid>
        {pizzaSizes.map((pizza) => (
          <Box key={pizza.id}>
            <div onClick={() => stepsDispatch({ type: 'SET_SIZE', payload: pizza.id })}>
              <Image>
                <Icon name="pizza" width={100} />
              </Image>
              <Description>
                <Value>
                  {pizza.size}
                </Value>
                {pizza.name}
              </Description>
            </div>
          </Box>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;