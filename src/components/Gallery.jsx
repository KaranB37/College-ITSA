import React from 'react'
// import "../Component.css";
import "./Gallery.css";


import ansh from "../img/ansh.png";
import tree from "../img/tree.png";
import vp from "../img/vp.png";
import president from "../img/president.png";

import infra_H from "../img/infra_H.png";
import infra_H2 from "../img/infra_h2.png";
import doc_h from "../img/doc_H.png";
import doc_h2 from "../img/doc_h2.png";

import LR from "../img/LR.png";
import LR2 from "../img/LR2.png";
import Mag_H from "../img/Mag_H.png";
import Mag_H2 from "../img/mag_H2.png";

import pub_h from "../img/pub_h.png";
import pub_H2 from "../img/pub_H2png.png";
import tech_h1 from "../img/tech_h3.png";
import tech_h2 from "../img/tech_h4.png";

import ameya_infra_member from "../img/ameya_infra_member.png";
import aniket_infra_member from "../img/aniket_infra_member.png";
import rama_infra_mem from "../img/rama_infra_mem.png";
import sahil_infra_member from "../img/sahil_infra_member.png";


import diksha_creativity_member from "../img/diksha_creativity_member.png";
import nutan_creativity_member from "../img/nutan_creativity_member.png";
import prachi_creativity_member from "../img/prachi_creativity_member.png";
import swaranjith_creativity_member from "../img/swaranjith_creativity_member.png";


import megha_document_member from "../img/megha_document_member.png";
import prabha_document_member from "../img/prabha_document_member.png";
import siddhi_document_member from "../img/siddhi_document_member.png";
import soham_document_member from "../img/soham_document_member.png";

import kajal_tech_member from "../img/kajal_tech_member.png";
import arvind_tech_member from "../img/arvind_tech_member.png";
import sahil_publicity_member from "../img/sahil_publicity_member.png";
import shubham_publicity_member from "../img/shubham_publicity_member.png";



  

export default function Gallery() {
  return (
    

    <div className='team-gallery'>
    <button data-text="Awesome" class="button">
    <div class="container">
    <span class="actual-text text-4xl" style={{width: "22rem"}}>&nbsp;Our Team&nbsp;</span>
    <span class="hover-text" aria-hidden="true"></span>
    </div>
    </button>
 

<div class="gallery-container">
<div class="card" style={{width:"22rem" }}>
  <img src={president} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="text-center">Pranav Kholekar</p>
  <h5 class="card-title text-center">President</h5>
  </div>
</div>
<div class="card" style={{width:"22rem" }}>
  <img src={vp} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="text-center">Varad Sawantdesai</p>
  <h5 class="card-title text-center">Vice-President</h5>
  </div>
</div>
<div class="card" style={{width:"22rem" }}>
  <img src={ansh} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="text-center">Ansh Shetty</p>
  <h5 class="card-title text-center">General Secretary</h5>
  </div>
</div>
<div class="card" style={{width:"22rem" }}>
  <img src={tree} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="text-center">Harshal Chimane</p>
  <h5 class="card-title text-center">Treasurer</h5>
  </div>
</div>
</div>




<div class="gallery-container">
<div class="card" style={{width:"22rem" }}>
  <img src={tech_h2} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="text-center">Karan Vishwakarma</p>
  <h5 class="card-title text-center">Technical Head</h5>
  </div>
</div>
<div class="card" style={{width:"22rem" }}>
  <img src={tech_h1} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="text-center">Nikhil Mali</p>
  <h5 class="card-title text-center">Technical Head</h5>
  </div>
</div>
<div class="card" style={{width:"22rem" }}>
  <img src={pub_H2} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="text-center">Prachi Sanap </p>
  <h5 class="card-title text-center">Publicity Head</h5>
  </div>
</div>
<div class="card" style={{width:"22rem" }}>
  <img src={pub_h} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="text-center">Ranjan Padhey</p>
  <h5 class="card-title text-center">Publicity Head</h5>
  </div>
</div>
</div>



<div class="gallery-container">
<div class="card" style={{width:"22rem" }}>
  <img src={LR} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="text-center">Shruti Epili</p>
  <h5 class="card-title text-center">Ladies Representative</h5>
  </div>
</div>
<div class="card" style={{width:"22rem" }}>
  <img src={LR2} class="card-img-top" alt="..."/>
  <div class="card-body">
  <p class="text-center">Sanskruti Kadam</p>
  <h5 class="card-title text-center">Ladies Representative</h5>
  </div>
</div>
<div class="card" style={{width:"22rem" }}>
  <img src={Mag_H} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="text-center">Mitul Chavan</p>
    <h5 class="card-title text-center">Magzine Head</h5>
  </div>
</div>
<div class="card" style={{width:"22rem" }}>
  <img src={Mag_H2} class="card-img-top" alt="..."/>
  <div class="card-body">
  <h5 class="card-title text-center">Eshaan Vaity</h5>
    <p class="text-center">Dhiraj Chavan</p>
  </div>
</div>
</div>



<div class="gallery-container">
<div class="card" style={{width:"22rem" }}>
  <img src={infra_H} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="text-center">Krishna Pandey</p>
  <h5 class="card-title text-center">Infra Head</h5>
  </div>
</div>
<div class="card" style={{width:"22rem" }}>
  <img src={infra_H2} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="text-center">Mayuresh Navghane</p>
  <h5 class="card-title text-center">Infra Head</h5>
  </div>
</div>
<div class="card" style={{width:"22rem" }}>
  <img src={doc_h} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="text-center">Purva Chalke</p>
  <h5 class="card-title text-center">Documentation Head</h5>
  </div>
</div>
<div class="card" style={{width:"22rem" }}>
  <img src={doc_h2} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="text-center">Dhiraj Chavan</p>
  <h5 class="card-title text-center">Documentation Head</h5>
  </div>
</div>
</div>




<div class="gallery-container">
<div class="card" style={{width:"22rem" }}>
  <img src={megha_document_member} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="text-center">Megha </p>
  <h5 class="card-title text-center">Documentation Member</h5>
  </div>
</div>
<div class="card" style={{width:"22rem" }}>
  <img src={siddhi_document_member} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="text-center">Siddhi Kargutkar</p>
  <h5 class="card-title text-center">Documentation Member</h5>
  </div>
</div>
<div class="card" style={{width:"22rem" }}>
  <img src={prabha_document_member} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="text-center">Prabha</p>
  <h5 class="card-title text-center">Documentation Member</h5>
  </div>
</div>
<div class="card" style={{width:"22rem" }}>
  <img src={soham_document_member} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="text-center">Soham</p>
  <h5 class="card-title text-center">Documentation Member</h5>
  </div>
</div>
</div>


<div class="gallery-container">
<div class="card" style={{width:"22rem" }}>
  <img src={kajal_tech_member} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="text-center">Kajal </p>
  <h5 class="card-title text-center">Technical Member</h5>
  </div>
</div>
<div class="card" style={{width:"22rem" }}>
  <img src={arvind_tech_member} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="text-center">Arvind</p>
  <h5 class="card-title text-center">Technical Member</h5>
  </div>
</div>
<div class="card" style={{width:"22rem" }}>
  <img src={shubham_publicity_member} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="text-center">Shubham Gavhane</p>
  <h5 class="card-title text-center">Publicity Member</h5>
  </div>
</div>
<div class="card" style={{width:"22rem" }}>
  <img src={sahil_publicity_member} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="text-center">Sahil</p>
  <h5 class="card-title text-center">Publicity Member</h5>
  </div>
</div>
</div>




<div class="gallery-container">
<div class="card" style={{width:"22rem" }}>
  <img src={sahil_infra_member} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="text-center">Sahil </p>
  <h5 class="card-title text-center">Infra Member</h5>
  </div>
</div>
<div class="card" style={{width:"22rem" }}>
  <img src={ameya_infra_member} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="text-center">Ameya</p>
  <h5 class="card-title text-center">Infra Member</h5>
  </div>
</div>
<div class="card" style={{width:"22rem" }}>
  <img src={rama_infra_mem} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="text-center">Rama</p>
  <h5 class="card-title text-center">Infra Member</h5>
  </div>
</div>
<div class="card" style={{width:"22rem" }}>
  <img src={aniket_infra_member} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="text-center">Aniket</p>
  <h5 class="card-title text-center">Infra Member</h5>
  </div>
</div>
</div>


<div class="gallery-container">
<div class="card" style={{width:"22rem" }}>
  <img src={diksha_creativity_member} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="text-center">Diksha </p>
  <h5 class="card-title text-center">Creativity Member</h5>
  </div>
</div>
<div class="card" style={{width:"22rem" }}>
  <img src={nutan_creativity_member} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="text-center">Nutan</p>
  <h5 class="card-title text-center">Creativity Member</h5>
  </div>
</div>
<div class="card" style={{width:"22rem" }}>
  <img src={prachi_creativity_member} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="text-center">Prachi</p>
  <h5 class="card-title text-center">Creativity Member</h5>
  </div>
</div>
<div class="card" style={{width:"22rem" }}>
  <img src={swaranjith_creativity_member} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="text-center">Swaranjith</p>
  <h5 class="card-title text-center">Creativity Member</h5>
  </div>
</div>
</div>
</div>

)
}

