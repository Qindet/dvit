import React from "react";
import {Route} from 'react-router-dom'
import GreetingPage from "../pages/greeting-page/greeting-page";
import './app.css'

const App = () => {
    return (
        <div>
            <Route path="/" component={GreetingPage}/>
        </div>
    )
}

export default App
