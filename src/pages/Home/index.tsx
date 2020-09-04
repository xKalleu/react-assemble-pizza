import React, { FunctionComponent, useState, useEffect } from 'react';

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
import { endpoints } from '../../helpers/endpoints'

interface HomeProps {
  stepsDispatch: PizzaDispatch;
  state: StateTypes;
}

interface PizzaProps {
  [x: string]: number;
  id: number;
  maxIngredients: number;
  value: number;
}

const Home: FunctionComponent<HomeProps> = ({ stepsDispatch }) => {
  const [pizzaSizes, setPizzaSizes] = useState([]);


  useEffect(() => {
    setTimeout(() => {
      fetch(endpoints.getSizes)
        .then(response =>
          response.json().then(result => setPizzaSizes(result))
        )
    }, 3000);
  }, [])

  let output = (<h2 style={{ color: 'green' }}>Loading...</h2>);

  if (pizzaSizes.length > 0) {
    output = (
      <Grid>
        {pizzaSizes.map(({ id, value, name, maxIngredients }: PizzaProps) => (
          <Box key={id} onChange={() => { stepsDispatch({ type: 'SET_SIZE', sizeId: id }); stepsDispatch({ type: 'SET_VALUE', value: value }); }} >
            <Input type="radio" value="pizza" name="pizza select" />
            <Image>
              <Icon name="pizza" width={100} />
            </Image>
            <Description>
              <Value>
                $ {formatMoney(value)}
              </Value>
              <Value>
                {name}
              </Value>
              <Value>
                Max. Ingredients: {maxIngredients}
              </Value>
            </Description>
          </Box>
        )
        )}

        <Button to="/crusts">Continue</Button>
      </Grid>
    );
  }

  return (
    <Container>
      <Title>
        hello, how's your order today?
      </Title>
      {output}
    </Container >
  );
};

export default Home;