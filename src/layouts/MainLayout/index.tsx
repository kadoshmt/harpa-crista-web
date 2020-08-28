import React from 'react';
import { Helmet } from 'react-helmet';
import { Container, Wrapper } from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

interface Props {
  metaTitle?: string;
  menuItem?: 'home' | 'hinos' | 'biblia' | undefined;
}

const MainLayout: React.FC<Props> = ({ menuItem, metaTitle, children }) => {
  return (
    <Wrapper>
      <Helmet>
        <title>{metaTitle}</title>
      </Helmet>
      <Header menuItem={menuItem} />
      <Container>{children}</Container>
      <Footer />
    </Wrapper>
  );
};

export default MainLayout;
