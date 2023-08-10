import React from 'react';
import "./Register.css"
import file from "../img/file.mp4"

const Register = () => {
  return (
    <div class="bg-img">
    <video  className="videoTag" autoPlay loop muted>
    <source src={file} type="video/mp4" />
    </video>
    <div class="content">
       <header>Registration Form</header>
       <form action="#">
          <div class="field">
             <span class="fa fa-user"></span>
             <input type="text" required placeholder="Email or Phone"/>
          </div>
          <div class="field space">
          <span class="fa fa-user"></span>
          <input type="text" required placeholder="College ID"/>
          </div>
          <div class="field space">
          <span class="fa fa-user"></span>
          <input type="text" required placeholder="Year ex. TE IT B"/>
          </div>

          <div class="pass">
          
          </div>
          <div class="field">
             <input type="submit" value="Register!"/>
          </div>
       </form>
    </div>
 </div>
  );
};

export default Register;
