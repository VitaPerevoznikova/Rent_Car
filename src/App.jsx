import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';

const Home = lazy(() => import('pages/HomePage/HomePage.jsx'));
const Catalog = lazy(() => import('pages/CatalogPage/CatalogPage.jsx'));
const Favorites = lazy(() => import('pages/FavoritesPage/FavoritesPage.jsx'));


// const test = import.meta.env.VITE_API_TEST;
//   console.log(test);

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>

  );
}
export default App;
