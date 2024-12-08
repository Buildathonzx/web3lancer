import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import RecentGigs from '@/components/RecentGigs'

export default function FavoritesPage() {
  const favoriteItems = [] // Replace with your actual favorite items data

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-grow bg-gray-100">
        {/* Navbar */}
        <Navbar />

        <div className="px-8 py-6">
          <h2 className="text-2xl font-bold mb-4">Favorites</h2>

          {favoriteItems.length > 0 ? (
            <RecentGigs gigs={favoriteItems} /> 
          ) : (
            <div className="text-center text-gray-500">
              You haven't added any favorites yet.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
