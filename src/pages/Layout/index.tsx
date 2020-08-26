
import React from 'react'
import { Outlet } from 'react-router-dom'
import { Container } from './styles'

import GlobalStyle from '../../styles/GlobalStyle';
import Header from '../../components/Header';

const Layout: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;