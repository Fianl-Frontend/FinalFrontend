import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';
import Footer from './footer';
import Header from './header';

function MainPage() {

    return (
        <div className="mainPage">
            <header>
                <Header/>
                <div className="header">
                    <div className="header-line"></div>
                </div>
            </header>
                <body>
                    <main>
                        <div className='bodyWrap'>
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

                                    <div className="text-center">
                                        <span className="recom-Food-title text-center">식단표</span>
                                        <div className="text-center align-items-center">
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
                                    </div>

                                    <div className='text-center'>
                                        <span className="BMI-title recom-Food-title text-center">
                                            한 주 간 BMI 측정지수
                                        </span>
                                        <div className='d-flex justify-content-center align-items-center'>
                                            <div className="BMI-graphBox">
                                                <span className="BMI-text position-absolute start-0 fs-5">BMI <br></br> (%)</span>
                                                <div className="BMI-graph-section"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <span className="stress-title recom-Food-title text-center">스트레스 해소 방법</span>
                                        <div className='d-flex justify-content-center align-items-center'>
                                            <div className="stress-box">
                                                <div className="stress-title-box">
                                                    <div className="middle-line"></div>
                                                    <span className="stress-food fs-3">음식</span>
                                                    <span className="stress-action fs-3">활동</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <div className="graph-img"></div> */}
                                </div>
                            </div>
                        </div>
                    </main>
                </body>
            <footer>
                <Footer />
            </footer>               
        </div>
    );
}

export default MainPage;
