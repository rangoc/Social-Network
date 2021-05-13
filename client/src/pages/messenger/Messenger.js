import axios from 'axios';
import ChatOnline from 'components/chatOnline/ChatOnline';
import Conversation from 'components/conversations/Conversation';
import Message from 'components/message/Message';
import Topbar from 'components/topbar/Topbar';
import { AuthContext } from 'context/AuthContext';
import React, { useContext, useEffect, useState } from 'react';
import './messenger.scss';
const Messenger = () => {
  const [conversations, setConversations] = useState([]);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    const getConversations = async () => {
      try {
        const { data } = await axios.get(`/conversations/${user._id}`);
        setConversations(data);
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
  }, [user]);
  return (
    <>
      <Topbar />
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input
              type="text"
              placeholder="Search for friends"
              className="chatMenuInput"
            />
            {conversations.map((conversation) => (
              <Conversation
                key={conversation._id}
                conversation={conversation}
                currentUser={user}
              />
            ))}
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            <div className="chatBoxTop">
              <Message />
              <Message own={true} />
              <Message />
              <Message own={true} />
              <Message />
              <Message own={true} />
              <Message />
              <Message own={true} />
              <Message />
              <Message own={true} />
              <Message />
              <Message own={true} />
            </div>
            <div className="chatBoxBottom">
              <textarea
                className="chatMessageInput"
                placeholder="Write something..."
              />
              <button className="chatSubmitButton">Send</button>
            </div>
          </div>
        </div>
        <div className="chatOnline">
          <div className="chatOnlineWrapper">
            <ChatOnline />
          </div>
        </div>
      </div>
    </>
  );
};
export default Messenger;
