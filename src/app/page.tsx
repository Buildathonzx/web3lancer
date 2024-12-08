'use client';

import { useState, useEffect } from 'react';
import ConnectWalletButton from '@/components/ConnectWalletButton';
import ProfileSection from '@/components/ProfileSection';
import UniversalSearchBar from '@/components/UniversalSearchBar';
import Sidebar from '@/components/Sidebar';
import { JobCard } from '@/components/Cards'; // Import JobCard
import FreelanceCard from '@/components/FreelanceCard'; // Import FreelanceCard


export default function Home() {
    // ... (existing state and functions)

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
            imageUrl: '/images/job2.jpg',
        },
    ];

    const sampleFreelancers = [
        {
            id: '1',
            name: 'Alice',
            title: 'Blockchain Specialist',
            imageUrl: '/images/freelancer1.jpg',
            bio: '5+ years of blockchain development experience.',
        },
        {
            id: '2',
            name: 'Bob',
            title: 'Smart Contract Auditor',
            imageUrl: '/images/freelancer2.jpg',
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

                    {isWalletConnected ? (
                        <>
                            {/* ... (dashboard content remains the same) */}
                        </>
                    ) : (
                        <div className="flex flex-col items-center justify-center h-full">
                            {/* ... (welcome message) */}
                        </div>
                    )}


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
                </div>
            </main>
        </div>
    );
}
