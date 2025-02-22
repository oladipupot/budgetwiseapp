import React, { useState } from 'react';
import "./style.css"

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the chat popup
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="whatsapp-container">
      {/* WhatsApp Floating Button */}
      <div className="whatsapp-button" onClick={toggleChat}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp Chat"
        />
      </div>

      {/* Chat Box Popup */}
      {isOpen && (
        <div className="whatsapp-chat-popup">
          <div className="chat-header">
            <span>WhatsApp Chat</span>
            <span className="close-chat" onClick={toggleChat}>
              x
            </span>
          </div>
          <div className="chat-body">
            <p>Hello! How can we help you today?</p>
          </div>
          <div className="chat-footer">
            <a
              href="https://wa.me/+2348154431670?text=Hello,%20I%20need%20help%20with..."
              target="_blank"
              rel="noopener noreferrer"
              className="start-chat-btn"
            >
              Start Chat
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhatsAppChat;
