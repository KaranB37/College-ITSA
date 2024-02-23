import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Events from "./components/Events";
import Gallery from "./components/Gallery";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import ForgetPass from "./components/ForgetPass";
import SplashScreen from "./components/SplashScreen";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Contact from "./components/Contact";
import About from "./components/About";
import PrivateRoute from "./components/PrivateRoute";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { inject } from "@vercel/analytics";
import UnderDevelopment from "./components/UnderDevelopment";
import Navbar2 from "./components/Navbar2";
import Vission_Mission from "./components/Vission_Mission";
import Eventinfo from "./components/Eventinfo";
inject();

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    // Simulate some asynchronous operation
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Replace with your actual loading logic

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

  if (isLoading) {
    // Show the splash screen while loading
    return <SplashScreen />;
  }

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
        <Route path="/Events" element={<Events />} />
        <Route path="/Navbar2" element={<Navbar2 />} />
        <Route path="/about" element={<About />} />
        {/*<Route path="/contact" element={<Contact />} />*/}
        <Route path="/Gallery" element={<Gallery />} />
        <Route
          path="/Profile"
          element={
            <PrivateRoute
              authenticated={authenticated}
              redirectTo="/login"
              element={<Profile />}
            />
          }
        />
        <Route path="/ForgetPass" element={<ForgetPass />} />
        <Route path="/Vission_Mission" element={<Vission_Mission />} />
        <Route path="/Eventinfo" element={<Eventinfo />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
