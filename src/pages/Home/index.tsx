import React, { FunctionComponent, useState, useEffect } from 'react';

import {
  Box,
  Button,
  Container,
  Description,
  Grid,
  Image,
  Input,
  Loading,
  Title,
  Value
} from './styles'

import { endpoints } from '../../helpers/endpoints'
import { formatMoney } from '../../assets/lib/utils';
import { PizzaDispatch, IStateTypes } from '../../routes'
import Icon from '../../components/Icon'

interface IHomeProps {
  state: IStateTypes;
  stepsDispatch: PizzaDispatch;
}

interface IPizzaProps {
  id: number;
  maxIngredients: number;
  name: string;
  value: number;
}

const Home: FunctionComponent<IHomeProps> = ({ stepsDispatch }) => {
  const [pizzaSizes, setPizzaSizes] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch(endpoints.getSizes)
        .then(response =>
          response.json().then(result => setPizzaSizes(result))
        )
    }, 500);
  }, [])

  let output = (<Loading>Loading...</Loading>);

  if (pizzaSizes.length > 0) {
    output = (
      <Grid>
        {pizzaSizes.map(({ id, value, name, maxIngredients }: IPizzaProps) => (
          <Box key={id} onChange={() => { stepsDispatch({ type: 'SET_SIZE', sizeId: { id, value, name, maxIngredients } }); stepsDispatch({ type: 'SET_VALUE', value: value }); }} >
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