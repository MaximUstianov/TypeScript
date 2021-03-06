import React from "react";
import {ICar} from "../interfaces";

type CarListProps = {
    cars: ICar[]
    onRemove(id: number): void
}

export const CarList: React.FC<CarListProps> = ({cars, onRemove}) => {
    if (cars.length === 0) {
        return <p className="center">No cars...</p>
    }
    return (
        <div className="mainCar">
            {cars.map(car => {
                const classes = ['car']
                return (
                    <div className={classes.join(' ')} key={car.id}>
                        <i className="material-icons red-text" onClick={() => onRemove(car.id)}>delete</i>
                        <h3>Car name : {car.title}</h3>
                        <h3>Year : <strong>{car.year}</strong></h3>
                    </div>
                )
            })}
        </div>
    )
}