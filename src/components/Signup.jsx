import React, { useState } from "react";
import { auth } from "./Firebase"; // Import 'auth' from Firebase
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import "../Styles/Signup.css";

const Signup = ({ setAuthenticated }) => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [CollegeId, setCollegeId] = useState("");
  const [Branch, setBranch] = useState("");
  const [Year, setYear] = useState("");
  const [Division, setDivision] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        Email,
        Password
      );
      const user = userCredential.user;

      // Store additional user data in Firestore
      const db = getFirestore();
      const userRef = doc(db, "ITSA", user.uid); // 'users' is the collection name
      const userData = {
        Email,
        FirstName,
        LastName,
        CollegeId,
        Branch,
        Year,
        Division,
      };

      await setDoc(userRef, userData);

      setAuthenticated(false);
      console.log("Sign Up done");
      navigate("/");
      // Handle successful signup (e.g., redirect)
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  return (
    <div className="Signup-container">
      <div className="bubble"></div>
      <div className="bubble1"></div>
      <div className="bubble2"></div>
      <div className="bubble3"></div>
      <div className="bubble4"></div>
      <div className="form-container2">
        <h1 className="form-title">Sign Up</h1>
        <hr />
        <div className="form-content">
          <div className="field">
            <input
              autoComplete="off"
              id="email"
              name="email"
              type="text"
              placeholder="Email address"
              value={Email}
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
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="password"></label>
          </div>
          <div className="field">
            <input
              autoComplete="off"
              id="firstName"
              name="firstName"
              type="text"
              placeholder="First Name"
              value={FirstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="firstName"></label>
          </div>
          <div className="field">
            <input
              autoComplete="off"
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Last Name"
              value={LastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor="lastName"></label>
          </div>
          <div className="field">
            <input
              autoComplete="off"
              id="collegeId"
              name="collegeId"
              type="text"
              placeholder="College ID"
              value={CollegeId}
              onChange={(e) => setCollegeId(e.target.value)}
            />
            <label htmlFor="collegeId"></label>
          </div>
          <div className="field">
            <select
              id="branch"
              name="branch"
              value={Branch}
              onChange={(e) => setBranch(e.target.value)}
            >
              <option value="">Select Branch</option>
              <option value="IT">IT</option>
              <option value="CS">CS</option>
              <option value="EXTC">EXTC</option>
              <option value="AIDS">AIDS</option>
            </select>
          </div>
          <div className="field">
            <select
              id="year"
              name="year"
              value={Year}
              onChange={(e) => setYear(e.target.value)}
            >
              <option value="">Select Year</option>
              <option value="FE">FE</option>
              <option value="SE">SE</option>
              <option value="TE">TE</option>
              <option value="BE">BE</option>
            </select>
          </div>
          <div className="field">
            <select
              id="division"
              name="division"
              value={Division}
              onChange={(e) => setDivision(e.target.value)}
            >
              <option value="">Select Division</option>
              <option value="A">A</option>
              <option value="B">B</option>
            </select>
          </div>
          <div className="button-container">
            <button
              className="login-button"
              type="submit"
              onClick={handleSignup}
            >
              Sign Up
            </button>
          </div>
        </div>
        <p className="text-sm font-light">
          Already have an account?{" "}
          <Link to="/Login" className="signup-link">
            Click here
          </Link>
        </p>
        <Link to="/ForgetPass" className="forgot-password-link">
          Forgot Password!
        </Link>
      </div>
    </div>
  );
};

export default Signup;
