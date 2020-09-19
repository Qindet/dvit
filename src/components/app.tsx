import React from "react";
import {Route} from 'react-router-dom'
import SignUpPage from "./pages/sign-up-page";
import GreetingPageContainer from "../containers/greeting-page-container";
import HomePage from "./pages/home-page";

const App:React.FC = () => {
    return (
        <div>
            <Route path="/" component={GreetingPageContainer} exact/>
            <Route path="/signup" component={SignUpPage}/>
            <Route path="/home" component={HomePage}/>
        </div>
    )
}

export default App
