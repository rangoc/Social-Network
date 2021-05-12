import React from 'react';
import './message.scss';
const Message = ({ own }) => {
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className={`message ${own ? 'own' : ''}`}>
      <div className="messageTop">
        <img
          src={`${publicFolder}person/2.jpeg`}
          className="messageImg"
          alt="message"
        />
        <p className="messageText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nam non
          odio quo nihil animi mollitia voluptatum
        </p>
      </div>
      <div className="messageBottom">1 hour ago</div>
    </div>
  );
};

export default Message;
