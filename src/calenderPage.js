import React from 'react';
import GlobalStyle from './calFolder/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import Theme from './calFolder/styles/Theme';
import Main from './calFolder/Main';

import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';

const CalendarPage = () => {

    return (
    <div className="content">
        <div id="calendar">
            <ThemeProvider theme={Theme}>
                <GlobalStyle />
                <Main />
            </ThemeProvider>
        </div>
    </div>);
};

export default CalendarPage;
