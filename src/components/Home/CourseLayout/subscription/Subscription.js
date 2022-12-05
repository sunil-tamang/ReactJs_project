import React,{useState, useEffect,} from 'react'
import {Link} from 'react-router-dom';

import glogo from './glogo.svg';

import './Subscription.css'
import { Formik, Field, Form } from 'formik';
import * as Yup from "yup";

import image from './subs.gif'
import dino from './dino.svg'
import dinobaby from './dino-baby.svg'
import dinoegg from './dino-egg.svg'
import user from './user.svg'
import Scroll from '../../Hooks/Scroll'



const User =() => {
  return(
    <div className="user">
      
       <div className="" style={{display:'flex', alignItems: 'center', gap:'1em'}}>
         <h2 className="18 c777 fontb">Username</h2> 
         <img src={user} alt="" />
      </div> 
      
       <div className="flex " >
          <p className="s12 fontnb">  +91-9805281453 <span style={{marginLeft: '8px', marginRight:'8px'}}> • </span> </p>
          <p className="s12 fontnb">johndoe123456@gmail.com <span style={{marginLeft: '8px', marginRight:'8px'}}> • </span></p> 
          {/* <p className="s12 fontnb">Nagarkot</p> */}
      </div>   
          
     

    </div>
  )
} 

const Referal =() => {
  return (
          

      <Formik
        initialValues={{ 
            text: '',
        }}
        
        onSubmit={async values => {
            await new Promise(resolve => setTimeout(resolve, 1000));
            alert(JSON.stringify(values, null, 2));
        }}
       
        validationSchema={Yup.object().shape({
            text: Yup.string()

          })}
        >
        {props => {
            const {
            values,
            touched,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
            handleReset
            } = props;

            return (
                <form onSubmit={handleSubmit}>
                        
                       <div className="" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap:'1em', }}>
                        
                        <input id="text" 
                        placeholder="Coupon code"
                        type="text" 
                        autocomplete="nope" 
                        value={values.text} 
                        onChange={handleChange} onBlur={handleBlur}
                        className={
                          errors.text && touched.text
                          ? "text-input error"
                          : "text-input"
                        }
                        />
                        
                        <button className="SecondaryBtn" style={{ position: 'relative',top:'0',marginTop:'0' }}>Submit</button>

                        </div>
                        {errors.text && touched.text && (
                            <div className="input-feedback">{errors.text}</div>
                        )}

                </form>
            );
        }}
        
        </Formik>

       
  )
}

const SubTotal =() => {

  return(
      <div className="total">

        <div  className="flex btw">
            <p className="fontn c777">Subscription free </p>
            <p className="fontn c777"> ₹57,500</p>
        </div>
        
        <div className="flex btw">
            <p>Total(incl. of all taxes)</p>
            <p>₹57,500 </p>
        </div>
        
    </div>

  )
}
// const SubForm =() => {

//   return (
   
//   )
// }

function Subscription() {

      const [isSelected, setIsSelected] = useState();

      console.log(isSelected)
      
      const [list, setList] = useState([
          {
            id: 1,
            title: 'Free',
            time: '1months', 
            off: '10% OFF',
            total: '5,000',
            monthly:'5,000',
            color:'#e6e6e6',
            image:''
          },
          {
            id: 2,
            title: 'Silver',
            time: '6months', 
            off: '25% OFF',
            total: '22,500',
            monthly:'3,789',
            color:'#ffce5d',
            image:dinoegg

          },
          {
            id: 3,
            title: 'Gold',
            time: '12months', 
            off: '54% OFF',
            total: '27,000',
            monthly:'2,289',
            color:'#ffa5a5',
            image:dinobaby

          },
           {
            id: 4,
            title: 'Platinum',
            time: '12months', 
            off: '45% OFF',
            total: '28,000',
            monthly:'2,800',
            color:'#ffa5a5',
            image:dino

          }
    
      ]);

      const [color, setColor] =useState('#e6e6e6');
     
      var subscriptionList = [];
    
      for(let i = 0; i < list.length; i++){
          subscriptionList.push(
              
            <label className="subscription-card" onChange={e => setIsSelected(e.target.value)} style={{ backgroundColor: color }}  >
                
                <Field type="radio"  name="picked" value={list[i].total} />
                
                <img src={list[i].image} alt="" />
                
                <h1 className="s18 ">{list[i].time}</h1>

                <h1 className="s10 upper OFF">{list[i].off}</h1>

                {/* <p className="s14 fontb">{list[i].total} Total</p> */}

                <p className="s12 fontb">{list[i].monthly}/ month</p>
            </label>
          );
      } 
   
   
return (

<div className="subscription">
        
      <Scroll  /> {/* Reset Scroll */}
       <div className="subscription-heading">

                <Link className="logog" to="/" > <img src={glogo} alt=""/></Link>
                  <p className="s24 fontb">Choose a plan</p>
                  <h1 className="s24">UPSC CSE - Optional subscription</h1>
      </div>      
      
      <div className="subscription-card-wrapper">

              <div className="subscription-card-holder">
                  <Formik
                    initialValues={{
                              picked: '',
                            }}
                            onSubmit={async (values) => {
                              await new Promise((r) => setTimeout(r, 500));
                              alert(JSON.stringify(values, null, 2));
                            }}
                          >
                        {({ values,touched }) => (
                          <Form>
                        
                            <div className="radio-woop" role="group" aria-labelledby="my-radio-group">
                                  {subscriptionList}
                            </div>

                            <div>
                                
                              <button className="subscription-btn PrimaryBtn" type="submit">Proceed to pay</button>
                              
                            </div>
                          </Form>
                        )}
                  </Formik>
                </div>
                
              <div className="subscription-card-holder" >
                    
                  <User />
                  <Referal />
                  <SubTotal />

              </div>

      </div>

</div>             
    )
}

export default Subscription
