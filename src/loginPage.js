import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';



function LoginPage() {

    // value가 읽기 전용 속성이기 때문에 값 변경을 위한 onchange
    const [userId, setUserId] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const navigate = useNavigate();

    // 데스트를 위한 예시 이메일, 비번
    const [exampleData] = useState({ enterEmail: 'exampleEmail', enterPass: 'examplePass' });
    

    // === 여기는 로그인 버튼 클릭시 발생
    // input값 userId와 userPassword를 기존 데이터 enterId 와 enterPass 비교
    const handleLogin = () => {
        // 원본 코드
        // if (userId === 'enterId' && userPassword === 'enterPass') {

        // 테스팅 코드
        if (userId === exampleData.enterEmail && userPassword === exampleData.enterPass) {
            navigate('./mainPage'); 
            // Link는 페이지 이동이 아니라 단순 주소 렌더링이라 여기서 못 씀
        } else {
            console.log('로그인 실패: 아이디 또는 비밀번호가 일치하지 않습니다.');
        }
    };

    return (
        <div className="loginPage">

            {/* ===== 헤더 ===== */}
            <div className="header">
                <div className="header-line">
                    <span className="header-title">HELLENDER</span>
                </div>
            </div>
            {/* ===== 헤더 끝 ===== */}

            {/* ===== 바디 ===== */}
            <div class="body">
                <span class="LOGIN-title">LOGIN</span>
                <div class="login-box">
                    <div class="login-box-inner">

                        <div class="id-box">
                            <input type='text' id='userId' value={userId} 
                                onChange={(e) => setUserId(e.target.value)}
                                placeholder='Email'
                            >
                            </input>
                        </div>
                        <div class="password-box">
                            <input type='password'id='userPassword' value={userPassword} 
                                onChange={(e) => setUserPassword(e.target.value)}
                                placeholder='Password'
                            >
                            </input>
                        </div>

                        <button className="login-btn" onClick={handleLogin}>
                            <span class="login-text">로그인</span>
                        </button>

                        <button className="sign-up-btn">
                            <Link to="/signupPage">
                                <span class="sign-up-text">회원가입</span>
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
            {/* ===== 바디 끝 ===== */}

        </div>
    );
}

export default LoginPage;
