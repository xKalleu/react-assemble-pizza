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

interface ICrustProps {
  stepsDispatch: PizzaDispatch;
  state: IStateTypes;
}

interface PizzaICrustProps {
  id: number;
  maxIngredients: number;
  name: string;
  value: number;
}

const Crust: FunctionComponent<ICrustProps> = ({ stepsDispatch, state }) => {
  const [crustValue, setCrustValue] = useState(0)
  const [pizzaCrusts, setPizzaCrusts] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch(endpoints.getCrusts)
        .then(response =>
          response.json().then(result => setPizzaCrusts(result))
        )
    }, 500);
  }, [])

  let output = (<Loading>Loading...</Loading>);

  if (pizzaCrusts.length > 0) {
    output = (
      <Grid>
        {
          pizzaCrusts.map(({ id, name, value }: PizzaICrustProps) => (
            <Box key={id} onChange={() => { stepsDispatch({ type: 'SET_CRUST', crustStr: name }) }}>
              <Input type="radio" value="pizza" name="pizza select" onClick={() => setCrustValue(value)} />
              <Image>
                <Icon name="pizza" width={100} />
              </Image>
              <Description>
                <Value>
                  $ {formatMoney(value)}
                </Value>
                {name}
              </Description>
            </Box>
          ))
        }

        < Button to="/toppings" onClick={() => { stepsDispatch({ type: 'SET_VALUE', value: crustValue + state.value! }); }} > Continue</Button >
      </Grid>
    );
  }

  return (
    <Container>
      <Title>
        Choose your crust
      </Title>
      {output}
    </Container >
  );
};

export default Crust;