import React from 'react';
import Link from 'next/link';

const Sidebar: React.FC = () => {
  return (
    <aside className="bg-gray-800 text-white w-64 p-4">
      <div className="mb-8">
        <Link href="/">
          <h2 className="text-2xl font-bold">web3lancer</h2>
        </Link>
      </div>

      <nav>
        <ul>
          <li className="mb-4">
            <Link href="/dashboard" className="hover:text-gray-300">
              Dashboard
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/jobs" className="hover:text-gray-300">
              Jobs
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/messages" className="hover:text-gray-300">
              Messages
            </Link>
          </li>
        </ul>
      </nav>

      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Notifications</h3>
        <p>No new notifications.</p>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Recent Gigs</h3>
        <p>No recent gigs.</p>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Messages</h3>
        <Link href="/messages" className="hover:text-gray-300">
          View all messages
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;

