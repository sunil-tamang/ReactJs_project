import React, {useState, useEffect,}from 'react'
import Switch from '@material-ui/core/Switch';
function Nortification() {

const [state, setState] = useState({
    checkedA: true,
    checkedB: true,
  });
  
const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });

  };

return (
    <div className="">
        
        <div className="nortication-text">
            <p>Email</p>
            <Switch
                checked={state.checkedA}
                onChange={handleChange}
                name="checkedA"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
             />
        </div>

        <div className="nortication-text">
            <p>Push</p>
            <Switch inputProps={{ 'aria-label': 'primary checkbox' }} />
        </div>

        <div className="nortication-text">
            <p>Updates Centre </p>
            <Switch inputProps={{ 'aria-label': 'primary checkbox' }} />
        </div>

        <div className="nortication-text">
            <p>SMS</p>
            <Switch inputProps={{ 'aria-label': 'primary checkbox' }} />
        </div>
       
    </div>
    )
}

export default Nortification
