import React from "react";
import {ICar} from "../interfaces";

type CarListProps = {
    cars: ICar[]
    onRemove(id: number): void
    onChange(title: any, id: number): void
}

export const CarList: React.FC<CarListProps> = ({cars, onRemove,onChange}) => {
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
                        <h2>{car.title}</h2>
                        <input type="text" placeholder="change name" onChange={() => onChange(car.title,car.id)} value={car.title}/>
                    </div>
                )
            })}
        </div>
    )
}