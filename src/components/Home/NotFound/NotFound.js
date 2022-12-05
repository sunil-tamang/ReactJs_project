import React from 'react'
import { Link } from 'react-router-dom';
function NotFound() {
    return (
        <div>
            <h4>Not Found</h4>
            <Link to="/">
                     Go Home
            </Link>
        </div>
    )
}

export default NotFound
