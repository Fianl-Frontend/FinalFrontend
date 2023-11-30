import React, {useState, useEffect} from 'react';

const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        updateCurrentDate();
    }, []);

    const updateCurrentDate = () => {
        const date = new Date();
        setCurrentDate(date);
    };

    return (
        <div className="calendar">
            <div className="calendar_header">
                <div className="calendar_nav">
                    <button className="nav-btn go-prev">&lt;</button>
                    <span className="year">{currentDate.getFullYear()}</span>.&nbsp;
                    <span className="month">{currentDate.getMonth() + 1}</span>.
                    <button className="nav-btn go-next">&gt;</button>
                </div>
            </div>
            <div className="calendar_main">
                <div className="days">
                    <div className="day">Sunday</div>
                    <div className="day">Monday</div>
                    <div className="day">Tuesday</div>
                    <div className="day">Wednesday</div>
                    <div className="day">Thursday</div>
                    <div className="day">Friday</div>
                    <div className="day">Saturday</div>
                </div>
                <div className="dates"></div>
            </div>

            <center>
                <div className="resv-wrapper">
                    <div className="resv-bg">
                        <button className="resv-close">X</button>
                        <div className="resv_info">
                            <div className="resv_ym">
                                <div id="current_date">
                                    {currentDate.getFullYear()}. {currentDate.getMonth() + 1}. {currentDate.getDate()}. (Standard)
                                </div>
                            </div>
                            <div className="resv-remain">
                                <span>Remaining 2 Digits</span>
                            </div>
                            <h3>List of bookings</h3>
                            <div className="resv-list">
                                <span>
                                    <div id="container">
                                        <p>Hyeon-Min</p>
                                        <div className="toggle-switch">
                                            &nbsp;&nbsp;
                                            <input type="checkbox" id="toggle1"/>
                                            <label htmlFor="toggle1">
                                                <span className="toggle-track"></span>
                                            </label>
                                        </div>
                                    </div>
                                </span>
                                &nbsp;&nbsp;&nbsp;&nbsp; {/* 나머지 List of bookings 부분도 비슷한 방식으로 작성 */}
                            </div>
                            <h3>List of programs</h3>
                            <div className="resv-event">
                                <p>Cupcake Master 1
                                    <span>(AM: 10:00)</span>
                                </p>
                                <p>Cupcake Master 2
                                    <span>(PM: 13:00)</span>
                                </p>
                                <p>Cupcake Master 3
                                    <span>(PM: 16:00)</span>
                                </p>
                            </div>
                        </div>
                        <div className="resv_set">
                            <input className="resv_set time" type="time" name="" id=""/>
                            <button
                                style={{
                                    margin: '7px 0px 0px 0px',
                                    backgroundColor: 'skyblue',
                                    height: '30px',
                                    border: '0px solid skyblue',
                                    color: 'white'
                                }}
                                className="resv_btn purchase">
                                Reservation
                            </button>
                            <button
                                style={{
                                    margin: '7px 0px 0px 0px',
                                    backgroundColor: 'skyblue',
                                    height: '30px',
                                    border: '0px solid skyblue',
                                    color: 'white'
                                }}
                                className="resv_btn cancel">
                                Reservation cancellation
                            </button>
                        </div>
                    </div>
                </div>
            </center>
        </div>
    );
};

export default Calendar;
