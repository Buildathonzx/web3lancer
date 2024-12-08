import React from 'react';
import Link from 'next/link';

const Sidebar: React.FC = () => {
  return (
    <aside className="bg-gray-800 text-white w-64 p-4">
      {/* Logo or Branding */}
      <div className="mb-8">
        <Link href="/">
          <h2 className="text-2xl font-bold">web3lancer</h2>
        </Link>
      </div>

      {/* Navigation */}
      <nav>
        <ul>
          <li className="mb-4">
            <Link href="/dashboard">
              <a className="hover:text-gray-300">Dashboard</a>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/jobs">
              <a className="hover:text-gray-300">Jobs</a>
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/messages">
              <a className="hover:text-gray-300">Messages</a>
            </Link>
          </li>
          {/* Add more navigation items as needed */}
        </ul>
      </nav>

      {/* Important Sections */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Notifications</h3>
        {/* Display notifications here */}
        <p>No new notifications.</p>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Recent Gigs</h3>
        {/* Display recent gigs here */}
        <p>No recent gigs.</p>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Messages</h3>
        <Link href="/messages">
          <a className="hover:text-gray-300">View all messages</a>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;