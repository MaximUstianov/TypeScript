import React, {useState} from 'react';
import {Navbar} from "./components/Navbar";
import {CarForm} from "./components/CarForm";
import {CarList} from "./components/CarList";
import {ICar} from "./interfaces";


const App: React.FC = () => {

    const [cars, setCars] = useState<ICar[]>([])

    const addHandler = (title: string) => {
        const newCar: ICar = {
            title: title,
            id: Date.now(),
            completed: false
        }
        /* setCars([newCar, ...cars])*/
        setCars(prev => [newCar, ...cars])
    }
    const removeHandler = (id: number) => {
        setCars(prev => prev.filter(car => car.id !== id))
    }
    return (
        <>
            <Navbar/>
            <div className="container">
                <CarForm onAdd={addHandler}/>
                <CarList
                    cars={cars}
                    onRemove={removeHandler}
                />
            </div>
        </>
    );
}

export default App;
