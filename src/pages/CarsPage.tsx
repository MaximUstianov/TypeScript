import React, {useState} from 'react';
import {CarForm} from "../components/CarForm";
import {CarList} from "../components/CarList";
import {ICar} from "../interfaces";

export const CarsPage: React.FC = () => {
    const [cars, setCars] = useState<ICar[]>([])


    const addHandler = (title: any, year: any) => {
        const newCar: ICar = {
            title: title,
            year: year,
            id: Date.now(),
        }
        /* setCars([newCar, ...cars])*/
        setCars(prev => [newCar, ...cars])
    }


    const onChangeName = (title: any) => {
        const car = { ...cars[title], title };
        console.log(car)
        const cars2 = [...cars]
        console.log(cars2)
    }

    const removeHandler = (id: number) => {
        setCars(prev => prev.filter(car => car.id !== id))
    }
    return (
        <React.Fragment>
            <CarForm
                onAdd={addHandler}
                cars={cars}
            />
            <CarList
                cars={cars}
                onRemove={removeHandler}
                onChange={onChangeName}
                /*  onChangeName={event => onChangeName(event.target.value, id)}*/
            />
        </React.Fragment>
    )
}