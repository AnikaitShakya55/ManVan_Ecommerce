import React, { useContext, useState } from "react";
import styles from "./UserProfile.module.css";
import profilepic from "../../Assests/profile-user.png";
import UserPic from "../../Assests/UserProfileIcon/icon-5359553_1280.png";
import { AuthContext } from "../../Store/Auth-Context";
import { useNavigate } from "react-router-dom/";

const UserProfile = () => {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const userEmail = localStorage.getItem("email");
  const userName = userEmail && userEmail.split("@")[0];

  const [showProfile, setShowProfile] = useState(false);

  const toggleProfile = () => {
    setShowProfile((prev) => !prev);
  };

  const logoutHandler = () => {
    authCtx.logout();
    navigate("/home", { replace: true });
  };

  const loginHandler = () => {
    navigate("/login");
    toggleProfile();
  };

  return (
    <div className={styles.profile}>
      <div className={styles.profileIcon} onClick={toggleProfile}>
        <img
          src={profilepic}
          alt="Profile"
          className={styles.profileIconImage}
        />
      </div>

      {showProfile && (
        <div className={styles.profileBox}>
          <div className={styles.profileHeader}>
            <img src={UserPic} alt="Profile" className={styles.profilePic} />
            <div className={styles.profileInfo}>
              <p className={styles.userName}>{userName}</p>
              <p>{userEmail}</p>
            </div>
          </div>
          {authCtx.isLoggedIn ? (
            <button onClick={logoutHandler} className={styles.logoutButton}>
              Logout
            </button>
          ) : (
            <button onClick={loginHandler} className={styles.logoutButton}>
              Login
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default UserProfile;
