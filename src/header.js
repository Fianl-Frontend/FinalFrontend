import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './login.css';

function Header() {
    const navigate = useNavigate();
    const location = useLocation();
    const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);
    const [isProfileVisible, setIsProfileVisible] = useState(false);

    const toggleMobileNav = () => {
        setIsMobileNavVisible(!isMobileNavVisible);
        setIsProfileVisible(false); // 모바일 네비게이션이 토글될 때 프로필 박스 숨김
    };

    const toggleProfileBox = () => {
        setIsProfileVisible(!isProfileVisible);
    };

    const HomeButton = () => {
        const currentPath = location.pathname;

        if (currentPath === '/mainPage' || currentPath === '/myPage') {
            navigate('/mainPage');
        } else {
            alert("페이지를 찾을 수 없습니다.");
        }
    };

    return (
        <header className="header2">
            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
                rel="stylesheet"
                integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
                crossOrigin="anonymous"
            ></link>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.6.0/font/bootstrap-icons.css" />

            <script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm"
                crossOrigin="anonymous"
            ></script>

            <div className="header-line2 d-flex justify-content-between align-items-center">
                <Link to="/" className="logo d-flex align-items-center" onClick={HomeButton}>
                    <h1 className="header-title">HELLENDER</h1>
                </Link>

                <i
                    className={`mobile-nav-toggle ${isMobileNavVisible ? 'd-none' : 'mobile-nav-show'} bi bi-list-ul fs-1`}
                    onClick={() => {
                        toggleMobileNav();
                        toggleProfileBox();
                    }}
                ></i>
                <i
                    className={`mobile-nav-toggle ${isMobileNavVisible ? 'mobile-nav-hide' : 'd-none'} bi bi-x fs-1`}
                    onClick={() => {
                        toggleMobileNav();
                        setIsProfileVisible(false); // 닫기 버튼 클릭 > 프로필 박스 사라짐
                    }}
                ></i>

                <nav id="navbar" className={`navbar ml-auto ${isMobileNavVisible ? 'mobile-nav-active' : ''}`}>
                    <ul className={` ${isMobileNavVisible ? 'mobile-nav-hide' : ''}`}>
                        <li>
                            <Link to="/myPage" className={location.pathname === '/myPage' ? 'active' : ''}>
                                <span className="myPage-text fs-4 fw-bold">마이페이지</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/calenderPage" className={location.pathname === '/calendarPage' ? 'active' : ''}>
                                <span className="calendarPage-text fs-4 fw-bold mr-3">캘린더</span>
                            </Link>
                        </li>
                        {/* <i class="bi bi-house"></i> */}
                    </ul>
                </nav>

            </div>
        </header>
    );
}

export default Header;
