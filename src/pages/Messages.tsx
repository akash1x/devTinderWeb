import React from "react";

const Messages: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Your Messages</h1>
      <p className="mb-4">
        Connect with your matches through direct messaging.
      </p>
      {/* Simple message interface placeholder */}
      <div className="flex flex-col space-y-4">
        <div className="chat chat-start">
          <div className="chat-bubble">
            Hi there! I'm interested in your React project.
          </div>
        </div>
        <div className="chat chat-end">
          <div className="chat-bubble chat-bubble-primary">
            Great! Let's discuss the details.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
