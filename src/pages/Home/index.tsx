import React from 'react';

import {
  Container,
  Grid,
  Title,
  Box,
  Image,
  Description
} from './styles'

import Icon from '../../components/Icon'

const Home: React.FC = () => {
  return (
    <Container>
      <Title>
        hello, how's your order today?
      </Title>

      <Grid>
        <Box>
          <Image>
            <Icon name="pizza" width={25} />
          </Image>
          <Description>
            Pizza 1
          </Description>
        </Box>
        <Box>
          <Image>

          </Image>
          <Description>
            Pizza 1
          </Description>
        </Box>
        <Box>
          <Image>

          </Image>
          <Description>
            Pizza 1
          </Description>
        </Box>
      </Grid>
    </Container>
  );
};

export default Home;