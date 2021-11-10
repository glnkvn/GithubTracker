import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from './store';
import App from './App.js';

// import './styles/index.css';

let seed= { username: ["glnkvn", "cBrom99"]};

ReactDOM.render(
    <React.StrictMode>
    <Router>
        <Provider store={ store }>
            <App />
        </Provider>
    </Router>
   </React.StrictMode>,
    document.getElementById("root")
);