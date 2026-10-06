import React from 'react'
import Header from './Header/Header';
import heart from './heart.png';
import image1 from './image1.jpg';
import './Hero.css'
import {motion} from 'framer-motion'

const hero = () => {
  const transition={type:'spring',duration: 3}
  return (
    <div className="hero">
      <img className="fitimg" src={image1} alt="" />
      <div className="left-h">
        <Header />
        <div className="the-best-ad">
          <motion.div
          initial={{left:'238px'}}
          whileInView={{left:'8px'}}
          transition={transition}
          ></motion.div>
          <span>the best fitness club in town</span>
          
        </div>
        <div className="hero-text">
          <div><span className='text-stroke'>shape </span><span>your</span></div>
          <div><span> ideal body</span></div>
          <div>
            <span>here we will help you to build your ideal body an live up your live to fullest</span>
          </div>
          <div className="figure">
            <div><span>+140</span><span>expert coaches</span></div>
            <div><span>+78</span><span>member joined</span></div>
            <div><span>+98</span><span>programs</span></div>
          </div>
          <div className="hero-button">
            <button className="btn">get started</button>
            <button className="btn">learn more</button>
          </div>
        </div>
      </div>

      <div className="right-h">
        <div className="btn">join now</div>
        <motion.div
         initial={{right:'40px'}}
         whileInView={{right:'130px'}}
         transition={transition}
         className='heart-rate'
        >
        <img src={heart} alt="" />
        <div>heart rate</div>
        <div>178</div>
    
      </motion.div>
      </div>
    </div>
  )
}

export default hero
