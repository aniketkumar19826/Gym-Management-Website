import React from 'react'
import './Programs.css'
const programs = () => {
  return (
    <div className="programs" id='programs'>
        <div className="program-text">
            <div className='text-stroke'>explore our</div>
            <div>program</div>
            <div className='text-stroke'>to shape you</div>
        </div>
        <div className="programs-features">
          <div className="feature">
          <i class="fa-solid fa-dumbbell"></i>
            <span>strength training</span>
            <span>in this program,you are trained to improve your strength by many exercises</span>
            <div className="programs-btn">
            <button className="program-btn">join now</button>
            <i class="fa-solid fa-2x fa-arrow-right"></i>
            </div>
           
          </div>
          <div className="feature">
          <i class="fa-solid fa-3x fa-person-running"></i>
            <span>cardio training</span>
            <span>in this program,you are trained to do sequential move in 20-25 min range</span>
            <div className="programs-btn">
            <button className="program-btn">join now</button>
            <i class="fa-solid fa-2x fa-arrow-right"></i>
            </div>
            
          </div>
          <div className="feature">
          <i class="fa-solid fa-3x fa-fire-flame-simple"></i>
           <span>fat burning</span>
           <span>this program is suitable for you who wants to get rid of your fat</span>
           <div className="programs-btn">
            <button className="program-btn">join now</button>
            <i class="fa-solid fa-2x fa-arrow-right"></i>
            
            </div>
           
          </div>
          <div className="feature">
          <i class="fa-solid fa-3x fa-heart-crack"></i>
            <span>health fitness</span>
            <span>this program is designed for those who searches only for their body</span>
            <div className="programs-btn">
            <button className="program-btn">join now</button>
            <i class="fa-solid fa-2x fa-arrow-right"></i>
            </div>
         
          </div>
        </div>
    </div>
  )
}

export default programs
