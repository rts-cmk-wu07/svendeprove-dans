import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import UseScrollAlert from '../UseScrollAlert';
import { useAuthContext } from '../AuthProvider';


const AktiviteterCard = () => {
  const [activities, setActivities] = useState([]);
  const [showAlert, setShowAlert] = UseScrollAlert();
  const { isLoggedIn } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:4000/api/v1/activities')
      .then((response) => {
        setActivities(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleLoginClick = () => {
    navigate('/logind');
  };

  const handleCancelClick = () => {
    setShowAlert(false);
  };

  return (
    <div>
      <h1 className='text-white font-normal pl-9 pt-9 text-4xl'>Aktiviteter</h1>
      <div className="flex flex-wrap justify-center">
        {activities.map((activity) => (
          <Link key={activity.id} to={{pathname: `/aktivitetsdetaljer/${activity.id}`, state: {activity: activity}}} className="relative w-[356px] h-[344px] rounded-l-[40px] rounded-tr-[40px] overflow-hidden shadow-lg m-4">
            <img src={activity.asset.url} alt={activity.url} className="w-full h-full object-cover" />
            <div className="absolute bottom-0 w-full px-6 py-4 bg-purple-500 opacity-80 z-10 h-[96px]">
              <div className="font-bold text-white text-xl mb-2 ">{activity.name}</div>
              <p className="text-white text-base">{activity.minAge}-{activity.maxAge} år</p>
            </div>
          </Link>
        ))}
      </div>
      {!isLoggedIn && showAlert && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg">
            <p className="mb-4">It would be better to log in. Do you want to log in now?</p>
            <div className="flex justify-between">
              <button onClick={handleLoginClick} className="bg-purple-600 text-white px-4 py-2 rounded">Log in</button>
              <button onClick={handleCancelClick} className="bg-gray-300 text-black px-4 py-2 rounded">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AktiviteterCard;
