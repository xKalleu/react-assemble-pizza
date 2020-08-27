import React from 'react';

import {
  Container
} from './styles'

interface location {
  id?: number;
  name?: string;
  size?: number;
  flavours?: number;
}

const Crust: React.FC = () => {
  return (
    <Container>
      HI
    </Container>
  );
};

export default Crust;