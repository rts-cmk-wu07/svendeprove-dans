import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import splash from "../assests/splash-image.jpg"
import axios from 'axios';
import { useAuthContext } from '../AuthProvider';
// Adjust the path based on the location of AuthContext.js


const Login = (props) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { setIsLoggedIn } = useAuthContext();


    const handleChange = (e) => {
      const { name, value } = e.target;
      if (name === 'username') {
        setUsername(value);
      } else if (name === 'password') {
        setPassword(value);
      }
    };


    const handleSubmit = async (e) => {
      e.preventDefault();

      try {
        const response = await axios.post('http://localhost:4000/auth/token', {
          username,
          password,
        });

        if (response.data.token) {
          // Save the token to localStorage or another storage solution
          localStorage.setItem('authToken', response.data.token);

          // Update the isLoggedIn state
          setIsLoggedIn(true);

          // Redirect the user to the Welcome page
          navigate('/');
        } else {
          setError('Invalid credentials');
        }
      } catch (error) {
        console.error(error);
        setError('An error occurred while logging in');
      }
    };


  return (
    <div className="flex flex-col justify-center items-center h-screen">
        <div className="absolute  transform -translate-x-1/2 -translate-y-1/2 p-8 rounded-lg shadow-lg  bg-purple-900 bg-opacity-50 " style={{ width: '800px', height: '479.94px', transform: 'rotate(-27.19deg)' }}></div>
      <img src={splash} alt="" className="h-full w-full object-cover" />
      <div className="absolute z-10 p-8 rounded-lg shadow">
        <h1 className="text-5xl	 font-normal mb-4 text-white">Log ind</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
                placeholder='brugernavn'
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={handleChange}
              className="w-[332px] h-[50px] p-2 rounded border border-gray-300 shadow-sm"
            />
          </div>
          <div className="mb-4">
            <input
                placeholder='adgangskode'
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handleChange}
              className="w-[332px] h-[50px]  p-2 rounded border border-gray-300 shadow-sm"
            />
          </div>
          <button type="submit" className=' ml-10 w-[249px] h-[54px] bg-[#5E2E53]  text-[#E9E9E9] font-normal text-lgrounded'>
            Log in
            </button>
        </form>
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>
    </div>
  );
};

export default Login;
