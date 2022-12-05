import React, {useState,useRef, useEffect,} from 'react';
import{ Link} from 'react-router-dom';
import './StickyNavBar.css'
function StickyNavBar() {

    const [scrolled,setScrolled]=React.useState(false);

  const handleScroll=() => {
    const offset=window.scrollY;
    if(offset > 800 ){
      setScrolled(true);
    }
    else{
      setScrolled(false);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  })

  let x=['navbar1'];
  if(scrolled){
    x.push('scrolled');
  }
  

  return (
            <div className={x.join(" ")}>    
                    <div className="about__course__navigation">
                        <Link className="link__item" to="">About</Link>
                        <Link className="link__item" to="">Syllabus</Link>
                        <Link className="link__item" to="">Reviews</Link>
                        <Link className="link__item" to="">Instructors</Link>
                        <Link className="link__item" to="">Addmission Process</Link>
                        <Link className="link__item" to="">Fees</Link>
                        <Link className="link__item" >Enroll Now</Link>
                    </div>
              </div>
    )
}

export default StickyNavBar
  