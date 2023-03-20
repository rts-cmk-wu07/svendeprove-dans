import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import UseScrollAlert from '../UseScrollAlert';
import { TokenContext } from '../TokenProvider';
import { Fade } from 'react-reveal';
import 'animate.css/animate.min.css';



const AktiviteterCard = () => {
  const [activities, setActivities] = useState([]);
  const [showAlert, setShowAlert] = UseScrollAlert();
  const { isLoggedIn, user } = useContext(TokenContext);
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
      <Fade bottom duration={1000} delay={500} distance="30px">
        <div className="flex flex-wrap justify-center pl-3 pr-3">
          {activities.map((activity) => (
            <Link key={activity.id} to={{pathname: `/aktivitetsdetaljer/${activity.id}`, state: {activity: activity}}} className="relative w-[356px] h-[344px] rounded-l-[40px] rounded-tr-[40px] overflow-hidden shadow-lg m-4">
              <img src={activity.asset.url} alt={activity.url} className="w-full h-full object-cover" />
              <div className="absolute bottom-0 w-full px-6 py-4 bg-purple-300 rounded-tr-[40px]  rounded-bl-lg bg-opacity-80 z-10 h-[96px]">
                <div className="font-normal text-black text-lg mb-2 ">{activity.name}</div>
                <p className="text-black font-normal text-lg">{activity.minAge}-{activity.maxAge} år</p>
              </div>
            </Link>
          ))}
        </div>
      </Fade>
      {!isLoggedIn && showAlert && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-75  z-50">
          <div className="bg-white p-8 ml-3 mr-3 rounded-lg">
            <p className="mb-6 font-normal text-lg text-center pb-2">Det ville være bedre at logge ind. Vil du logge ind nu?</p>
            <div className="flex flex-col justify-center w-full h-[54px] font-normal text-lg  rounded ">
              <button onClick={handleLoginClick} className="bg-purple-600 font-normal text-xl text-white mb-3 px-4 py-2 rounded">Log in</button>
              <button onClick={handleCancelClick} className="bg-gray-300 font-normal text-xl text-black  px-4 py-2 rounded">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AktiviteterCard;
