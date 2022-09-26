import React, { } from 'react';
import {Link } from 'react-router-dom'

const artistlist =(props) => {
    return (
           <div className="artist_container">
                {props.artists && props.artists.length > 0 ?
                    
                    props.artists.map( item => (
                        <Link to={`/artist/${item.id}`} key={item.id} className="artist_item" >
                        
                            <div className="cover" style={{
                                    backgroundImage:`url("${item.cover}")`,
                                    backgroundRepeat:'no-repeat',
                                }}>
                            <div>
                                {item.name}
                            </div>
                            </div>
                        </Link>
                        )) : <h2>Nope</h2>
                }
        
        </div>
    );
};

export default artistlist;