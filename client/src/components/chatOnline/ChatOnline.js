import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './chatOnline.scss';
const ChatOnline = ({ onlineUsers, currentUserId, setCurrentChat }) => {
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([]);
  const [onlineFriends, setOnlineFriends] = useState([]);

  useEffect(() => {
    const getFriends = async () => {
      const { data } = await axios.get(`/users/friends/${currentUserId}`);
      setFriends(data);
    };
    getFriends();
  }, [currentUserId]);

  useEffect(() => {
    setOnlineFriends(
      friends.filter((friend) => onlineUsers.includes(friend._id))
    );
  }, [friends, onlineUsers]);

  const handleClick = async (onlineFriend) => {
    try {
      // get a conversation with specific onlineFriend
      const { data } = await axios.get(
        `/conversations/find/${currentUserId}/${onlineFriend._id}`
      );
      setCurrentChat(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="chatOnline">
      {onlineFriends.map((onlineFriend) => (
        <div
          key={onlineFriend._id}
          className="chatOnlineFriend"
          onClick={() => handleClick(onlineFriend)}
        >
          <div className="chatOnlineImgContainer">
            <img
              className="chatOnlineImg"
              src={
                onlineFriend?.profilePicture
                  ? `${publicFolder}${onlineFriend.profilePicture}`
                  : `${publicFolder}person/noAvatar.png`
              }
              alt="online friend"
            />
            <div className="chatOnlineBadge"></div>
          </div>
          <span className="chatOnlineName">{onlineFriend.username}</span>
        </div>
      ))}
    </div>
  );
};

export default ChatOnline;
