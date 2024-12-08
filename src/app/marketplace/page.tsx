'use client'

import  Navbar  from '@/components/Navbar'
import  Sidebar  from '@/components/Sidebar'
import  RecentGigs  from '@/components/RecentGigs'
import  UniversalSearchBar  from '@/components/UniversalSearchBar'

export default function MarketplacePage() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1">
        {/* Navbar */}
        <Navbar />

        {/* Marketplace Content */}
        <div className="p-6">
          {/* Search Bar */}
          <UniversalSearchBar placeholder="Search marketplace..." />

          {/* Marketplace Items (To be implemented) */}
          <div>
            {/* Display marketplace items here */}
          </div>
        </div>

        {/* Recent Gigs (Optional) */}
        <RecentGigs />
      </div>
    </div>
  )
}
