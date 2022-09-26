import React, {useState} from 'react'
import './Assets/css/Features.css'

import Course1  from './Assets/images/lol1.png';
import Course2 from './Assets/images/lol2.png';
import Course3 from './Assets/images/lol3.png';
import covid from './Assets/images/covid.svg';

export default function Features() {

    const [features, setFeatures] = useState([
        {
          id: 1,
          title: 'Live classes',
          text: 'Chat with polls, and get your doubts cleared - all while the class is going on',  
          career : 'Entertainer',
          poster: 'https://assets5.lottiefiles.com/packages/lf20_46uzuabz.json',
          poster: 'https://assets5.lottiefiles.com/packages/lf20_46uzuabz.json'
        },
         {
          id: 2,
          title: "Expert teacher's",
          text: 'Learning isnt just limited  shared as PDFs for your revision',
          career: 'Teaching',
          poster: 'https://assets5.lottiefiles.com/packages/lf20_cdfjcora.json'

        },
         {
          id: 3,
          title: 'Free quizzes ',
          text: 'One subscriptioand recorded classes to watch from the comfort of any of your devices',
          career: 'Teaching',
          poster: 'https://assets7.lottiefiles.com/packages/lf20_sk5h1kfn.json'
          // poster: 'https://assets5.lottiefiles.com/packages/lf20_shtu48j0.json'

        },
         {
          id: 4,
          title: 'Interact with your educator',
          text: 'One live and recorded classes to watch from the comfort of any of your devices',
          career: 'Teaching',
          poster: 'https://assets3.lottiefiles.com/private_files/lf30_8e1dykuv.json'
          // poster: 'https://assets5.lottiefiles.com/packages/lf20_shtu48j0.json'

        }
    ]);
    
    var featuresList =[];
    for(let i=0; i < features.length; i++ ){
        featuresList.push(

       

           <div className="features-card"> 
                   
                  <div className="features-poster">
                    {/* <img src={features[i].poster} alt=""/>  */}
                    <lottie-player
                          autoplay
                          loop
                          mode="Bounce"
                          src={features[i].poster}
                          // src="https://assets10.lottiefiles.com/packages/lf20_d5hiizpx.json"
                          style={{width: '100%', height:'100%'}}
                          // className="features-poster__video"
                          > 
                      </lottie-player>
                  </div> 

                  <div className="features-text">
                    <h2 className="s21 fontb">{features[i].title}</h2>
                    <p className="s12 fontn">{features[i].text}</p>
                  </div>
          </div>
       

        );

    }
    return (
       
           
        <div className="features-wrapper">
            
            <div className="features__heading">
                {/* <h1 className="s20 fontb">What makes us stand out?</h1> */}
                {/* <p> Atomize React helps you in building fully responsive websites and products that match your style.</p>  */}
            </div>   
            
            <div className="features">
                  
                   {featuresList}
            </div>

                {/* <div className="covid" style={{
                width: "40%",
                height: "13rem",
                // backgroundImage: "url(" + { covid } + ")",
                backgroundImage: `url(${covid})`,
                backgroundPosition:'center',
                backgroundSize:'cover',
                backgroundRepeat:'no-repeat',
                display:'flex',
                flexDirection:'column',
                justifyContent: 'center',
                padding:'1em 2em',
                backgroundColor:'#efefef',
                opacity: 1,
                borderRadius:'5px',
                marginTop:'3em'
              }}>
              
               <h2>We care about your safety </h2>

             </div> */}
        </div>
    )
}
