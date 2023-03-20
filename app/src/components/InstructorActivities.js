import React, { useEffect, useState } from 'react';
import { useAuthContext } from '../AuthProvider';
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
        body: JSON.stringify({
          username: "instructor1",
          password: "1234",
        }),
      });

      const tokenData = await tokenResponse.json();
      const authToken = tokenData.token;

      // Fetch the registrations
      const response = await fetch('http://localhost:4000/api/v1/user', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`,
        },
      });

      const data = await response.json();
      setRegistrations(data);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div>
      <h1>Calendar: Team Overview</h1>
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