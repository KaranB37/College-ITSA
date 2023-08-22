import React, { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from './Firebase'; // Import your Firebase auth instance
import { Link } from 'react-router-dom'; // Import the Link component
import { useNavigate } from 'react-router-dom';



const ForgetPass = () => {

    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const handleForgotPassword = async () => {
      try {
        await sendPasswordResetEmail(auth, email);
        alert('Password reset email sent. Check your inbox.');
        navigate('/');
      } catch (error) {
        console.error('Password reset error:', error);
        alert('Error sending password reset email. Please try again.');
      }
    };

  return (
    <div className="min-h-screen bg-black-100 py-6 flex flex-col justify-center sm:py-12">
    <div className="relative py-3 sm:max-w-xl sm:mx-auto">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
      <div className="relative px-12 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
        <div className="max-w-md mx-auto">
          <div>
            <h1 className="text-2xl font-semibold">Password Reset</h1>
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
                <label
                  htmlFor="email"
                >
                
                </label>
              </div>
              <div className="relative">
                <button className="bg-blue-500 text-white rounded-md px-2 py-1" onClick={handleForgotPassword}>
                  Send
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
          </div>
        </div>
      </div>
    </div>
  </div>

    
  );
}

export default ForgetPass;
