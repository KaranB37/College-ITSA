import React, { useState } from 'react';
import { auth } from './Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth'; // Corrected import
import { Link } from 'react-router-dom'; // Import the Link component
import { useNavigate } from 'react-router-dom';

import bg from "../img/bg.png";


const Login = ({ setAuthenticated }) => {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setAuthenticated(true);
      navigate('/profile');
    } catch (error) {
      console.error('Login error:', error);
  
      if (error.code === 'auth/user-not-found') {
        alert('User not found. Please check your email or sign up.');
      } else if (error.code === 'auth/wrong-password') {
        alert('Invalid password. Please check your password and try again.');
      } else {
        alert('An error occurred during login. Please try again later.');
      }
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center"  style={{ backgroundImage: `url(${bg})` }}>
    <div className="relative py-3 sm:max-w-xl sm:mx-auto">
      <div className="absolute inset-0 shadow-lg bg-gradient-to-r from-blue-300/80 to-teal-600/80 via-emerald-700/80 to-fuchsia-500/80 transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
      <div className="relative px-12 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
        <div className="max-w-md mx-auto">
          <div>
            <h1 className="text-2xl font-semibold">Login</h1>
          </div>
          <div className="divide-y divide-gray-200">
            <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
              <div className="field">
                <input
                  autoComplete="off"
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="email"></label>
              </div>
              <div className="field">
                <input
                  autoComplete="off"
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="password"></label>
              </div>
              <div className="relative">
                <button className="bg-blue-500 text-white rounded-md px-2 py-1" type="submit" onClick={handleLogin}>
                  Login
                </button>
              </div>
            </div>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Don't have an account?{' '}
              <Link
                to="/Signup"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Click here
              </Link>
            </p>
            <Link
              to="/ForgetPass"
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Forgot Password!
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Login;
