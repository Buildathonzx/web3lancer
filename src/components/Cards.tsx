import React from 'react';

interface CardProps {
  type: 'job' | 'profile' | 'notification';
  // Add other props as needed for each card type
}

const Card: React.FC<CardProps> = ({ type, children }) => {
  let className = 'rounded-lg shadow-md p-4';

  switch (type) {
    case 'job':
      className += ' bg-white border border-gray-200';
      break;
    case 'profile':
      className += ' bg-gray-100 border border-gray-300';
      break;
    case 'notification':
      className += ' bg-blue-100 border border-blue-300';
      break;
  }

  return <div className={className}>{children}</div>;
};

export const JobCard: React.FC = ({ jobData }) => {
  // Replace with actual job data structure
  // const { title, description, budget, ... } = jobData; 

  return (
    <Card type="job">
      {/* Display job details */}
      {/* <h3>{title}</h3>
      <p>{description}</p>
      <p>Budget: {budget}</p> */}
    </Card>
  );
};

export const ProfileCard: React.FC = ({ profileData }) => {
  // Replace with actual profile data structure
  // const { name, bio, skills, ... } = profileData;

  return (
    <Card type="profile">
      {/* Display profile details */}
      {/* <h3>{name}</h3>
      <p>{bio}</p>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul> */}
    </Card>
  );
};

export const NotificationCard: React.FC = ({ notificationData }) => {
  // Replace with actual notification data structure
  // const { message, timestamp, ... } = notificationData;

  return (
    <Card type="notification">
      {/* Display notification details */}
      {/* <p>{message}</p>
      <p>{timestamp}</p> */}
    </Card>
  );
};