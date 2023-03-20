import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import splash from "../assests/splash-image.jpg"
import axios from 'axios';
import { TokenContext } from '../TokenProvider';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Slide } from 'react-reveal';
import { css } from '@emotion/react';
import ClipLoader from "react-spinners/ClipLoader";





const override = css`
  display: block;
  margin: 0 auto;
`;

const Login = (props) => {
  const { setUser, setIsLoggedIn } = useContext(TokenContext)
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true);

    try {
      const response = await axios.post('http://localhost:4000/auth/token', {
        username: e.target.username.value,
        password: e.target.password.value,
      });

      if (response.data.token) {

        localStorage.setItem('authToken', response.data.token);
        localStorage.setItem('userId', response.data.userId);

        setIsLoggedIn(true);

        // Set user object with role property
        setUser( response.data );

        // Display the welcome message based on the user's role
        toast.success(`Velkommen, ${username}! Du er logget ind som ${response.data.userId}.`);

        // Redirect the user to the Welcome page
        navigate('/');
      } else {
        setError('Invalid credentials');
      }
    } catch (error) {
      console.error(error);
      setError('An error occurred while logging in');
    }
   finally {
      setIsLoading(false);
    }
  };



  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="absolute  transform -translate-x-1/2 -translate-y-1/2 p-8 rounded-lg shadow-lg bg-purple-900 bg-opacity-50 " style={{ width: '800px', height: '479.94px', transform: 'rotate(-27.19deg)'}}></div>
      <Slide top duration={1000} delay={500} distance="30px">
        <img src={splash} alt="" className="h-full w-full object-cover" />
        <div className="absolute z-10 p-8 rounded-lg shadow">
          <h1 className="text-5xl font-normal mb-4 text-white">Log ind</h1>
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
                className="w-[332px] h-[50px] p-2 rounded border border-gray-300 shadow-sm"
              />
            </div>
          <button type="submit" className=' ml-10 w-[249px] h-[54px] bg-[#5E2E53] text-[#E9E9E9] font-normal text-lgrounded' disabled={isLoading}>
              {isLoading ? <ClipLoader css={override} size={20} color={"#fff"} loading={isLoading} /> : 'Log in'}
              </button>
        </form>
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>
      </Slide>
    </div>
  );
};

export default Login;

