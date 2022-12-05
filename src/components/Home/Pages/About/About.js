import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import './Assets/css/About.css'
import './../base.css'
import Scroll from '../../Hooks/Scroll'

import banner from './Assets/img/banner.svg'
import hand from './Assets/img/hand.png'
import pallete from './Assets/img/pallete.png'
import pallete1 from './Assets/img/pallete1.png'
import u1 from './Assets/img/jpg1.jpeg'
import u2 from './Assets/img/jpg2.jpeg'

export default function About() {

    const [team, setTeams] = useState();
    return (
        <div className="about">
            <Scroll />
            
               <div style={{width: '90%'}}>

                    {/* <div className="" style={{backgroundColor:'#d6d0d0',width: '100%', height: 'auto', padding: '4em 4em'}}>
                        <h1>About Us</h1>
                    </div> */}

                      <div className="about__ ">
                          <div className="">

                            <h1 className="s40 fontb" style={{padding: '1em 0'}}>We all have a story to tell</h1>
                            <p className=" ">
                                Our team is distributed throughout the world. From sunny San Francisco
                                to magical Madrid, our crew is diverse, passionate, and dedicated to 
                                revealing the creative genius inside everyone while supporting artists
                                around the globe!
                                <br /><br />
                                Dig the mission? We’re growing our squad of doodle junkies and looking 
                                to add talented people!</p>

                                <div style={{display:'flex', marginTop:'0px', paddingTop:'24px'}}>
                                    <Link to="" className="button-primary">Join Us Now</Link>
                                </div>
                          </div>
                         
                          <div className="about-banner">
                              <img src={banner} alt="" />
                          </div>
                      </div>



    <div className="why">
        
        {/* <div className="why-heading" style={{height:'100px'}}>
            <h1 className="s28">Reasons why ?</h1>
        </div>  */}

        {/* <div className="flex" style={{gap:'1em',flexWrap:'wrap'}}> */}
            <div className="why-box">
                <h1 className="s40">10 K +</h1> <br />
                <p className="fontb">Active Learners</p>
            </div>
            
            <div className="why-box">
                <h1 className="s40">500 +</h1> <br />
                <p className="fontb">Top Tutors</p>
            </div>
            
            <div className="why-box">
                <h1 className="s40">10 K +</h1> <br />
                <p className="fontb">Active Learners</p>
            </div>
            
            <div className="why-box">
                <h1 className="s40">100 +</h1> <br />
                <p className="fontb">Daily Live Classes</p>
            </div>
        {/* </div> */}
    </div>


<div style={{paddingTop:'100px', height:'auto'}}>
    
    <div style={{height:'100px' }}><h1 className="fontb s40">Meet The Team</h1></div>

    <div className="cGSgPC">
                    
            <div className="hEhfj">
                <div style={{position: 'relative'}} className="jkCpnt">
                  
                    <div style={{height:'150px'}}>
                            <div style={{height:'150px',display:'block',overflow:'hidden',position:'absolute',top:'0',left:'0',bottom:'0',right:'0',boxSizing:'border-box',margin:'0'}}>
                                    <img className="book" src={pallete} alt="" />
                            </div>

                    </div>

            
                    <div className="hJjXKV">
                        {/* <div className="fyncFD"> */}
                            <img className="fyncFD" src={u1} alt="" />
                        {/* </div> */}
                    </div>
 
                    <div className="fzZwJ">
                             <h1 className="s18 fontb">Sunil Tamang</h1>
                                <p className="s12">
                                     An American-Japanese illustrator currently living and working in London.
                                </p>
                            {/* <div className="bKyoUn"> */}
                             {/* </div> */}
                    </div>
                </div>    
            </div>  
                
              <div className="hEhfj">
                <div style={{position: 'relative'}} className="jkCpnt">
                  
                    <div style={{height:'150px'}}>
                            <div style={{height:'150px',display:'block',overflow:'hidden',position:'absolute',top:'0',left:'0',bottom:'0',right:'0',boxSizing:'border-box',margin:'0'}}>
                                    <img className="book" src={pallete1} alt="" />
                            </div>

                    </div>

            
                     <div className="hJjXKV">
                        {/* <div className="fyncFD"> */}
                            <img className="fyncFD" src={u2} alt="" />
                        {/* </div> */}
                    </div>
 
                    <div className="fzZwJ">
                             <h1 className="s18 fontb">Narendra Thapa</h1>
                                <p className="s12">
                                     An American-Japanese illustrator currently living and working in London.
                                </p>
                            <div className="bKyoUn">
                             </div>
                    </div>
                </div>    
            </div> 

              <div className="hEhfj">
                <div style={{position: 'relative'}} className="jkCpnt">
                  
                    <div style={{height:'150px'}}>
                            <div style={{height:'150px',display:'block',overflow:'hidden',position:'absolute',top:'0',left:'0',bottom:'0',right:'0',boxSizing:'border-box',margin:'0'}}>
                                    <img className="book" src={pallete1} alt="" />
                            </div>

                    </div>

            
                     <div className="hJjXKV">
                        {/* <div className="fyncFD"> */}
                            <img className="fyncFD" src={u2} alt="" />
                        {/* </div> */}
                    </div>
 
                    <div className="fzZwJ">
                             <h1 className="s18 fontb">Narendra Thapa</h1>
                                <p className="s12">
                                     An American-Japanese illustrator currently living and working in London.
                                </p>
                            <div className="bKyoUn">
                             </div>
                    </div>
                </div>    
            </div>

              <div className="hEhfj">
                <div style={{position: 'relative'}} className="jkCpnt">
                  
                    <div style={{height:'150px'}}>
                            <div style={{height:'150px',display:'block',overflow:'hidden',position:'absolute',top:'0',left:'0',bottom:'0',right:'0',boxSizing:'border-box',margin:'0'}}>
                                    <img className="book" src={pallete1} alt="" />
                            </div>

                    </div>

            
                     <div className="hJjXKV">
                        {/* <div className="fyncFD"> */}
                            <img className="fyncFD" src={u2} alt="" />
                        {/* </div> */}
                    </div>
 
                    <div className="fzZwJ">
                             <h1 className="s18 fontb">Narendra Thapa</h1>
                                <p className="s12">
                                     An American-Japanese illustrator currently living and working in London.
                                </p>
                            <div className="bKyoUn">
                             </div>
                    </div>
                </div>    
            </div>      
            
        
    </div>
   
</div>


                <div className="subscribe">

                        <div className="subscribe-box flex cdir jic aic">
                                    
                                    <img src={hand} alt="" />
                                    
                                    <h1 className="s40 fontb cfff" style={{padding:'1em 0'}}>Let's subscribe!</h1>
                                
                                    <p className="s13"> Everyone has a doodle inside them waiting to be created, <br />
                                    including you! Start making some magic with our thousands of <br /> 
                                    customizable illustrations.</p>
                               
                                    <div className="flex aic" style={{gap:'1em'}}>
                                        <input placeholder="Email" type="text" />
                                        <div><button className="button-secondary">Subscribe</button></div>
                                    </div>
                        </div>

                      </div>
               </div>


              
        </div>
    )
}

