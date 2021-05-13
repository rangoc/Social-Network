import React from 'react';
import { format } from 'timeago.js';
import './message.scss';
const Message = ({ message, own }) => {
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className={`message ${own ? 'own' : ''}`}>
      <div className="messageTop">
        <img
          src={`${publicFolder}person/2.jpeg`}
          className="messageImg"
          alt="message"
        />
        <p className="messageText">{message.text}</p>
      </div>
      <div className="messageBottom">{format(message.createdAt)}</div>
    </div>
  );
};

export default Message;
