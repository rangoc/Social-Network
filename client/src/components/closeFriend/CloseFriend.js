import React from 'react';
import './closeFriend.scss';
const CloseFriend = ({ user }) => {
  return (
    <li className="leftbarFriend">
      <img
        className="leftbarFriendImg"
        src={user.profilePicture}
        alt="close friend profile"
      />
      <span className="leftbarFriendName">{user.username}</span>
    </li>
  );
};

export default CloseFriend;
