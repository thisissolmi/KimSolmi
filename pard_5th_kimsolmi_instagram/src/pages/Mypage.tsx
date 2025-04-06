import React from 'react';
import styles from '../styles/MyPage.module.css';

import {
  FaHome,
  FaSearch,
  FaPlusSquare,
  FaBell,
  FaComment,
  FaUser,
  FaBars
} from 'react-icons/fa';

export default function mypage() {
  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <div className={styles.logoArea}>
          <img
            src="/Company-logo.png"
            alt="Instagram Logo"
            className={styles.logo}
          />
        </div>
        <nav className={styles.menu}>
          <ul>
            <li className={styles.menuItem}>
              <FaHome className={styles.icon} />
              <span className={styles.menuText}>홈</span>
            </li>
            <li className={styles.menuItem}>
              <FaSearch className={styles.icon} />
              <span className={styles.menuText}>검색</span>
            </li>
            <li className={styles.menuItem}>
              <FaPlusSquare className={styles.icon} />
              <span className={styles.menuText}>릴스</span>
            </li>
            <li className={styles.menuItem}>
              <FaComment className={styles.icon} />
              <span className={styles.menuText}>메시지</span>
            </li>
            <li className={styles.menuItem}>
              <FaBell className={styles.icon} />
              <span className={styles.menuText}>알림</span>
            </li>
            <li className={styles.menuItem}>
              <FaPlusSquare className={styles.icon} />
              <span className={styles.menuText}>만들기</span>
            </li>
            <li className={styles.menuItem}>
              <FaUser className={styles.icon} />
              <span className={styles.menuText}>프로필</span>
            </li>
          </ul>
          <div className={styles.sidebarBottom}>
            <li className={styles.menuItem}>
              <FaBars className={styles.icon} />
              <span className={styles.menuText}>더보기</span>
            </li>
          </div>
        </nav>
      </aside>

      <main className={styles.main}>
        <div className={styles.profileHeader}>
          <div className={styles.profileImage}>
            <div className={styles.avatar}>
              <img 
                src="/Yes.png" 
                alt="Profile" 
                className={styles.avatarImage}
              />
            </div>
          </div>
          <div className={styles.profileInfo}>
            <div className={styles.profileNameRow}>
              <h2 className={styles.username}>thisissolmi</h2>
              <button className={styles.editProfileButton}>프로필 편집</button>
            </div>
            <div className={styles.profileStats}>
              <span className={styles.stat}>게시물 5</span>
              <span className={styles.stat}>팔로워 1432</span>
              <span className={styles.stat}>팔로우 0</span>
            </div>
          </div>
        </div>
        
        <div className={styles.profileContent}>
          <div className={styles.profileGrid}>
            <div className={styles.gridItem}>
              <img 
                src="/devweb.png" 
                alt="Dev Web" 
                className={styles.gridImage}
              />
            </div>
            <div className={styles.gridItem}>
              <img 
                src="/post1.png" 
                alt="Post 1" 
                className={styles.gridImage}
              />
            </div>
            <div className={styles.gridItem}>
              <img 
                src="/defult.png" 
                alt="Default" 
                className={styles.gridImage}
              />
            </div>
            <div className={styles.gridItem}>
              <img 
                src="/defult.png" 
                alt="Default" 
                className={styles.gridImage}
              />
            </div>
            <div className={styles.gridItem}>
              <img 
                src="/defult.png" 
                alt="Default" 
                className={styles.gridImage}
              />
            </div>
            <div className={styles.gridItem}>
              <img 
                src="/defult.png" 
                alt="Default" 
                className={styles.gridImage}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}