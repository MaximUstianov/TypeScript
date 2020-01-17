import React from "react";
import {useHistory} from 'react-router-dom'

export const AboutPage: React.FC = () => {
    const history = useHistory()
    return (
        <>
            <h1>Страница о нас</h1>
            <button
                className="btn"
                onClick={() => history.push('/')}
            >
                Обратно к списку машин
            </button>
        </>
    )
}