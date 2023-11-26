import React from "react";
import './Intro.css';
import Github from'../../img/github.png';
import LinkedIn from'../../img/linkedin.png';
import Instagram from'../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { useContext } from "react";

const Intro = () => {
  const theme=useContext(themeContext);
const darkMode=theme.state.darkMode
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{color:darkMode? 'white':''}}>Hy! I Am </span>
          <span>Zaryab Ahmed</span>
          <span>Frontend Developer 
            with high level of
             experience in web designing 
             and Development,Producing
              the Quality work </span>
        </div>

<button className="button i-button">Hire me</button>
<div className="i-icons">
    <a href="https://github.com/">
<img src={Github} alt="Github" />
</a>
<a href="https://www.linkedin.com/in/zaryab-ahmed-469a3a278/">
<img src={LinkedIn} alt="linkedin" />
</a>
<a href="https://www.instagram.com/syed_zaryab_ahmed/
">
<img src={Instagram} alt="instagram" />
</a>
</div>
      </div>
      <div className="i-right">
<img src={Vector1} alt="" />
<img src={Vector2} alt="" />
<img src={boy} alt="" />
<img src={glassesimoji} alt="" />
<div style={{top:'-4%',left:'68%'}}>
    <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
</div>
<div style={{top:'18rem', left:'0rem'}}>
<FloatingDiv image={thumbup}txt1='Best Design'txt2='Award'/>
</div>
      </div>
      

    </div>
  ); 
};
export default Intro;
