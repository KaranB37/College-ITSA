import React from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import dummy from "../img/dummy.png";


// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  const fetchUserData = async (userId) => {
    const db = getFirestore();
    const userRef = doc(db, 'ITSA', userId); // Replace 'auth' with your authentication object
    
    try {
      const userDoc = await getDoc(userRef);
      if (userDoc.exists()) {
        const userData = userDoc.data();
        setUserData(userData);
      } else {
        console.log('User document does not exist');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
  
  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      fetchUserData(user.uid);
    }
  }, []);
   // Empty dependency array ensures the effect runs once after initial render
  
  // const FirstName = userData.FirstName;
  // const LastName = userData.LastName;
  // const Email = userData.Email;
  
  const handleSignOut = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      console.log('Signed out');
      navigate('/');
      // Handle any additional actions after sign-out (e.g., redirect)
    } catch (error) {
      console.error('Sign-out error:', error);
    }
  };

  return (
    <div class="min-h-screen flex items-center justify-center bg-gray-900">
    {userData && (
    <div class="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow-lg flex flex-col items-center">
  <div class="flex justify-end px-4 pt-4">
    
  </div>
  <div
    id="dropdown"
    class="z-10 hidden text-base list-none bg-gray-800 divide-y divide-gray-700 rounded-lg shadow w-44"
  >
    <ul class="py-2" aria-labelledby="dropdownButton">
    
    </ul>
  </div>
  <div class="flex flex-col items-center pb-10">
    <img
      class="w-24 h-24 mb-3 rounded-full shadow-lg"
      src={dummy}
      alt=""
    />

    <h5 class="mb-1 text-xl font-medium text-white"> Welcome {userData.FirstName} {userData.LastName}.</h5>


    <span class="text-sm text-gray-400"> {userData.Email}</span>
    <span class="text-sm text-gray-400">  </span>
    <div class="flex mt-4 space-x-3 md:mt-6">
      <button onClick={handleSignOut}
        class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
      >
        Log out
      </button>
     
    </div>
  </div>
</div>
)}
</div>

 
  );
};

export default Profile;
