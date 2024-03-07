import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Container } from '../Container/Container.styled';
import { Loader } from '../Load/Loader';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


const SharedLayout = () => {
  return (
    <Container>
        <Header/>
      <Suspense fallback={<Loader/>}>
        <main>
          <Outlet />
        </main>
      </Suspense>
      <Footer />
    </Container>
  );
};

export default SharedLayout;
