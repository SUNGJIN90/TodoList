import React from 'react';
import { Container, ContentContainer } from './styles';

const Layout = ({ children}) => {
  return (
    <Container>
      <ContentContainer >{children}</ContentContainer>
    </Container>
  );
};

export default Layout;
