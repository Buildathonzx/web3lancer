import { useState } from 'react';
import ConnectWalletButton from '@/components/ConnectWalletButton';
import ProfileSection from '@/components/ProfileSection';
import UniversalSearchBar from '@/components/UniversalSearchBar';
import SidePanel from '@/components/SidePanel';
import MessageSection from '@/components/MessageSection';
import RecentGigs from '@/components/RecentGigs';
import Notifications from '@/components/Notifications';

export default function Home() {
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  const handleWalletConnect = () => {
    // Logic to connect wallet
    setIsWalletConnected(true);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">web3lancer</h1>
        <div className="flex items-center space-x-4">
          <UniversalSearchBar />
          {isWalletConnected ? (
            <ProfileSection />
          ) : (
            <ConnectWalletButton onClick={handleWalletConnect} />
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-6 grid grid-cols-12 gap-6">
        {/* Side Panel */}
        <aside className="col-span-3">
          <SidePanel>
            <Notifications />
            <RecentGigs />
            <MessageSection />
          </SidePanel>
        </aside>

        {/* Dashboard Content */}
        <section className="col-span-9">
          {/* Welcome Section */}
          <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Welcome to web3lancer!
            </h2>
            <p className="text-gray-600">
              Find the best web3 freelancers and get your projects done.
            </p>
          </div>

          {/* Featured Gigs / Projects */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Featured Gigs
            </h2>
            {/* Gig Cards */}
            {/* ... */} 
          </div>
        </section>
      </main>
    </div>
  );
}

