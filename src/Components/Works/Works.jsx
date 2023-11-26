import React from 'react';
import "./Works.css";
import upwork from "../../img/Upwork.png";
import fiver from "../../img/fiverr.png";
import amazon from"../../img/amazon.png";
import shopify from"../../img/Shopify.png";
import faceebook from "../../img/Facebook.png";
import { useContext } from "react";
import { themeContext } from "../../Context";


const Works = () => {
  const theme=useContext(themeContext);
  const darkMode=theme.state.darkMode;
  return (
    
    <div className="work">
      <div className="awesome">
        <span style={{color:darkMode? 'white':''}}>Works For All These</span>
        <span>Brands & Clients</span>
        <spane>
       Lorem ipsum dolor, sit amet consectetur adipisicing 
       <br /> maxime est suscipit, quis, velit optio, hic 
       <br /> aspernatur quaerat, voluptatem repellat 
       <br/>voluptatum aperiam. 
        </spane>

        <button className="button s-button">Hire Me</button>

        <div className="blur s-blur" style={{ background: "#ABE1FF94" }}>

        </div>
        </div>
        <div className="r-sight">
          <div className="w-mainCircle">
            <div className="w-secCircle">
              <img src={upwork} alt="" />
            </div>
            <div className="w-secCircle">
<img src={fiver} alt="" />
          </div>
          <div className="w-secCircle">
<img src={amazon} alt="" />
          </div>
          <div className="w-secCircle">
<img src={shopify} alt="" />
          </div>
          <div className="w-secCircle">
<img src={faceebook} alt="" />
          </div>
        </div>
        <div className="w-backCircle blueCircle"></div> 
        <div className="w-backCircle yellowCircle"></div> 
     
    </div>
     </div>



  );
};

export default  Works
 