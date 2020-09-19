import React from "react";
import {Route} from 'react-router-dom'
import SignUpPage from "./pages/sign-up-page";
import HomePage from "./pages/home-page";
import GreetingPage from "./pages/greeting-page";

const App:React.FC = () => {
    return (
        <div>
            <Route path="/" component={GreetingPage} exact/>
            <Route path="/signup" component={SignUpPage}/>
            <Route path="/home" component={HomePage}/>
        </div>
    )
}

export default App
