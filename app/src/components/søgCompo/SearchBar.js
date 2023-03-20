import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="pl-4 pr-5 pt-3 pb-7 relative">
      <input
        type="text"
        placeholder="Søg for activiteter..."
        className="w-full p-3 bg-gray-400 bg-opacity-30 text-white rounded pr-12"
        value={searchTerm}
        onChange={handleChange}/>
      <div className="absolute  bottom-2 right-4 h-full w-12 flex items-center justify-center">
        <AiOutlineSearch size={30} color="#fff" />
      </div>
    </div>
  );
};

export default SearchBar;
