import React from 'react'
import Typical from 'react-typical'
import pdf from './W.S.M.S.MELISHA FERNANDO_CV1.pdf';
import './Profile.css'

export default function Profile() {
  return (
    <div className='profile-container'>
      <div className='profile-parent'>
          <div className='profile-details'>
              <div className='colz'>
                <div className='colz-icon'>
                   
                  <a href='#' className='icon'>
                      <i className='fa fa-facebook-square'></i>
                  </a>
                  <a href='#' className='icon'>
                      <i className='fa fa-linkedin-square'></i>
                  </a>
                  <a href='#' className='icon'>
                      <i className="fa fa-instagram"></i>
                  </a>
                  <a href='#' className='icon'>
                      <i className='fa fa-github-square'></i>
                  </a>
                  </div>
              </div>
              <div className='profile-details-name'>
                  <span className='primary-text'>
                      {" "}
                      Hello, I'm <span className='highlighted-text'>Shiny Fernando</span>
                      
                  </span>
              </div>
              <div className='profile-details-role'>
                  <span className='primary-text'>
                      {" "}
                      <h2 className='h2'>
                      {" "}
                          <Typical
                          loop={Infinity}
                          steps={[
                              "Creative developer",
                              1000,
                              "React/React Native",
                              1000,
                              "Frontend developer",
                              1000,
                              "Mobile app developer",
                              1000,
                              ]}
                          />
                      </h2>
                  <span className='profile-role-tagline'>
                  I use animation as a third dimension by which to simplify experiences<br/>
                  and kuiding thro each and every interaction.I'm not adding motion just to<br/>
                  spruce things up, but doing itin ways that.
                  </span>
                  
                  </span>
              </div>
              <div className='profile-options'>
                  <button className='btn primary-btn'>
                      {" "}
                      Hire me{" "}
                  </button>

                  <a href={pdf} download='W.S.M.S.MELISHA FERNANDO_CV1.pdf'>
                  <button className='btn highlighted-btn'>Get resume</button>
                  </a>
                 
              </div>
          </div>  
        
      </div>
      <div className='profile-picture'>
            <div className='profile-picture-background'></div>
            </div>  
    </div>
  );
}