import React from "react";
import "./Navbar.css";
// import Toogle from "../Toogle/Toogle";



const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Zaryab</div>
        {/* <Toogle/> */}
       
        
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>Home</li>
            <li>Service</li>
            <li>Experience</li>
            <li>Portfolio</li>
            <li>Testonomial</li>
          </ul>
        </div>

        <button className="button n-button"> Contact</button>
        {/* <div className="blur" style={{background :"rgb(288 210 255 )"}}>  </div> */}

{/* <div className="blur" style={{
    background:'#C1F5FF',
    top:'17rem',
    width:'21rem',
    height:'11rem'
}}></div> */}
      
      </div>
    </div>
  );
};
export default Navbar;
