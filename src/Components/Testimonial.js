import React from 'react'
import './Testimonial.css'
import Image1 from './Image1.jpeg'

const Testimonial = (props) => {
  return (
    <>
    <div className="testimonial" id='testimonials'>
        <div className="left-t">
        <div className="testimonial-head">testimonial</div>
        <div className="testimonial-text4">
        <div className="text-stroke">what yhey</div>
        <div className="test-text1">say about us</div>
        </div>
        
        <div className="test-text2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis ipsum voluptatibus expedita nisi? Illo dicta reprehenderit saepe 
        totam placeat repudiandae maiores praesentium ratione ex veritatis. </div>
        <div className="test-appr">
            <div className="desc4">
            <div className="name">john kevin {props.index}</div>
            <div className="role">coach</div>
            </div>
            <div className="arrow">
            <div className="left-arrow">
                <i className="fa-solid  fa-arrow-left"></i>
                </div>
                <div className="right-arrow">
                <i className="fa-solid fa-arrow-right"></i>
                </div>
                
            </div>
            
        </div>
        </div>
        <div className="right-t">
          <div className="boxes">
          <div className="box1"></div>
          <div className="box2"></div>
          <div className="box3">
            <img src={Image1} alt="" />
          </div>
          </div>
        </div>
        
    </div>
    
  </>
  )
}

export default Testimonial
