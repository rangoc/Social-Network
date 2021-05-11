import React from 'react';
import './closeFriend.scss';
const CloseFriend = ({ user }) => {
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="leftbarFriend">
      <img
        className="leftbarFriendImg"
        src={`${publicFolder}${user.profilePicture}`}
        alt="close friend profile"
      />
      <span className="leftbarFriendName">{user.username}</span>
    </li>
  );
};

export default CloseFriend;
