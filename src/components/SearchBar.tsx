import React, { useState } from 'react';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query.trim()) {
      console.log(`Searching for: ${query}`);
      // 执行搜索逻辑
    }
  };

  return (
    <div className="flex items-center p-2 max-w-md mx-auto">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className="flex-grow focus:border-gray-300 focus:border-2 focus:outline-none rounded-l-full p-2 border "
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500  text-white px-4 py-2 rounded-r-full border border-gray-300 focus:border-2 border-1" 
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
