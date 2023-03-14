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
      <h1>Aktiviteter</h1>
      <div className="flex flex-wrap justify-center">
        {activities.map((activity) => (
          <div key={activity.id} className="max-w-sm rounded overflow-hidden shadow-lg m-4">
            <img src={activity.image} alt={activity.title} className="w-full h-48 object-cover object-center" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{activity.title}</div>
              <p className="text-gray-700 text-base">{activity.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AktiviteterCard;
