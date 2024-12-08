import React from 'react';

interface ProfileSectionProps {
  user?: {
    profilePicture?: string;
    username?: string;
    bio?: string;
  };
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ user }) => {
  if (!user) {
    return (
      <div className="flex items-center space-x-2">
        <span className="text-gray-600">Please connect your wallet</span>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-4">
      <img
        src={user.profilePicture || '/default-profile.png'}
        alt={`${user.username || 'User'} profile`}
        className="rounded-full w-10 h-10 object-cover"
      />
      <div>
        <h3 className="font-medium text-gray-800">{user.username || 'User'}</h3>
        <p className="text-sm text-gray-600">{user.bio || 'No bio yet'}</p>
      </div>
    </div>
  );
};

export default ProfileSection;
