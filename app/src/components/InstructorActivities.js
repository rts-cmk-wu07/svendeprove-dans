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
      const tokenResponse = await axios.post('http://localhost:4000/auth/token', {
        username: "instructor1",
        password: "1234",
      });

      const authToken = tokenResponse.data.token;

      const response = await axios.get('http://localhost:4000/api/v1/user', {
        headers: {
          'Authorization': `Bearer ${authToken}`,
        },
      });

      setRegistrations(response.data);
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