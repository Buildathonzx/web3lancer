// src/components/FreelanceCard.tsx
import React from 'react';

interface FreelanceCardProps {
    freelancer: {
        id: string;
        name: string;
        title: string;
        imageUrl: string;
        bio: string;
    }
}

const FreelanceCard: React.FC<FreelanceCardProps> = ({ freelancer }) => {
    return (
        <div className="border rounded-lg shadow-md overflow-hidden">
            <img src={freelancer.imageUrl} alt={freelancer.name} className="w-full h-40 object-cover" /> {/* Image at the top */}
            <div className="p-4">
                <h3 className="font-medium text-lg">{freelancer.name}</h3>
                <p className="text-sm text-gray-600">{freelancer.title}</p>
                <p className="mt-2 text-sm">{freelancer.bio}</p>
            </div>
        </div>
    );
};

export default FreelanceCard;
