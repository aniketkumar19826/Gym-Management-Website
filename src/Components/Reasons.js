import React from 'react'
import './Reasons.css'
import Gymimg1 from './Gymimg1.jpg'
import Gymimg2 from './Gymimg2.jpg'
import Gymimg3 from './Gymimg3.jpg'
import Partner1 from './Partner1.jpeg'
import Partner2 from './Partner2.jpeg'
const Reasons = () => {
  return (
    <div className="reasons" id='reasons'>
        <div className="left-r">
            <div className="gym-img1"><img src={Gymimg1} alt="" /></div>
            <div className="gym-img"><img src={Gymimg2} alt="" /></div>
            <div className="gym-img"><img src={Gymimg3} alt="" /></div>
        </div>
        <div className="right-r">
            <span>some reasons</span>
            <div className="sub-heading">
                <span className="text-stroke">why</span>
                <span className="text-r">choose us</span>
            </div>
            <div className="lists-r">
                <div className="list-r">
                <i class="fa-solid fa-check-to-slot"></i>
                <span className='reason-text'>over 1400+ expertcoaches</span>
                </div>
                <div className="list-r">
                <i class="fa-solid fa-check-to-slot"></i>
                <span className='reason-text'>train smarter nad faster than before</span>
                </div>
                <div className="list-r">
                <i class="fa-solid fa-check-to-slot"></i>
                <span className='reason-text'>1 free program for new member</span>
                </div>
                <div className="list-r">
                <i class="fa-solid fa-check-to-slot"></i>
                <span className='reason-text'>reliable partner</span>
                </div>
            </div>
            <div className="reason-partner">
                <div className="partner-text">
                    our partner
                </div>
                <div className="partner-img">
                    <img src={Partner1} alt="" />
                    <img src={Partner2} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Reasons
