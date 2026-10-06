import React from 'react'
import './Plans.css'
const Plans = () => {
    return (
        <div className="plans" id='plans'>
            <div className="plan-text">
                <div className="text-stroke">ready to start</div>
                <div className="heading-text">your journey</div>
                <div className="text-stroke">with us</div>
            </div>
            <div className="plans-detail">
                <div className="plan">
                <i class="fa-regular fa-2x fa-heart-circle-check"></i>
                    <div className="head-text">basic plans</div>
                    <div className="price">$ 25</div>
                    <div className="plan-desc">
                        <span className="plan-check">
                            <span>
                                <i class="fa-solid fa-user-check"></i>
                            </span>
                            <span> 2 hours of exercises</span>
                           
                        </span>
                        <span className="plan-check">
                            <span>
                                <i class="fa-solid fa-user-check"></i>
                            </span>
                            <span>free consultation to coaches</span>
                            
                        </span>
                        <span className="plan-check">
                            <span>
                                <i class="fa-solid fa-user-check"></i>
                            </span>
                            <span>access to the community</span>
                            
                        </span>
                    </div>
                    <div className="plan-btn">
                        <div className="plan-btn1">see more benefit</div>
                        <i class="fa-solid  fa-arrow-right"></i>
                    </div>
                    <button className="plan-btn2">join now</button>
                </div>
                <div className="plan">
                <i class="fa-solid fa-crown"></i>
                    <div className="head-text">premium plans</div>
                    <div className="price">$ 30</div>
                    <div className="plan-desc">
                        <span className="plan-check">
                            <span>
                                <i class="fa-solid fa-user-check"></i>
                            </span>
                            <span> 5 hours of exercises</span>
                           
                        </span>
                        <span className="plan-check">
                            <span>
                                <i class="fa-solid fa-user-check"></i>
                            </span>
                            <span>  free consultation to coaches</span>
                          
                        </span>
                        <span className="plan-check">
                            <span>
                                <i class="fa-solid fa-user-check"></i>
                            </span>
                            <span> access to member</span>
                           
                        </span>

                    </div>
                    <div className="plan-btn">
                        <div className="plan-btn1">see more benefit</div>
                        <i class="fa-solid  fa-arrow-right"></i>

                    </div>
                    <button className="plan-btn2">join now</button>
                    <div />
                </div>
                <div className="plan">
                <i class="fa-solid fa-dumbbell"></i>
                
                    <div className="head-text">pro plans</div>
                    <div className="price">$ 45</div>
                    <div className="plan-desc">
                        <span className="plan-check">
                            <span>
                                <i class="fa-solid fa-user-check"></i>
                            </span>
                            <span>    8 hours of exercises</span>
                        
                        </span>
                        <span className="plan-check">
                            <span>
                                <i class="fa-solid fa-user-check"></i>
                            </span>
                            <span>consultation to private coaches</span>
                            
                        </span>
                        <span className="plan-check">
                            <span>
                                <i class="fa-solid fa-user-check"></i>
                            </span>
                            <span> free fitness to merchandise</span>
                        
                        </span>
                    </div>
                    <div className="plan-btn">
                        <div className="plan-btn1">see more benefit</div>
                        <i class="fa-solid  fa-arrow-right"></i>

                    </div>
                    <button className="plan-btn2">join now</button>



                </div>
            </div>
        </div>

    )
}

export default Plans
