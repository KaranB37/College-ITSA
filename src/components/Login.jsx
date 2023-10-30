import React, { useState } from "react";
import { auth } from "./Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../Styles/Login.css";
import bg from "../img/about123.png";

const Login = ({ setAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setAuthenticated(true);
      navigate("/profile");
    } catch (error) {
      console.error("Login error:", error);

      if (error.code === "auth/user-not-found") {
        alert("User not found. Please check your email or sign up.");
      } else if (error.code === "auth/wrong-password") {
        alert("Invalid password. Please check your password and try again.");
      } else {
        alert("An error occurred during login. Please try again later.");
      }
    }
  };

  return (
    <div className="login-container">
      <div className="bubble"></div>
      <div className="bubble1"></div>
      <div className="bubble2"></div>
      <div className="bubble3"></div>
      <div className="bubble4"></div>
      <div className="form-container">
        <h1 className="form-title">Login</h1>
        <hr />
        <div className="form-content">
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
          <div className="button-container">
            <button
              className="login-button"
              type="submit"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </div>
        <p className="text-sm font-light">
          Don't have an account?{" "}
          <Link to="/Signup" className="signup-link">
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

export default Login;
