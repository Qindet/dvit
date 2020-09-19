import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import App from './components/app';
import {ThemeProvider} from "@material-ui/core/styles";
import {theme} from './theme'



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);