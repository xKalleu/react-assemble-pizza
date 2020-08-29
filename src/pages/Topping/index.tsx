import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom'

import {
  Box,
  Container,
  Description,
  Grid,
  Image,
  Title,
} from './styles'

import { PizzaDispatch, StateTypes } from '../../routes'
import pizzaToppings from '../../fake-data/pizza-topping'

const imageIdMapper: { [index: number]: any } = {
  0: require("../../assets/images/pepperoni.jpg"),
  1: require("../../assets/images/mushrooms.jpg"),
  2: require("../../assets/images/onions.png"),
  3: require("../../assets/images/sausages.jpg"),
  4: require("../../assets/images/bacon.jpg"),
  5: require("../../assets/images/extra-chese.jpg"),
  6: require("../../assets/images/black-olives.jpg"),
  7: require("../../assets/images/green-peppers.jpg"),
  8: require("../../assets/images/pineapple.jpg"),
  9: require("../../assets/images/spinach.jpg"),
}

interface CrustProps {
  stepsDispatch: PizzaDispatch;
  state: StateTypes;
}

const Topping: FunctionComponent<CrustProps> = ({ stepsDispatch, state }) => {
  return (
    <Container>
      <Title>
        Choose your crust
      </Title>

      <Grid>
        {pizzaToppings.map((pizzaTopping) => (
          <Box key={pizzaTopping.id} isSelected={pizzaTopping.id === state.crusts} >
            <Link to="/crusts" onClick={() => stepsDispatch({ type: 'SET_CRUST', crustId: pizzaTopping.id })}>
              <Image src={imageIdMapper[pizzaTopping.id]} alt={pizzaTopping.name} >
              </Image>
              <Description>
                {pizzaTopping.name}
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

export default Topping;