import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './login.css';

function Header() {
    const navigate = useNavigate();
    const location = useLocation();

    const HomeButton = () => {
        const currentPath = location.pathname;

        // if (currentPath === '/loginPage') {
        //     navigate('/loginPage');
        // } else if (currentPath === '/signupPage') {
        //     navigate('/signupPage');
        // } else 
        
        if (currentPath === '/mainPage' || currentPath === '/myPage') {
            navigate('/mainPage');
        } else {
            alert("페이지를 찾을 수 없습니다.");
        }
    };
    return (

        <header div className="header2">
            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
                rel="stylesheet"
                integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
                crossOrigin="anonymous"></link>
            <script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm"
                crossOrigin="anonymous"></script>

            <div className="header-line2">
                <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
                <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

                <nav id="navbar" className="navbar ml-auto">
                    <Link to="/" className="logo d-flex align-items-center" onClick={HomeButton}>
                        <h1 className="header-title">HELLENDER</h1>
                    </Link>

                    <ul>
                        <li>
                            <Link to="/myPage" className={location.pathname === '/myPage' ? 'active' : ''}>
                                <span className="myPage-text fs-5 fw-bold">마이페이지</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/calendarPage"
                                className={location.pathname === '/calendarPage' ? 'active' : ''}>
                                <span className="calendarPage-text fs-5 fw-bold mr-3">캘린더</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;