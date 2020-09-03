import React, { FunctionComponent, useEffect, useState } from 'react';

import {
  Box,
  Container,
  Description,
  Grid,
  Image,
  Title,
  Input,
  Button
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
  const [, setExtraCost] = useState(0);
  const [prevValue] = useState(state.value);

  useEffect(() => {
    const dispatchCost = state.toppings.reduce((final: number, _current: string, index: number) => { final += index < 3 ? 0 : 0.5; return final }, 0);
    state.value = dispatchCost + prevValue!;
    setExtraCost(dispatchCost);
  }, [state.toppings, state.value, prevValue]);

  return (
    <Container>
      <Title>
        Choose your toppings
      </Title>

      <Grid>
        {pizzaToppings.map((pizzaTopping) => (
          <Box key={pizzaTopping.id} onChange={() => stepsDispatch({ type: 'TOGGLE_TOPPINGS', toppings: pizzaTopping.name })} >
            <Input
              type="checkbox"
              disabled={!state.toppings.find((item: string) => item === pizzaTopping.name) && state.toppings.length >= state.size[0].maxIngredients}
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
        <Button to="/custom-pizza">Finished</Button>
      </Grid>
    </Container>
  );
};

export default Topping;