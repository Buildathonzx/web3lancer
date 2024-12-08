'use client';

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import RecentGigs from "@/components/RecentGigs";
import UniversalSearchBar from "@/components/UniversalSearchBar";

export default function SellersPage() {
  return (
    <div className="flex">
      {/* Sidebar */}
      {/* <Sidebar /> */}

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-6">
        {/* Navbar */}
        {/* <Navbar /> */}

        {/* Content */}
        <div className="mt-6">
          {/* Search Bar */}
          <UniversalSearchBar placeholder="Search for sellers..." data={[]} />

          {/* Seller List or Information */}
          <div className="mt-4">
            {/* Replace with actual seller data and components */}
            <p>List of Sellers or Seller Information goes here...</p>
          </div>

          {/* Recent Gigs (Optional) */}
          <RecentGigs />
        </div>
      </div>
    </div>
  );
}
