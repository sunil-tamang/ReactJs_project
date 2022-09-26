import React, {useState, useEffect} from 'react';
import './Assets/css/Index.css';


import Banner from './Banner/Banner';
import Products from './Products/Products';
import Features from './Features/Features';
function Home() {


    return (
   
       <div style={{ display:'flex', flexDirection:'column', alignItems: 'center',justifyContent: 'center'}}>
            <Banner />
           
            <Products /> 
           
            <Features />
           
      
      
       </div>
    );
}

export default Home;
 