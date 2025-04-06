import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx'; 

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Router>
        <App />
    </Router>
);
