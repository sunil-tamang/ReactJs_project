import React, {useState, useEffect}from 'react'
import PropTypes from 'prop-types';
import {TutorData} from './TutorData'

const TutoInfo = ({ match }) => {
    const {  params: { personId }, } = match;

    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState();
    useEffect(() => {
    fetch(`https://swapi.dev/api/people/${personId}`, {})
      .then((res) => res.json())
      .then((response) => {
        setData(response);
        setIsLoading(false);
        // console.log(`https://swapi.dev/api/people/${personId}`);
      })
      .catch((error) => console.log(error));
  }, [personId]);
    return (
       <>
       {!isLoading && (
        <div style={{ width:'90%',height:'300px', backgroundColor: '#c333' }}>
          <h1 className="s15 c333">Name: {data.name}</h1>
          <h1 className="s15 c333">Name: {data.birth_year}</h1>
          <h1 className="s15 c333">Name: {data.eye_color}</h1>
          <h1 className="s15 c333">Name: {data.homeworld}</h1>
          <h1 className="s15 c333">Name: {data.films}</h1>
        </div>
      )}
       </>
    )
}

export default TutoInfo
