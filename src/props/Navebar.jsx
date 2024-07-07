import React, { useState } from 'react'
import PropTypes from 'prop-types'
export default function Navebar(props) {
const [btnText,setBtnText]=useState("dark mode")
  const [myStyle, setMyStyle] =useState({
     color:'white',
    backgroundColor:'black' 
  })

  const Mode=()=>{
    if(myStyle.color="white")
      setMyStyle({
        color:'black',
        backgroundColor:'white'
   })
   setBtnText("light Mode")
   else
    setMyStyle({
      color:'white',
backgroundColor:'black'
 })
 setBtnText(" enablelight Mode")
  }
  return (
    <div>
      <button className='border-l-orange-700' onClick={Mode}  {btnText}>
      </button>
         <div className='flex flex-col justify-center items-center my-8 bg-red-300' style={myStyle}>
         <div class="tittle">
                <h5>LATEST BLOG</h5>
                <h2>Read The Latest Articles from Our Blog Post</h2>
            </div>
             <div id="cards-group">  
                <div class="blog-cards">
                        <div class="card-img">
                            <img src="images/blog-1.jpg" alt="img1"/>
                            <div class="img-text">
                                <a href="#">web Design</a>
                            </div>
                        </div>
                            <div class="blog-details">
                                <div class="blog-icons">
                                    <span>
                                        <i class="fa fa-user"></i>
                                        <span>admin</span>
                                    </span>
                                    <span>
                                        <i class="fa fa-calendar"></i>
                                        <span>JAN. 18, 2021</span>
                                    </span>
                                </div>
                                <h2>How to build a website</h2>
                                {/* <P>Dolor et eos labore stet justo sed est sed sed sed dolor stet amet.</P> */}
                               <p><a href="#" class="btn1">Read More<span class="fa fa-arrow-right"></span></a></p>
                            </div>
                        </div>
                        </div>
                        </div>
                        </div>
                      

  )
}
Navebar.prototype = {title:PropTypes.string}

    Navebar.defaultProps = {
  tittle:"set new title here"
};