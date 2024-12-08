'use client';

import { useState, useEffect } from 'react';
import ConnectWalletButton from '@Navbar/components/ConnectWalletButton';
import ProfileSection from '@/components/ProfileSection'; 
import UniversalSearchBar from '@/components/UniversalSearchBar';
import Sidebar from '@/components/Sidebar'; 

export default function Home() {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [account, setAccount] = useState<string | null>(null); 

  const handleWalletConnect = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setIsWalletConnected(true);
        setAccount(accounts[0]); 
      } catch (error) {
        console.error('Error connecting to MetaMask:', error);
      }
    } else {
      console.error('MetaMask is not installed.');
    }
  };

  useEffect(() => {
    const checkConnection = async () => {
      if (typeof window.ethereum !== 'undefined') {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        if (accounts.length > 0) {
          setIsWalletConnected(true);
          setAccount(accounts[0]);
        }
      }
    };
    checkConnection(); 
  }, []); 

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-white p-4 shadow-md flex items-center justify-between">
        <div className="text-2xl font-bold text-gray-800">web3lancer</div>
        <div className="flex items-center space-x-6"> {/* Increased spacing */}
          <UniversalSearchBar /> 
          {isWalletConnected ? <ProfileSection account={account} /> : <ConnectWalletButton onClick={handleWalletConnect} />}
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-6 grid grid-cols-12 gap-6"> 
        <Sidebar isWalletConnected={isWalletConnected} /> {/* Side Panel */}

        {/* Dashboard Content */}
        <div className="col-span-9 bg-white rounded-lg shadow-md p-6"> 
          {/* Content here */}
          {isWalletConnected ? (
            <>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Dashboard</h2>
              <p>Welcome back, {account ? account.substring(0, 6) + '...' + account.substring(account.length - 4) : 'user'}!</p>
              {/* ... your dashboard content ... */}
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-full">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Welcome to web3lancer!</h2>
              <p className="text-gray-600 mb-6">Connect your wallet to get started.</p>
              <ConnectWalletButton onClick={handleWalletConnect} />
            </div>
          )}

        </div> 
      </main>
    </div>
  );
}


