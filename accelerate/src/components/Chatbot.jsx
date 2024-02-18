import React, { useState, useEffect } from 'react';
import "../styles/Chatbot.css"

function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  // Function to handle sending a message
  const sendMessage = () => {
    if (inputText.trim() !== '') {
      setMessages([...messages, { text: inputText, sender: 'user' }]);
      setInputText('');
      // Here you can add logic to send the user's message to your AI backend and get the response
      // For simplicity, let's assume the bot replies instantly with a hardcoded response
      setTimeout(() => {
        setMessages([...messages, { text: 'Hi there, How may I help you !', sender: 'bot' }]);
      }, 500);
    }
  };

  // Function to handle user input change
  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  // Function to handle pressing Enter key
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  };

  // useEffect hook to scroll to the bottom of the chat window whenever messages change
  useEffect(() => {
    const chatWindow = document.getElementById('chat-window');
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }, [messages]);

  return (
    <div className="chat-bot-container">
      <div id="chat-window" className="chat-window">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Type your message..."
          value={inputText}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default ChatBot;
