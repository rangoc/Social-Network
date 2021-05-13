import axios from 'axios';
import ChatOnline from 'components/chatOnline/ChatOnline';
import Conversation from 'components/conversations/Conversation';
import Message from 'components/message/Message';
import Topbar from 'components/topbar/Topbar';
import { AuthContext } from 'context/AuthContext';
import { io } from 'socket.io-client';
import React, { useContext, useEffect, useRef, useState } from 'react';
import './messenger.scss';
const Messenger = () => {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [socket, setSocket] = useState(null);
  const { user } = useContext(AuthContext);
  const messageInput = useRef();
  const scrollRef = useRef();

  useEffect(() => {
    setSocket(io('ws://localhost:8900'));
  }, []);

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

  useEffect(() => {
    const getMessages = async () => {
      try {
        const { data } = await axios.get(`/messages/${currentChat?._id}`);
        setMessages(data);
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
  }, [currentChat]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      sender: user._id,
      text: newMessage,
      conversationId: currentChat._id,
    };

    try {
      const { data } = await axios.post(`/messages`, message);
      setMessages([...messages, data]);
      messageInput.current.value = '';
    } catch (err) {
      console.log(err);
    }
  };
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
              <div
                key={conversation._id}
                onClick={() => setCurrentChat(conversation)}
              >
                <Conversation conversation={conversation} currentUser={user} />
              </div>
            ))}
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            {currentChat ? (
              <>
                <div className="chatBoxTop">
                  {messages.map((message) => (
                    <div key={message._id} ref={scrollRef}>
                      <Message
                        message={message}
                        own={message.sender === user._id}
                      />
                    </div>
                  ))}
                </div>
                <div className="chatBoxBottom">
                  <textarea
                    className="chatMessageInput"
                    placeholder="Write something..."
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                    ref={messageInput}
                  />
                  <button className="chatSubmitButton" onClick={handleSubmit}>
                    Send
                  </button>
                </div>
              </>
            ) : (
              <span className="noConversationText">
                Open a conversation to start a chat.
              </span>
            )}
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
