import React from 'react';
import './conversation.scss';
const Conversation = () => {
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="conversation">
      <img
        className="conversationImg"
        src={`${publicFolder}person/1.jpeg`}
        alt="conversation"
      />
      <span className="conversationName">John Doe</span>
    </div>
  );
};

export default Conversation;
