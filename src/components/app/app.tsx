import React from "react";
import {Route} from 'react-router-dom'
import './app.css'
import SignUpPage from "../pages/sign-up-page";
import GreetingPageContainer from "../../container/greeting-page-container";

const App:React.FC = () => {
    return (
        <div>
            <Route path="/" component={GreetingPageContainer} exact/>
            <Route path="/signup" component={SignUpPage}/>
        </div>
    )
}

export default App
