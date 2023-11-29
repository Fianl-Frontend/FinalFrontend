import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './loginPage';
import MainPage from './mainPage';
import SignupPage from './signupPage';
import './login.css';
import reportWebVitals from './reportWebVitals';
// import CalendarPage from './calenderPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route path='/signupPage' element={<SignupPage />} />
            <Route path='/mainPage' element={<MainPage />} />
            {/* <Route path='/mainPage/calenderPage' element={<CalendarPage />} /> */}
        </Routes>
    </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

