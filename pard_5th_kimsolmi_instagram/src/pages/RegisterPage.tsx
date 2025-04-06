// pages/Register.tsx
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

// CSS Module import
import styles from '../styles/Register.module.css';

export default function Register() {
  const router = useRouter();

  const [phoneOrEmail, setPhoneOrEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  // 폼 제출 시
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 가입 로직 처리(백엔드 API 호출 등)
    console.log('가입 정보:', {
      phoneOrEmail,
      fullName,
      userName,
      password,
    });
  };

  // 로그인 버튼 클릭 시 /MyPage로 이동
  const handleLoginClick = () => {
    router.push('/MyPage');
  };

  return (
    <div className={styles.container}>
      {/* 로고 이미지 (public 폴더에 instagram-logo.png가 있다고 가정) */}
      <div className={styles.logo}>
        <Image
          src="/Company-logo.png"
          alt="Instagram Logo"
          width={200}
          height={60}
          priority
        />
      </div>

      <p>친구들의 사진과 동영상을 보려면 가입하세요.</p>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="휴대폰 번호 또는 이메일 주소"
          className={styles.inputField}
          value={phoneOrEmail}
          onChange={(e) => setPhoneOrEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="성명"
          className={styles.inputField}
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <input
          type="text"
          placeholder="사용자 이름"
          className={styles.inputField}
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="password"
          placeholder="비밀번호"
          className={styles.inputField}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className={styles.button}>
          가입
        </button>
      </form>

      <div className={styles.loginWrapper}>
        <p>계정이 있으신가요?</p>
        <button onClick={handleLoginClick} className={styles.loginButton}>
          로그인
        </button>
      </div>
    </div>
  );
}
