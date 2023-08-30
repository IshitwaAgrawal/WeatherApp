import React, { useState } from 'react';

const SearchWeather = ({ onSearch }) => {
  const [location, setLocation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(location);
    setLocation('');
  };

  return (
    <div className="bg-blue-900 p-6 my-0.5">
      <form onSubmit={handleSubmit} className="flex items-center justify-center">
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter a location..."
          className="py-2 px-4 mr-2 w-48 bg-blue-800 text-white placeholder-gray-400 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        />
        <button
          type="submit"
          className="bg-white text-blue-900 hover:bg-blue-100 px-4 py-2 rounded-lg transition duration-300 ease-in-out"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchWeather;
