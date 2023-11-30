import React, { useState, useEffect } from 'react';

const Reservation = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    const dateFunc = () => {
        const dates = document.querySelectorAll('.date');
        const year = document.querySelector('.year');
        const month = document.querySelector('.month');

        dates.forEach((i) => {
            i.addEventListener('click', () => {
                if (i.classList.contains('other') || i.classList.contains('selected')) {
                    dates.forEach((ig) => { ig.classList.remove('selected'); });
                    i.classList.remove('selected');
                    setSelectedDate(null);
                } else if (selectedDate) {
                    dates.forEach((ig) => { ig.classList.remove('selected'); });
                    setSelectedDate(null);
                } else {
                    i.classList.add('selected');
                    setSelectedDate([year.innerHTML, month.innerHTML, i.innerHTML]);
                }
            });
        });
    };

    const reset = () => {
        const dates = document.querySelectorAll('.date');
        dates.forEach((ig) => { ig.classList.remove('selected'); });
        setSelectedDate(null);
        dateFunc();
    };

    useEffect(() => {
        dateFunc();
    }, [selectedDate]);

    return (
        <div>
            <div>
                <h2>Reservation</h2>
                <p>Selected Date: {selectedDate ? selectedDate.join('-') : 'No date selected'}</p>
            </div>
            {/* 추가적인 UI 또는 다른 컴포넌트 등을 이어서 작성할 수 있습니다. */}
        </div>
    );
};

export default Reservation;
