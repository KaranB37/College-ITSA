import React, { useState } from "react";
import { auth } from "./Firebase"; // Import 'auth' from Firebase
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import bg from "../img/bg.png";

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
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 shadow-lg bg-gradient-to-r from-blue-300/80 to-teal-600/80 via-emerald-700/80 to-fuchsia-500/80 transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-12 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">Sign Up</h1>
              <hr></hr>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {" "}
              {/* Create a grid with two columns */}
              <div className="field">
                <input
                  type="email"
                  placeholder="Email"
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="field">
                <input
                  type="password"
                  placeholder="Password"
                  value={Password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="field">
                <input
                  type="text"
                  placeholder="First Name"
                  value={FirstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="field">
                <input
                  type="text"
                  placeholder="Last Name"
                  value={LastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="field">
                <input
                  type="text"
                  placeholder="College ID"
                  value={CollegeId}
                  onChange={(e) => setCollegeId(e.target.value)}
                />
              </div>
              <div className="field">
                <select
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
                <select value={Year} onChange={(e) => setYear(e.target.value)}>
                  <option value="">Select Year</option>
                  <option value="FE">FE</option>
                  <option value="SE">SE</option>
                  <option value="TE">TE</option>
                  <option value="BE">BE</option>
                </select>
              </div>
              <div className="field">
                <select
                  value={Division}
                  onChange={(e) => setDivision(e.target.value)}
                >
                  <option value="">Select Division</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                </select>
              </div>
            </div>
            <br />
            <div className="field">
              <button
                className="bg-blue-500 text-white rounded-md px-2 py-1"
                type="submit"
                onClick={handleSignup}
              >
                Sign Up
              </button>
            </div>
            <br />
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Already have an account?{" "}
              <Link
                to="/Login"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Click here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
