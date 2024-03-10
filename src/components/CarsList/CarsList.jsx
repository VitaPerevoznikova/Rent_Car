import { useSelector } from "react-redux"

import { selectCars } from "../../redux/cars_selectors";

import CardItem from "../CardItem/CardItem";
import { ListCars } from "./CarsList.styled";

const CarsList = () => {
const allCars = useSelector(selectCars);

  return (
    <div>
        <ListCars>
            {allCars.map((car, index) => (
             <CardItem car={car} key={`${car.id}-${index}`}/>  
            ))}
        </ListCars>
    </div>
  )
}

export default CarsList;