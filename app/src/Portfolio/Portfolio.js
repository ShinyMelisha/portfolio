import './portfolio.css'
import React from 'react'
import app from '../assets/app.jpg'
import service from '../assets/service.jpg'
import logodesign from '../assets/logodesign.jpg'
import landdesign from '../assets/landdesign.jpg'
import technologies from '../assets/technologies.jpg'
import technologies1 from '../assets/technologies1.jpg'
  
export default function Portfolio() {
  return (
    <div className='portfolio'>
    
    <div className='portsimpleText'>
        VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK
    </div>
    
    <div className='portlargeText'>
        My Portfolio
    </div>
    <div className='portBtnOne'>
    
        <button className='btndesign'>
        <img className="portImage" src={service}/>
        <div className='topic'>
                DEVELOPMENT
        </div>
        <div className='subtopicOne'>
              The services provide 
              <br/>for design
        </div>
        </button>

        <button className='btndesign'>
        <img className="portImage" src={app}/>
        <div className='topic'>
             APPLICATION
        </div>
        <div className='subtopicOne'>
              Mobile app landing 
            <br/>design & app
            <br/> maintain
        </div>
        </button>

        <button className='btndesign'>
        <img className="portImage" src={logodesign}/>
        <div className='topic'>
        
            PHOTOSHOP
        </div>
        <div className='subtopicOne'>
            Logo design creativity
            <br/> & Application 
        </div>
        </button>
    </div>
    <br/>
    <div className='portBtnTwo'>
        <button className='btndesign'>
        <img className="portImage" src={landdesign}/>
        <div className='topic'>
        FIGMA
        </div>
        <div className='subtopicTwo'>
            Mobile app landing 
            <br/>design & Services 
        </div>
        </button>
        
        <button className='btndesign'>
        <img className="portImage" src={technologies}/>
        <div className='topic'>
        WEB DESIGN
        </div>
        <div className='subtopicTwo'>
            Design for 
            <br/> technology & services
        </div>
        </button>

        <button className='btndesign'>
        <img className="portImage" src={technologies1}/>
        <div className='topic'>
        WEB DESIGN
        </div>
        <div className='subtopicTwo'>
           App for technology &
           <br/> services
        </div>
        </button>
    </div>
<hr/>
    </div>
  )
}
