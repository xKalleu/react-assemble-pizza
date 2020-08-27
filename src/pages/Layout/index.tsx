
import React from 'react'
import { Container } from './styles'

import GlobalStyle from '../../styles/GlobalStyle';
import Header from '../../components/Header';

const Layout: React.FC = ({ children }) => {
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