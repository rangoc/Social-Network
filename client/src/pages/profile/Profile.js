import React, { useState, useEffect } from 'react';
import Topbar from 'components/topbar/Topbar';
import Leftbar from 'components/leftbar/Leftbar';
import Feed from 'components/feed/Feed';
import Rightbar from 'components/rightbar/Rightbar';
import './profile.scss';
import axios from 'axios';
const Profile = () => {
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await axios.get(`/users?username=john`);
      setUser(data);
    };
    fetchUser();
  }, []);
  return (
    <>
      <Topbar />
      <div className="profile">
        <Leftbar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={`${publicFolder}post/3.jpeg`}
                alt="cover"
              />
              <img
                className="profileUserImg"
                src={`${publicFolder}person/7.jpeg`}
                alt="profile"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user.username}</h4>
              <span className="profileInfoDesc">{user.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username="john" />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
