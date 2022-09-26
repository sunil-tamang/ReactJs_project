import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

import './Assets/css/Package.css'
import dino from './Assets/img/dino.svg'
import dinoegg from './Assets/img/dino-egg.svg'
import dinobaby from './Assets/img/dino-baby.svg'

function Package() {
    const [list, setList] = useState([
        {
          id: 1,
          title: 'Silver',
          time: '1 months', 
          price:'7,000',
          off: '10% OFF',
          button: 'Get subscription',
          link: '/subscription',
          title:'Free',
          title1:'Unlimited customization in our online builder',
          title2:'High-resolution Illustrations in SVG, PNG, JPG formats',
          title3:'Editable SVG Illustrations',
          title4:'Unlimited Downloads',
          bg:'#E9EEF2'
        },
        {
          id: 2,
          off: '17% OFF',
          price:'17,500', 
          time: '3 months ' , 
          button: 'Get subscription',
          link: '/subscription',
          image: dinoegg,
          title:'6 Month',
          title1:'Unlimited customization in our online builder',
          title2:'High-resolution Illustrations in SVG, PNG, JPG formats',
          title3:'Editable SVG Illustrations',
          title4:'Unlimited Downloads',
          bg:'#E9EEF2'

        },
        {
          id: 3,
          off: '33% OFF',
          price:'28,800',
          time: '6 months', 
          button: 'Get subscription',
          link: '/subscription',
          image: dinobaby,
          title:'1 Year',
          title1:'Unlimited customization in our online builder',
          title2:'High-resolution Illustrations in SVG, PNG, JPG formats',
          title3:'Editable SVG Illustrations',
          title4:'Unlimited Downloads',
          bg:'#E9EEF2'

        },
        {
           id: 4,
          off: '33% OFF',
          price:'45,800',
          time: '6 months', 
          button: 'Get subscription',
          link: '/subscription',
          image: dino,
          title:'1 Year',
          title1:'Unlimited customization in our online builder',
          title2:'High-resolution Illustrations in SVG, PNG, JPG formats',
          title3:'Editable SVG Illustrations',
          title4:'Unlimited Downloads',
          bg:'#FEE419'

        },
    ]);

    var packageList = [];
    
         for(let i = 0; i < list.length; i++){
           packageList.push(
                <Link to={list[i].link} className="package-card">   

                         <div className="package-card__img">
                            <img src={list[i].image} alt="" />
                         </div>

                           <div className="package-card__item"> 
                            
                             <div className="" style={{display:'flex', gap:'.5em'}}>
                                 <h4 class="s14 fontb">{list[i].title}</h4>
                                 <h1 className="s12 upper OFF">{list[i].off}</h1>
                              </div> 
                             
                              <h1 className="s20 fontb" >₹{list[i].price} </h1> 
                              
                              <Link style={{ backgroundColor: list[i].bg }} className="cff loop " to={list[i].link}>
                                {list[i].button}
                              </Link> 

                           </div>
                          
                          {/* <p>Total (Incl. of all taxes)</p> */}
                            
                          
                          
                </Link>  
            );
        }
    return (
        <div className="package">
                
                <div className="package-heading">
                   
                    <h1 className="s50 fontb">Pick the best plan for you </h1>
                    <p className="">Start creating your unique stories with ITG right now</p>
                </div>
                
                <div className="package-card-wrapper">   
                    {packageList}
                </div>
        </div>
    )
}

export default Package
