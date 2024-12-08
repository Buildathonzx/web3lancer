import React from 'react';
import { Link } from 'react-router-dom';

interface Message {
  sender: {
    profilePicture?: string;
    name: string;
  };
  preview: string;
  timestamp: string;
}

const MessageSection: React.FC = () => {
  const messages: Message[] = [
    {
      sender: {
        profilePicture: '/default-profile.png', 
        name: 'John Doe',
      },
      preview: 'Hey there! I have a question about your services.',
      timestamp: '10:30 AM',
    },
    // Add more messages here
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Messages</h3>
      <ul className="space-y-3">
        {messages.map((message, index) => (
          <li key={index} className="flex items-center">
            <img
              src={message.sender.profilePicture || '/default-profile.png'}
              alt={`${message.sender.name} profile`}
              className="rounded-full w-8 h-8 object-cover mr-3"
            />
            <Link to="/messages" className="flex-grow"> 
              <div>
                <span className="font-medium text-gray-800">{message.sender.name}</span>
                <span className="text-sm text-gray-600 ml-2">{message.preview}</span>
              </div>
              <span className="text-xs text-gray-500">{message.timestamp}</span>
            </Link>
          </li>
        ))}
      </ul>
      <Link to="/messages" className="mt-4 text-blue-500 hover:underline block text-center"> 
        View All Messages
      </Link>
    </div>
  );
};

export default MessageSection;