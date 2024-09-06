import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import './Chat.css'; // Import your styling
import avatar from './profile-pic.png';
import logo from './logo.png';

const socket = io('http://35.172.178.73:3000'); // Use the correct server URL

function Chat() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [senderId, setSenderId] = useState('');   // Sender username or ID
  const [receiverId, setReceiverId] = useState(''); // Receiver username or ID

  useEffect(() => {
    // Prompt for sender and receiver usernames on mount
    const sender = prompt('Enter your username:');
    const receiver = prompt('Enter the username of the person you want to chat with:');
    
    setSenderId(sender || 'AnonymousSender');
    setReceiverId(receiver || 'AnonymousReceiver');

    // Function to load new messages
    const loadMessages = () => {
      socket.emit('loadChat', { senderId: sender, receiverId: receiver });

      // Receive new messages from the server
      socket.on('loadMessages', (msgs) => {
        setMessages(msgs);
      });
    };

    // Poll the server every second for new messages
    const pollMessages = () => {
      loadMessages();
      setTimeout(pollMessages, 1000); // Call this function again after 1 second
    };

    // Start polling for messages
    pollMessages();

    socket.on('message', (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
      socket.off('message');
      socket.off('loadMessages');
    };
  }, []);

  const sendMessage = () => {
    if (message) {
      // Send message with senderId, receiverId, and content
      socket.emit('message', {
        senderId,
        receiverId,
        message,
      });
      setMessage('');
    }
  };

  return (
    <>
    <header className="header">
      <img src={logo} alt="Icon" className="header-icon"/>
    </header>
    <div className="chat-container">
      <div className="inline-container">
        <img src={avatar} alt="avatar-icon" id="avatar" />
        <h2>{receiverId}</h2>
      </div>
      <div className="message-list">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={msg.sender === senderId ? 'message own' : 'message other'}
          >
            <strong>{msg.sender}:</strong> {msg.text} 
          </div>
        ))}
      </div>
      <span>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={sendMessage}>Send</button>
      </span>
    </div>
    <footer className="footer">
      SIH 2024 Prototype
    </footer>
    </>
  );
}

export default Chat;
