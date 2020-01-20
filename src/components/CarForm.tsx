import React, {useState} from "react";
import {ICar} from "../interfaces";


interface CarFormProps {
    onAdd(title: any, year: any): void,
    cars: ICar[]
}


export const CarForm: React.FC<CarFormProps> = props => {

    const [title, setTitle] = useState<any>('')
    const [year, setYear] = useState<any>('')

    const changeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }

    const changeYear = (event: React.ChangeEvent<HTMLInputElement>) => {
        setYear(event.target.value)
    }

    const keyHandler = () => {
        if (!props.cars.some((car: { title: any; }) => car.title === title) && year > 1900 && year <= 2020) {
            props.onAdd(title, year)
            setTitle('')
            setYear('')
        } else {
            alert("wrong data")
        }
    }

    return (
        <div className="input-field mt2">
            <input
                onChange={changeName}
                value={title}
                type="text"
                id="title"
                placeholder="Enter car name"
            />
            <input
                onChange={changeYear}
                value={year}
                type="text"
                id="year"
                placeholder="Enter year"
            />
            <button type="submit" onClick={keyHandler}>Add car</button>
            <label htmlFor="title" className="active">Enter data</label>
        </div>
    )
}