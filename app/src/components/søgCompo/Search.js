import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import { Slide } from 'react-reveal';

const Search = () => {
  const [activities, setActivities] = useState([]);
  const [filteredActivities, setFilteredActivities] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/api/v1/activities')
      .then((response) => {
        setActivities(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = activities.filter((activity) =>
      activity.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredActivities(filtered);
  };

  return (
    <div className="p-4">
      <Slide right duration={1000} delay={200} >
      <h1 className="text-white font-normal pl-4 pt-4 text-4xl">Søg</h1>
      <SearchBar onSearch={handleSearch} />
        <div className="flex flex-wrap justify-center">
          {filteredActivities.length > 0 ? (
            filteredActivities.map((activity) => (
              <Link key={activity.id} to={{pathname: `/aktivitetsdetaljer/${activity.id}`, state: {activity: activity}}} className="relative w-[356px] h-[344px] rounded-l-[40px] rounded-tr-[40px] overflow-hidden shadow-lg m-4">
                <img src={activity.asset.url} alt={activity.url} className="w-full h-full object-cover" />
                <div className="absolute bottom-0 w-full px-6 py-4 bg-purple-500 opacity-80 z-10 h-[96px]">
                  <div className="font-bold text-white text-xl mb-2 ">{activity.name}</div>
                  <p className="text-white text-base">{activity.minAge}-{activity.maxAge} år</p>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-white mt-4">Der blev ikke fundet nogle aktiviteter. Prøv at søge efter noget andet.</p>
          )}
        </div>
      </Slide>
    </div>
  );
};

export default Search;
