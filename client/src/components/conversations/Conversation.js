import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './conversation.scss';
const Conversation = ({ conversation, currentUser }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const friendId = conversation.members.find(
      (member) => member !== currentUser._id
    );

    const getUser = async () => {
      try {
        const { data } = await axios(`/users?userId=${friendId}`);
        setUser(data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [conversation, currentUser]);
  console.log(user);
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="conversation">
      <img
        className="conversationImg"
        src={
          user.profilePicture
            ? `${publicFolder}${user.profilePicture}`
            : `${publicFolder}person/noAvatar.png`
        }
        alt="conversation"
      />
      <span className="conversationName">{user.username}</span>
    </div>
  );
};

export default Conversation;
