



import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AktiviteterCard = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/api/v1/activities')
      .then((response) => {
        setActivities(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1 className='text-white font-normal pl-9 pt-9 text-4xl'>Aktiviteter</h1>
      <div className="flex flex-wrap justify-center">
        {activities.map((activity) => (
            <div key={activity.id} className="relative w-[356px] h-[344px] rounded-l-[40px] rounded-tr-[40px] overflow-hidden shadow-lg m-4">
            <img src={activity.asset.url} alt={activity.url} className="w-full h-full object-cover" />
            <div className="absolute bottom-0 w-full px-6 py-4 bg-purple-500 opacity-80 z-10 h-[96px]">
              <div className="font-bold text-white text-xl mb-2 ">{activity.name}</div>
              <p className="text-white text-base">{activity.minAge}-{activity.maxAge} år</p>
            </div>
          </div>

        ))}
      </div>
    </div>
  );
};

export default AktiviteterCard;