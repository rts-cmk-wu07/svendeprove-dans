import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TokenContext } from '../TokenProvider';
import NavBar from '../NavBar';
import swal from 'sweetalert';
import { Slide } from 'react-reveal';
import axios from 'axios';

const CalendarDefault = () => {
  const [activities, setActivities] = useState([]);
  const { isLoggedIn, user } = useContext(TokenContext);
  const navigate = useNavigate();



  useEffect(() => {
  const fetchActivities = async () => {
    if (isLoggedIn && user.userId) {
      try {
        const response = await axios(`http://localhost:4000/api/v1/users/${user.userId}`, {

          headers: {
            "Authorization": "Bearer " + user.token,
          },
        });
        console.log(response)
        setActivities(response.data.activities);
      } catch (error) {
        console.error(error);
      }
    }
  };
fetchActivities()
  }, []);

console.log(activities);

  const handleErrorMessageClose = () => {
    navigate('/aktiviteter');
  }

  if (!isLoggedIn) {
    swal({
      title: "Fejl",
      text: "Du skal være logget ind for at se kalenderen.",
      icon: "error",
      buttons: {
        ok: {
          text: "OK",
          value: true,
          visible: true,
          className: "",
          closeModal: true,
        },
      },
    }).then((value) => {
      if (value) {
        handleErrorMessageClose();
      }
    });
    return null;
  }


  return (
    <div>

      <Slide bottom duration={1000} delay={500} distance="30px">
        <h1 className='text-white font-normal pl-9 pt-9 text-4xl'>kalender</h1>

        <div>
          {activities && activities.map(activity => (
            <div className="flex flex-wrap justify-center pt-[30px] pl-4 pr-4" key={activity.id}>
              <Link to={"/aktivitetsdetaljer/:id"} className="bg-white h-[107px] mb-5  w-[356px] rounded-lg shadow-md">
                <div className='flex flex-col justify-center'>
                  <h2 className="text-black font-normal text-center text-4xl">{activity.name}</h2>
                  <p className="text-black font-normal text-center  text-lg">{activity.weekday} {activity.time}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </Slide>

      <NavBar/>
    </div>
  );
};

export default CalendarDefault;

