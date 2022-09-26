import React ,{useState, useEffect,}from 'react'
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './Tutor.css'
import TutoInfo from './TutoInfo'

import {TutorData} from './TutorData'

function Tutor() {
    // const [teacher, setTeacher] = useState();
    // var teacherList = [];
    // for(let i = 0; i < TutorData.length ; i++) {
    //     teacherList.push(
    //             <Link to={"/tutor/" + TutorData[i].username} key={"teacher" + i} className="">
    //                 <div>
    //                    <img src={TutorData[i].avatar} alt="" />
    //                 </div>

    //                 <div>
    //                     <p className="s14 fontb">{TutorData[i].name}</p>
    //                     <p className="s10 ">{TutorData[i].username}</p>
    //                 </div>
    //             </Link>
    //     )
    // }

const [isLoading, setIsLoading] = useState(true); //Set True when Linked with real Api
  const [data, setData] = useState();

  
  useEffect(() => {
    fetch("https://swapi.dev/api/people/", {})
      .then((res) => res.json())
      .then((response) => {
        setData(response.results);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);
    return (

    <div className="tutor">
        {/* {teacherList}     */}
            {!isLoading &&
                data.map((person, index) =>{
                // TutorData.map((person, index) =>{
                    return (
                      <Link to={`/dashboard/person/${index + 1}`}>{person.name}'s Page</Link>
                    // <Link to={"/tutor/" + `${person.username}` }>{person.name}'s Page</Link>
                    );
            })}
    </div>
    )
}

export default Tutor
