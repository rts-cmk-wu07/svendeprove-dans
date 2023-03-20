import React, { useEffect, useState } from 'react';
import NavBar from '../NavBar';

const CalendarTeamOverview = () => {
  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
    fetchRegistrations();
  }, []);

  const fetchRegistrations = async () => {
    try {
      // Fetch the token
      const tokenResponse = await fetch('http://localhost:4000/auth/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },

      });

      const tokenData = await tokenResponse.json();
      const authToken = tokenData.token;

      // Fetch the registrations
      const response = (await fetch('http://localhost:4000/api/v1/user', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': ` ${authToken}`,
        },
      }));

      const data = await response.json();
      setRegistrations(data);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div>
      <h1 className='text-white font-normal pl-9 pt-9 text-4xl'>Junior class</h1>
      <ul>
        {registrations.map(registration => (
          <li key={registration.id}>
            {registration.firstName} {registration.lastName}
          </li>
        ))}
      </ul>
      <NavBar/>
    </div>
  );
};

export default CalendarTeamOverview;
