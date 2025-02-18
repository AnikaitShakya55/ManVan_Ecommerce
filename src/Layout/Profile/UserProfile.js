import React, { useContext, useState } from 'react';
import styles from './UserProfile.module.css'; 
import profilepic from '../../Assests/UserProfileIcon/icon-5359553_1280.png';
import UserPic from '../../Assests/UserProfileIcon/icon-5359553_1280.png';
import { AuthContext } from '../../Store/Auth-Context';
import { useHistory } from 'react-router-dom/';

const UserProfile = () => {
  const history = useHistory()
  const authCtx = useContext(AuthContext);
  const userEmail = localStorage.getItem("email");
  const userName =  userEmail && userEmail.split('@')[0];

  const [showProfile, setShowProfile] = useState(false);
  const toggleProfile = () => {
    setShowProfile(prev => !prev);
  };

  const logoutHandler = () => {
    alert("Email is Logged Out");
    authCtx.logout();
    history.push('/home')
  };

  return (
    <div className={styles.profile}>
      <div className={styles.profileIcon} onClick={toggleProfile}>
        <img src={profilepic} alt="Profile" className={styles.profileIconImage} />
      </div>

      {showProfile && (
        authCtx.isLoggedIn ? (
          <div className={styles.profileBox}>
            <h3> User Profile </h3>
            <img src={UserPic} alt="Profile" className={styles.profilePic} />
            <p><strong>Username: {userName}</strong></p>
            <p><strong>Email:</strong> {userEmail}</p>
            <button onClick={logoutHandler} className={styles.logoutButton}>Logout</button>
          </div>
        ) : (
          <div className={styles.profileBox}>
            <h3>!! Please Login</h3>
          </div>
        )
      )}
    </div>
  );
};

export default UserProfile;
