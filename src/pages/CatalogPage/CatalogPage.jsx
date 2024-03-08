import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Loader } from '../../components/Load/Loader';
import CarsList from '../../components/CarsList/CarsList';
import { fetchCars } from '../../redux/cars_operation';
import { LoadMoreBtn } from './CatalogPage.style';
import { selectCars, selectIsLoading } from '../../redux/cars_selectors';

const Cars = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [limit] = useState(12);
  const isLoading = useSelector(selectIsLoading);
  const cars = useSelector(selectCars);

  useEffect(() => {
    if (page === 0) {
      setPage(1);
    }
    dispatch(fetchCars({ page, limit }));
  }, [dispatch, limit, page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const totalCars = cars.length;

  return (
    <section>
      {isLoading && <Loader />}
      <CarsList />
      {totalCars >= page * limit && (
        <LoadMoreBtn type="button" onClick={handleLoadMore}>
          Load more
        </LoadMoreBtn>
      )}
    </section>
  );
};

export default Cars;
