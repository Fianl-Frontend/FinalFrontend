import React, { useState, useEffect } from 'react';
import Calender from './calender';
import './login.css';

const CalendarPage = () => {
    const [date, setDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);

    useEffect(() => {
        renderCalendar();
    }, [date]);

    const renderCalendar = () => {
        const viewYear = date.getFullYear();
        const viewMonth = date.getMonth();

        document.querySelector('.year').textContent = `${viewYear}`;
        document.querySelector('.month').textContent = `${viewMonth + 1}`;

        const prevLast = new Date(viewYear, viewMonth, 0);
        const thisLast = new Date(viewYear, viewMonth + 1, 0);

        const PLDate = prevLast.getDate();
        const PLDay = prevLast.getDay();

        const TLDate = thisLast.getDate();
        const TLDay = thisLast.getDay();

        const prevDates = [];
        const thisDates = [...Array(TLDate + 1).keys()].slice(1);
        const nextDates = [];

        if (PLDay !== 6) {
            for (let i = 0; i < PLDay + 1; i++) {
                prevDates.unshift(PLDate - i);
            }
        }

        for (let i = 1; i < 7 - TLDay; i++) {
            nextDates.push(i);
        }

        const dates = prevDates.concat(thisDates, nextDates);
        const firstDateIndex = dates.indexOf(1);
        const lastDateIndex = dates.lastIndexOf(TLDate);

        dates.forEach((date, i) => {
            const condition = i >= firstDateIndex && i < lastDateIndex + 1 ?
                'this' :
                'other';
            dates[i] = `
                <div class="date ${condition}">
                    <div class="date-itm">
                        ${date}
                    </div>
                    <div class="date_event">
                        <div class="event-itm">EVENT</div>
                    </div>
                </div>
            `;
        });

        document.querySelector('.dates').innerHTML = dates.join('');

        const today = new Date();
        if (viewMonth === today.getMonth() && viewYear === today.getFullYear()) {
            for (let date of document.querySelectorAll('.date-itm')) {
                if (+date.innerText === today.getDate()) {
                    date.parentNode.classList.add('today');
                    break;
                }
            }
        }
        dateFunc();
    };

    const prevMonth = () => {
        setDate(new Date(date.getFullYear(), date.getMonth() - 1));
        reset();
    };

    const nextMonth = () => {
        setDate(new Date(date.getFullYear(), date.getMonth() + 1));
        reset();
    };

    const goToday = () => {
        setDate(new Date());
        reset();
    };

    const dateFunc = () => {
        const dates = document.querySelectorAll('.date');
        const year = document.querySelector('.year');
        const month = document.querySelector('.month');

        // ... (dateFunc 내용 그대로 가져옴)
    };

    const reset = () => {
        setSelectedDate([]);
        dateFunc();
    };

    return (
        <div className="calendar">
            <Calender />
        </div>
    );
};

export default CalendarPage;
