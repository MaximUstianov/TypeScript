import React, {useState} from "react";

interface CarFormProps {
    onAdd(title: string): void
}

export const CarForm: React.FC<CarFormProps> = props => {

    const [title, setTitle] = useState<string>('')



    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }
    const keyHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            props.onAdd(title)
            setTitle('')
        }
    }

    return (
        <div className="input-field mt2">
            <input onKeyPress={keyHandler} onChange={changeHandler} value={title} type="text" id="title"
                   placeholder="Введите название машины"/>
            <label htmlFor="title" className="active">Введите название машины</label>
        </div>
    )
}