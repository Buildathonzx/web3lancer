import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import UniversalSearchBar from "@/components/UniversalSearchBar";
import RecentGigs from "@/components/RecentGigs";

export default function BuyersPage() {
  // Placeholder for buyer data
  const buyers = [
    { id: 1, name: "John Doe", location: "New York", recentPurchase: "Logo Design" },
    { id: 2, name: "Jane Smith", location: "London", recentPurchase: "Web Development" },
    // Add more buyer data as needed
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      {/* <Sidebar /> */}

      {/* Main content */}
      <div className="flex-1">
        {/* Navbar */}
        {/* <Navbar /> */}

        {/* Content area */}
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4">Buyers</h1>

          {/* Search bar */}
          <UniversalSearchBar placeholder="Search buyers..." />

          {/* Buyer list */}
          <ul>
            {buyers.map((buyer) => (
              <li key={buyer.id} className="border-b py-2">
                {buyer.name} ({buyer.location}) - Recent Purchase: {buyer.recentPurchase}
              </li>
            ))}
          </ul>

          {/* Recent Gigs component (optional) */}
          <RecentGigs />
        </div>
      </div>
    </div>
  );
}