import React, { useState, useEffect, useRef } from 'react';

interface SearchResult {
  id: string;
  title: string;
  // Add other relevant properties as needed
}

interface UniversalSearchBarProps {
  placeholder?: string;
  data: SearchResult[]; // Pass data as a prop
  onSearch?: (searchTerm: string) => void; // Callback for search events
}

const UniversalSearchBar: React.FC<UniversalSearchBarProps> = ({ placeholder = "Search...", data, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      const filteredResults = data.filter((item) =>
        item.title.toLowerCase().includes(newSearchTerm.toLowerCase())
      );
      setSearchResults(filteredResults);
      setIsDropdownOpen(filteredResults.length > 0);

      // Call the onSearch callback if provided
      if (onSearch) {
        onSearch(newSearchTerm);
      }
    }, 300);
  };

  useEffect(() => {
    if (searchTerm === '') {
      setSearchResults([]);
      setIsDropdownOpen(false);
      if (onSearch) {
        onSearch(''); // Notify parent of cleared search
      }
    }
  }, [searchTerm, onSearch]);


  return (
    <div className="relative">
      <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l-4.817 4.817a1 1 0 01-1.414 0l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          />
        </svg>
        <input
          type="text"
          placeholder={placeholder}
          className="ml-2 flex-grow outline-none"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      {isDropdownOpen && (
        <ul className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-md shadow-md max-h-60 overflow-y-auto">
          {searchResults.map((result) => (
            <li key={result.id} className="px-3 py-2 hover:bg-gray-100 cursor-pointer">
              {result.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UniversalSearchBar;
