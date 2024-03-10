import { useSelector } from "react-redux";
import { selectFavoriteCars } from "../../redux/cars_selectors";

import CarsCard from "../../components/CardItem/CardItem";

import { FavoriteList, Section } from "./FavoritePage.styled";
import FavoriteEmptyPage from "../../components/FavoriteEmptyPage/FavoriteEmptyPage";

const FavoritesPage = () => {
  const favoriteCars = useSelector(selectFavoriteCars);

  return (
    <Section>
        {favoriteCars?.length > 0 ? (
          <FavoriteList>
            {favoriteCars?.map((car, index) => (
              <CarsCard car={car} key={car.id} index={index} />
            ))}
          </FavoriteList>
        ) : (
          <FavoriteEmptyPage/>      
        )}
    </Section>
  );
};

export default FavoritesPage;
