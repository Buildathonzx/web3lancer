// src/components/Cards.tsx (or wherever JobCard is defined)
import React from 'react';

interface JobCardProps {
  jobData: {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
  };
}

export const JobCard: React.FC<JobCardProps> = ({ jobData }) => {
  return (
    <div className="border rounded-lg shadow-md overflow-hidden">
      <img
        src={jobData.imageUrl}
        alt={jobData.title}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="font-medium text-lg">{jobData.title}</h3>
        <p className="text-sm text-gray-600">{jobData.description}</p>
      </div>
    </div>
  );
};
