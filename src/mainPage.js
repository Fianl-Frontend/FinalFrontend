import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';
import Footer from './footer';
import Header from './header';

function MainPage() {

    return (
        <div className="mainPage">
            <body>

                <header>
                    <Header />
                    <div className="header">
                        <div className="header-line"></div>
                    </div>
                </header>

                <main>
                    <div className="container">
                        <div className="col-md-12">
                            <div className="recom-PT-title-box text-center">
                                <span className="recom-PT-title-text">추천운동</span>
                            </div>
                            <div className="recom-PT-box text-center">
                                <div className="PT-type1">
                                    <span className="PT-type1-text">윗몸일으키기</span>
                                </div>
                                <div className="PT-type2">
                                    <span className="PT-type2-text">랜바이어푸흘귄기흘</span>
                                </div>
                                <div className="PT-type3">
                                    <span className="PT-type3-text">축구</span>
                                </div>
                            </div>

                            <div className="e65_69">
                                <div className="e84_25">
                                    <div className="e84_26"></div>
                                    <div className="e84_28"></div>
                                    <div className="e84_29"></div>
                                </div>
                            </div>

                            <div className="text-center align-items-center">
                                <span className="recom-Food-title text-sm-center d-inline-block mx-auto align-items-start">식단표</span>
                                <div className='row justify-content-center'>
                                    <div className='col-md-4 col-lg-3'>
                                        <div className="recom-Food-out-box1">
                                            <span className="Food-morning">아침</span>
                                            <div className="recom-Food-in-box1"></div>
                                        </div>
                                    </div>

                                    <div className='col-md-4 col-lg-3'>
                                        <div className="recom-Food-out-box2">
                                            <span className="Food-afternoon">점심</span>
                                            <div className="recom-Food-in-box2"></div>
                                        </div>
                                    </div>

                                    <div className='col-md-4 col-lg-3'>
                                        <div className="recom-Food-out-box3">
                                            <span className="Food-evening">저녁</span>
                                            <div className="recom-Food-in-box3"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <span className="BMI-title">
                                    한 주 간 BMI 측정지수
                                </span>
                                <div className="BMI-graphBox">
                                    <div className="BMI-graph-section"></div>
                                    <span className="BMI-text">BMI (%)</span>
                                </div>
                            </div>

                            <div>
                                <span className="stress-title">스트레스 해소 방법</span>
                                <div className="stress-box-section">
                                    <div className="stress-box"></div>
                                    <div className="stress-title-box">
                                        <span className="stress-food">음식</span>
                                        <span className="stress-action">활동</span>
                                    </div>
                                </div>
                            </div>

                            <div className="e84_30"></div>

                            <div className="profile-box">
                                {/* e84_33 */}
                                <div className="calender-btn"></div>
                                {/* e84_35 */}
                                <div className="myPage-btn"></div>
                                {/* e84_34 */}
                                <div className="e84_41"></div>
                                <span className="e84_42">로그아웃</span>
                                <span className="e84_43">ㅇㅇㅇ 님</span>
                            </div>

                            <div className="e98_30"></div>
                        </div>
                    </div>
                </main>

                <footer>
                    <Footer />
                </footer>
                
            </body>
        </div>
    );
}

export default MainPage;
