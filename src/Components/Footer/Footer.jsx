import React from "react";
import "./Footer.css";
import wave from "../../img/wave.png"
import Insta from'@iconscout/react-unicons/icons/uil-instagram'
import Facebook from'@iconscout/react-unicons/icons/uil-facebook'
import Github from'@iconscout/react-unicons/icons/uil-github'
const Footer =()=>{
return(
    <div className="footer">
        <img src={wave} alt="" style={{width:'100%'}} />
        <div className="f-content">
            <span>syedzaryab495@gmail.com</span>
            <div className="f-icon">
                <Insta color="white" size='3rem'/>
                <Facebook  color="white" size='3rem'/>
                <Github  color="white" size='3rem'/>   

            </div>

        </div>
    </div>
)
}
export default Footer