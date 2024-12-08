import React from 'react';

interface Gig {
  title: string;
  description: string;
  link: string;
}

const RecentGigs: React.FC = () => {
  const recentGigs: Gig[] = [
    { title: 'Gig 1', description: 'Description for Gig 1', link: '/gig/1' },
    { title: 'Gig 2', description: 'Description for Gig 2', link: '/gig/2' },
    { title: 'Gig 3', description: 'Description for Gig 3', link: '/gig/3' },
  ];

  return (
    <div>
      <h3>Recent Gigs</h3>
      {recentGigs.length > 0 ? (
        <ul>
          {recentGigs.map((gig) => (
            <li key={gig.title}>
              <a href={gig.link}>{gig.title}</a> - {gig.description}
            </li>
          ))}
        </ul>
      ) : (
        <p>No recent gigs</p>
      )}
    </div>
  );
};

export default RecentGigs;