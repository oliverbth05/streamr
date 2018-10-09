import React   from 'react';
import {Link}  from 'react-router-dom';

const PageNotFound = (props) => {
    return (
        <div className = 'page-container'>
            <h1 className = 'heading center'><i class="fas fa-times"></i> Page Not Found</h1>
            <Link className = 'not-found__link' to = '/'>Return to Home Page</Link>
        </div>
    )
}

export default PageNotFound;