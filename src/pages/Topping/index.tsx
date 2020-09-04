import React, { FunctionComponent, useEffect, useState } from 'react';

import {
  Box,
  Button,
  Container,
  Description,
  Grid,
  Image,
  Input,
  Loading,
  Title
} from './styles'

import { endpoints } from '../../helpers/endpoints'
import { PizzaDispatch, IStateTypes } from '../../routes'

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

interface IToppingProps {
  stepsDispatch: PizzaDispatch;
  state: IStateTypes;
  onChange?: React.FormEventHandler<HTMLInputElement>;
}

interface IPizzaToppingProps {
  id: number;
  name: string;
}

const Topping: FunctionComponent<IToppingProps> = ({ stepsDispatch, state }) => {
  const [, setExtraCost] = useState(0);
  const [pizzaToppings, setPizzaToppings] = useState([]);
  const [prevValue] = useState(state.value);

  useEffect(() => {
    const dispatchCost = state.toppings.reduce((final: number, _current: string, index: number) => { final += index < 3 ? 0 : 0.5; return final }, 0);
    state.value = dispatchCost + prevValue!;
    setExtraCost(dispatchCost);
  }, [state.toppings, state.value, prevValue]);

  useEffect(() => {
    setTimeout(() => {
      fetch(endpoints.getToppings)
        .then(response =>
          response.json().then(result => setPizzaToppings(result))
        )
    }, 500);
  }, []);

  let output = (<Loading>Loading...</Loading>);

  if (pizzaToppings.length > 0) {
    output = (
      <Grid>
        {pizzaToppings.map(({ id, name, }: IPizzaToppingProps) => (
          <Box key={id} onChange={() => stepsDispatch({ type: 'TOGGLE_TOPPINGS', toppings: name })} >
            <Input
              type="checkbox"
              disabled={!state.toppings.find((item: string) => item === name) && state.toppings.length >= state.size[0].maxIngredients}
              value={name}
              name={name}
            />
            <Image src={imageIdMapper[id]} alt={name} >
            </Image>
            <Description>
              {name}
            </Description>
          </Box>
        ))}
        <Button to="/custom-pizza">Finished</Button>
      </Grid>
    );
  }

  return (
    <Container>
      <Title>
        Choose your toppings
      </Title>
      {output}
    </Container>
  );
};

export default Topping;