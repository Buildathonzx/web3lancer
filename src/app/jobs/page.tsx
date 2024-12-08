'use client';

import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import RecentGigs from '@/components/RecentGigs'
import UniversalSearchBar from '@/components/UniversalSearchBar'

export default function JobsPage() {
  const jobs = [
    { id: 1, title: 'Web Developer', company: 'Acme Corp', location: 'New York' },
    { id: 2, title: 'UX Designer', company: 'Globex', location: 'San Francisco' },
    { id: 3, title: 'Frontend Engineer', company: 'Initech', location: 'London' },
  ]

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1">
        {/* Navbar */}
        <Navbar />

        <div className="p-6">
          {/* Search Bar */}
          <UniversalSearchBar placeholder="Search jobs..." />

          {/* Job Listings */}
          <h2 className="text-2xl font-bold mb-4">Available Jobs</h2>
          <ul>
            {jobs.map((job) => (
              <li key={job.id} className="border-b py-2">
                <div className="font-bold">{job.title}</div>
                <div className="text-gray-600">
                  {job.company} - {job.location}
                </div>
              </li>
            ))}
          </ul>

          {/* Recent Gigs (optional) */}
          <RecentGigs />
        </div>
      </div>
    </div>
  )
}
