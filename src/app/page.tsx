'use client';

import { useState, useEffect } from 'react';
import ConnectWalletButton from '@/components/ConnectWalletButton';
import ProfileSection from '@/components/ProfileSection';
import UniversalSearchBar from '@/components/UniversalSearchBar';
import Sidebar from '@/components/Sidebar';
import FreelanceCard from '@/components/FreelanceCard'; // Import FreelanceCard
import { JobCard } from '@/components/JobCard';
import PaymentCard from '@/components/PaymentCard'; // Import PaymentCard



import { Web3SignatureProvider } from "@requestnetwork/web3-signature";
const provider = window.ethereum;

const web3SignatureProvider = new Web3SignatureProvider(provider);



import { RequestNetwork } from "@requestnetwork/request-client.js"

const requestClient = new RequestNetwork({
  nodeConnectionConfig: { 
    baseURL: "https://sepolia.gateway.request.network/",
  },
  signatureProvider: web3SignatureProvider,
});






import { Types, Utils } from "@requestnetwork/request-client.js";

const payeeIdentity = '0x7eB023BFbAeE228de6DC5B92D0BeEB1eDb1Fd567';
const payerIdentity = '0x519145B771a6e450461af89980e5C17Ff6Fd8A92';
const paymentRecipient = payeeIdentity;
const feeRecipient = '0x0000000000000000000000000000000000000000';

const requestCreateParameters = {
  requestInfo: {
    
    // The currency in which the request is denominated
    currency: {
      type: Types.RequestLogic.CURRENCY.ERC20,
      value: '0x370DE27fdb7D1Ff1e1BaA7D11c5820a324Cf623C',
      network: 'sepolia',
    },
    
    // The expected amount as a string, in parsed units, respecting `decimals`
    // Consider using `parseUnits()` from ethers or viem
    expectedAmount: '1000000000000000000',
    
    // The payee identity. Not necessarily the same as the payment recipient.
    payee: {
      type: Types.Identity.TYPE.ETHEREUM_ADDRESS,
      value: payeeIdentity,
    },
    
    // The payer identity. If omitted, any identity can pay the request.
    payer: {
      type: Types.Identity.TYPE.ETHEREUM_ADDRESS,
      value: payerIdentity,
    },
    
    // The request creation timestamp.
    timestamp: Utils.getCurrentTimestampInSecond(),
  },
  
  // The paymentNetwork is the method of payment and related details.
  paymentNetwork: {
    id: Types.Extension.PAYMENT_NETWORK_ID.ERC20_FEE_PROXY_CONTRACT,
    parameters: {
      paymentNetworkName: 'sepolia',
      paymentAddress: payeeIdentity,
      feeAddress: feeRecipient,  
      feeAmount: '0',
    },
  },
  
  // The contentData can contain anything.
  // Consider using rnf_invoice format from @requestnetwork/data-format
  contentData: {
    reason: '🍕',
    dueDate: '2023.06.16',
  },
  
  // The identity that signs the request, either payee or payer identity.
  signer: {
    type: Types.Identity.TYPE.ETHEREUM_ADDRESS,
    value: payeeIdentity,
  },
};



// const request = await requestClient.createRequest(requestCreateParameters);

// const confirmedRequestData = await request.waitForConfirmation();

export default function Home() {
    // ... (existing state and functions)
    const isWalletConnected = true; // or false, depending on desired default behavior

    const sampleJobs = [
        {
            id: '1',
            title: 'Senior Solidity Developer',
            description: 'Experienced Solidity developer needed for DeFi project',
            imageUrl: '/images/job1.jpg', // Replace with your image paths
        },
        {
            id: '2',
            title: 'Frontend Web3 Developer',
            description: 'Build engaging user interfaces for blockchain apps.',
            imageUrl: '/images/web3lancer.jpg',
        },
    ];

    const sampleFreelancers = [
        {
            id: '1',
            name: 'Alice',
            title: 'Blockchain Specialist',
            imageUrl: '/images/prof1.jpg',
            bio: '5+ years of blockchain development experience with the request network',
        },
        {
            id: '2',
            name: 'Bob',
            title: 'Smart Contract Auditor',
            imageUrl: '/images/prof2.jpg',
            bio: 'Expert in security audits for smart contracts',
        },
    ];

    return (
        <div className="bg-gray-100 min-h-screen">
            {/* ... (header remains the same) */}

            <main className="container mx-auto p-6 grid grid-cols-12 gap-6">
                {/* Sidebar (if needed) */}
                {/* <Sidebar isWalletConnected={isWalletConnected} /> */}

                <div className="col-span-9">
                    {/* ... (dashboard content / welcome message based on isWalletConnected) ... */}

                    {/* Featured Jobs Section */}
                    <section className="mt-8">
                        <h2 className="text-xl font-semibold mb-4">Featured Jobs</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {sampleJobs.map((job) => (
                                <JobCard key={job.id} jobData={job} />
                            ))}
                        </div>
                    </section>


                    {/* Featured Freelancers Section */}
                    <section className="mt-8">
                        <h2 className="text-xl font-semibold mb-4">Top Freelancers</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {sampleFreelancers.map((freelancer) => (
                                <FreelanceCard key={freelancer.id} freelancer={freelancer} />
                            ))}
                        </div>
                    </section>

                    {/* Payment Information Section */}
                    <section className="mt-8">
                        <h2 className="text-xl font-semibold mb-4">Freelancer Card Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> {/* Adjust grid as needed */}
                            <PaymentCard />
                        </div>
                        <h2 className="text-xl font-semibold mb-4">OR</h2>

                        <h4 className="text-xl font-semibold mb-4">use request network</h4>
                        <div className="mt-4">
                            <ConnectWalletButton /> {/* Reconnect Wallet Button */}
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}
