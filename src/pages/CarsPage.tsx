import React, {useState} from 'react';
import {CarForm} from "../components/CarForm";
import {CarList} from "../components/CarList";
import {ICar} from "../interfaces";

export const CarsPage: React.FC = () => {
    const [cars, setCars] = useState<ICar[]>([])

    const addHandler = (title: string) => {
        const newCar: ICar = {
            title: title,
            id: Date.now(),
            completed: false,
        }
        /* setCars([newCar, ...cars])*/
        setCars(prev => [newCar, ...cars])
    }

    /*  const onChangeName = (title: string, index: number) => {
          const car = cars[index]
          car.title = title
          const changedCar = [...cars]
          changedCar[index] = car
          setCars(changedCar)
      }*/

    const removeHandler = (id: number) => {
        setCars(prev => prev.filter(car => car.id !== id))
    }
    return (
<React.Fragment>
    <CarForm
        onAdd={addHandler}
    />
    <CarList
        cars={cars}
        onRemove={removeHandler}
    />
</React.Fragment>
    )
}