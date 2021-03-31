import React from 'react';
import web from '../src/images/network.png';
import {NavLink} from 'react-router-dom';
import Common from './Common';
 const About7=()=>{
 return(<>
<Common name='Welcome To About Page' 
imgsrc={web} 
visit='/Contact7' 
btnname="Contact Now"/>
 </>)
 }
 export default About7;