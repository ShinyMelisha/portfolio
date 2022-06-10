import React from 'react'
import "./feature.css"

export default function Feature() {
  return (
    <div className='feature'>
    <hr/>
    <div className='simpleText'>
        Features
    </div>
    
    <div className='largeText'>
        What I Do
    </div>
    <div className='boxBtnOne'>
        <button className='btnDesign'>
        <div className='mainTopic'>
        <a href='#' className='iconBox'>
        <i class="fa fa-align-justify"></i>
        </a>
        <br/>
                Business Stratagy
        </div>
        <div className='descriptionOne'>
              I throw myself down among the tall
        <br/> grass by the stream as I lie close to
        <br/> the earth.
        </div>
        </button>

        <button className='btnDesign'>
        <div className='mainTopic'>
        <a href='#' className='iconBox'>
        <b class="fa fa-bookmark"></b>
        </a>
        <br/>
             App Development
        </div>
        <div className='descriptionOne'>
            It uses a dictionary of over 200 Latin
            <br/>words, combined with a handful of
            <br/>model sentemce.
        </div>
        </button>

        <button className='btnDesign'>
        <div className='mainTopic'>
        <a href='#' className='iconBox'>
        <i class="fa fa-tv"></i>
        </a>
        <br/>
            App Development
        </div>
        <div className='descriptionOne'>
            I throw myself down among the tall
            <br/>grass by the stream as I lie close to
            <br/>the earth.   
        </div>
        </button>
    </div>
    <br/>
    <div className='boxBtnTwo'>
        <button className='btnDesign'>
        <div className='mainTopic'>
        <a href='#' className='iconBox'>
        <b class="fa-solid fa-file"></b>
        </a>
        <br/>
        Mobile App
        </div>
        <div className='descriptionTwo'>
            There are many variations of
            <br/>passages of Lorem Ipsum available,
            <br/>but the majority.
        </div>
        </button>
        
        <button className='btnDesign'>
        <div className='mainTopic'>
        <a href='#' className='iconBox'>
        <i class="fa fa-wifi"></i>
        </a>
        <br/>
        CEO Marketing
        </div>
        <div className='descriptionTwo'>
            Always free from repetition, injected
        <br/>humour, or non-characteristic
        <br/>words etc.
        </div>
        </button>

        <button className='btnDesign'>
        <div className='mainTopic'>
        <a href='#' className='iconBox'>
        <i class="fa fa-certificate"></i>
        </a>
        <br/>
        Personal Portfolio 
        <br/>April
        </div>
        <div className='descriptionTwo'>
            It uses a dictionary of over 200 Latin
            <br/>words, combined with a handful of 
            <br/>model sentence.
        </div>
        </button>
    </div>
    <hr/>
    </div>
  )
}
