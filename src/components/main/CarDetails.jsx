import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {cars} from '../../datas/cars'

function CarDetails() {
  const { carId } = useParams();
  const [carData, setCarData] = useState(null);

  useEffect(() => {
    const filteredCar = cars.find((car) => car.id == carId);
    setCarData(filteredCar);
  }, [carId]);

  // Render loading state or display car data
  if (!carData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{carData.name}</h2>
      <p>{carData.price}</p>
      <div>
        <img src={carData.img} /> 
      </div>
      <p>
        {carData.add.year}
      </p>
      <p>
        {carData.add.info}
      </p>
    </div>
  );
}
export default CarDetails;