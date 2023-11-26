import React from 'react'
import './Services.css';
import Heartemoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import humble from '../../img/humble.png'
import Card from '../Card/Card';
import Resume from './resume.pdf';
import { useContext } from "react";
import { themeContext } from "../../Context";

const Services =()=>{
    const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode
        return(
            <div className="services">
                <div className="awesome">
                    <span style={{color:darkMode? 'white':''}}>My Awesome</span>
                    <span>Services</span>
                    <spane>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Animi perspiciatis voluptatem rerum debitis quod .
                    </spane>
                    <a href={Resume} download>
                        
                    <button className='button s-button'>Download CV</button>
                    </a>
                    <div className="blur s-blur1" style={{background:"ABF1FF94"}}></div>        
                            </div>
            <div className="cards" >
               <div style={{left:'25rem'}}>
                    <Card
                     emoji={Heartemoji}
                     heading={'Design'}
                    detail={"Figma,Sketch,Canva,Adobe"}
                     />
                     </div>
                     <div style={{top :"12rem",left:"8rem"}}>
                        <Card
                         emoji={Glasses}
                         heading={'Developer'}
                        detail={"Html,Css,Javascript,Typescript,React"}
                        
                        />    </div>
<div style={{top:"19rem",left:"25rem"}}>
<Card

emoji={humble}
heading={'UI/UX'}
detail={
    "BEST UI/UX DEVELOPER For all ."
}

/>
</div>
<div className="blur s-blur2" style={{background:"var(--purple)"}}></div>
            </div>
            </div>
        )
}
export default Services