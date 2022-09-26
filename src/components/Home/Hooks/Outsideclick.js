import {React, useState, useEffect, useRef} from 'react'

function Outsideclick() {
    const [clickedOutside, setClickedOutside] = useState[false];
    const myRef =useRef();

    const handleClickOutside = e => {
        if (!myRef.current.contains(e.target)) {
            setClickedOutside(true);
        }
    };


return (
        <div>
            
        </div>
    )
}

export default Outsideclick




