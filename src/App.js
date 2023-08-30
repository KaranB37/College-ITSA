import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Carousel from './components/Carousel';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Card from './components/Card';
import Gallery from './components/Gallery';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import ForgetPass from './components/ForgetPass';
import SplashScreen from './components/SplashScreen';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import PrivateRoute from './components/PrivateRoute'; // Import the PrivateRoute component
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is authenticated
        setAuthenticated(true);
      } else {
        // User is not authenticated
        setAuthenticated(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
  
      <Route path="/" element={<Carousel />} />
      <Route
      path="/Signup"
      element={<Signup setAuthenticated={setAuthenticated} />}
    />
    <Route
    path="/Login"
    element={<Login setAuthenticated={setAuthenticated} />}
  />
  <Route path="/Card" element={<Card />} />
  <Route path="/Gallery" element={<Gallery />} />
  <Route path="/Profile" element={<PrivateRoute authenticated={authenticated} redirectTo="/login" element={<Profile />} />} />
  <Route
      path="/ForgetPass"
      element={<ForgetPass/>}
    />
    </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

/* <Route path="/Card" element={<PrivateRoute authenticated={authenticated} redirectTo="/login" element={<Card />} />} /> */
