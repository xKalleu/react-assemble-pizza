
import React, { FunctionComponent } from 'react'

import { Container } from './styles'
import GlobalStyle from '../../styles/GlobalStyle';
import Header from '../../components/Header';

const Layout: FunctionComponent = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Container>
        {children}
      </Container>
    </>
  );
};

export default Layout;