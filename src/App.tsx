import React from 'react';
import {Navbar} from "./components/Navbar";
import {AboutPage} from "./pages/AboutPage";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {CarsPage} from "./pages/CarsPage";


const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <div className="container">
                <Switch>
                    <Route component={CarsPage} path="/" exact/>
                    <Route component={AboutPage} path="/about"/></Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
