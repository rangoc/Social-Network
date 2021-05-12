import React from 'react';
import './chatOnline.scss';
const ChatOnline = () => {
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="chatOnline">
      <div className="chatOnlineFriend">
        <div className="chatOnlineImgContainer">
          <img
            className="chatOnlineImg"
            src={`${publicFolder}person/3.jpeg`}
            alt="online friend"
          />
          <div className="chatOnlineBadge"></div>
        </div>
        <span className="chatOnlineName">John Doe</span>
      </div>
    </div>
  );
};

export default ChatOnline;
