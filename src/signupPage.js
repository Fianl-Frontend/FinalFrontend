import React, { useState } from 'react';
import './login.css';
import Header from './header';

function SignupPage() {
    const [name, setName] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const [birthday, setBirthday] = useState('');

    const handleBirthChange = (e) => {
        setBirthday(e.target.value);
    };

    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const [vc, setVc] = useState('');

    const handleVcChange = (e) => {
        setVc(e.target.value);
    }

    const [password, setPassword] = useState('');

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const [checkPassword, setCheckPassword] = useState('');

    const handleCheckPasswordChange = (e) => {
        setCheckPassword(e.target.value);
    }
    const [gender, setGender] = useState('');

    const handleGenderChange = (e) => {
        setGender(e.target.value);
    };


    return (
        <div className="regist">
            <Header />
            <div className="regist-box"></div>
            <span className="regist-title">회원가입</span>
            <input
                id='nickname'
                type="text"
                placeholder="이름"
                className={`regist-info-box ${name !== '' ? 'hidden' : ''}`}
                value={name}
                onChange={handleNameChange}
            />
            <div className="gender">
                <span>성별 </span>
                <label htmlFor="man">
                    <span>남</span>
                    <input
                        type="radio"
                        id="man"
                        name="gender"
                        value="남"
                        checked={gender === '남'}
                        onChange={handleGenderChange}
                    />
                </label>
                <label htmlFor="women">
                    <span>여</span>
                    <input
                        type="radio"
                        id="women"
                        name="gender"
                        value="여"
                        checked={gender === '여'}
                        onChange={handleGenderChange}
                    />
                </label>
            </div>
            <input
                id='birthday'
                type="text"
                placeholder="생년월일"
                className={'regist-info-box'}
                value={birthday}
                onChange={handleBirthChange}
            />
            <input
                id='email'
                type="text"
                placeholder="이메일"
                className={'regist-info-box'}
                value={email}
                onChange={handleEmailChange}
            />
            <input
                id="verification-code"
                type="text"
                placeholder="인증번호"
                className={'regist-info-box'}
                value={vc}
                onChange={handleVcChange}
            />
            <button type="submit" className="number-box"><span id="number">인증번호 발송</span></button>
            <input
                id="password"
                type="text"
                placeholder="비밀번호"
                className={'regist-info-box'}
                value={password}
                onChange={handlePasswordChange}
            />
            <input
                id='checkPassword'
                type='text'
                placeholder='비밀번호 확인'
                className='regist-info-box'
                value={checkPassword}
                onChange={handleCheckPasswordChange}
            />
            <div class="future-check1"></div>
            <div class="future-check2"></div>
            <div class="future-check-check"></div>
            <button type="submit" className="n-button"><span id="next-text">다음단계</span></button>
        </div>

    )
}
export default SignupPage;