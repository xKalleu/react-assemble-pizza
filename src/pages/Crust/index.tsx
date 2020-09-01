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
import { PizzaDispatch, StateTypes } from '../../routes'
import pizzaCrusts from '../../fake-data/pizza-crust'

interface CrustProps {
  stepsDispatch: PizzaDispatch;
  state: StateTypes;
}


const Crust: FunctionComponent<CrustProps> = ({ stepsDispatch, state }) => {
  const [crustValue, setCrustValue] = React.useState(0)

  return (
    <Container>
      <Title>
        Choose your crust
      </Title>

      <Grid>
        {pizzaCrusts.map((pizzaCrust) => (
          <Box key={pizzaCrust.id} onChange={() => { stepsDispatch({ type: 'SET_CRUST', crustStr: pizzaCrust.name }) }}>
            <Input type="radio" value={pizzaCrust.value} name={pizzaCrust.name} onClick={() => setCrustValue(pizzaCrust.value)} />
            <Image>
              <Icon name="pizza" width={100} />
            </Image>
            <Description>
              <Value>
                {pizzaCrust.value}
              </Value>
              {pizzaCrust.name}
            </Description>
          </Box>
        ))}

        <Link to="/toppings" onClick={() => { stepsDispatch({ type: 'SET_VALUE', value: crustValue + state.value! }); }} >Next Page </Link>
      </Grid>

      <Title>
        Valor: {state.value}
      </Title>
    </Container >
  );
};

export default Crust;