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
        <ul>
            {cars.map(car => {
                const classes = ['todo']

                return (
                    <li className={classes.join(' ')} key={car.id}>
                        <label>
                            <input type="checkbox"/>
                            <span>{car.title}</span>
                            <i className="material-icons red-text" onClick={() => onRemove(car.id)}>delete</i>
                        </label>
                    </li>
                )
            })}

        </ul>
    )
}