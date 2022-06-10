import React from 'react';
import './topbar.css';
import {Link} from "react-router-dom";

export default function Topbar() {
  return (
    <div className='topbar'>
    <div className='top'>
    <div className='image'/>
     INBIO
    <div className="topCenter">
        
    <ul className='topList'>
        <li className="topListItem">
            <Link to="#" className='listBar'>HOME</Link> 
        </li>
        <li className="topListItem">
            <Link to="#" className='listBar'> FEATURES </Link> 
        </li>
        <li className="topListItem">
            <Link to="#" className='listBar'> PORTFOLIO </Link> 
        </li>
        <li className="topListItem">
            <Link to="#" className='listBar'> RESUME </Link> 
        </li>
        <li className="topListItem">
            <Link to="#" className='listBar'> CLIENTS </Link> 
        </li>
        <li className="topIcon topListItem">
            <Link to="#" className='listBar'> PRICING </Link> 
        </li>
        <li className="topIcon topListItem">
            <Link to="#" className='listBar'> BLOG </Link> 
        </li>
        <li className="topIcon topListItem">
            <Link to="#" className='listBar'> CONTACT </Link> 
        </li>
        <li className="topIcon topListItem">
            <Link to="#" className='listBar'> BUY NOW </Link> 
        </li>
        

    </ul>
    
    </div>
    </div>
    </div>    
  )
}
