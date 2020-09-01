import React, { FunctionComponent, useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import {
  Box,
  Container,
  Description,
  Grid,
  Image,
  Title,
  Input
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
  onChange?: React.FormEventHandler<HTMLInputElement>;
}

const Topping: FunctionComponent<CrustProps> = ({ stepsDispatch, state }) => {
  useEffect(() => {
    if (state.toppings.length > 3) {
      state.value = state.value! + 0.5
    }
  });

  return (
    <Container>
      <Title>
        Choose your crust
      </Title>

      <Grid>
        {pizzaToppings.map((pizzaTopping) => (
          <Box key={pizzaTopping.id} isSelected={pizzaTopping.id === pizzaTopping.id} onChange={() => stepsDispatch({ type: 'TOGGLE_TOPPINGS', toppings: pizzaTopping.name })} >
            <Input
              type="checkbox"
              value={pizzaTopping.name}
              name={pizzaTopping.name}
            />
            <Image src={imageIdMapper[pizzaTopping.id]} alt={pizzaTopping.name} >
            </Image>
            <Description>
              {pizzaTopping.name}
            </Description>
          </Box>
        ))}
        <Link to="/custom-pizza"> Next Page</Link>
      </Grid>

      <Title>
        Valor: {state.value}
      </Title>
    </Container>
  );
};

export default Topping;