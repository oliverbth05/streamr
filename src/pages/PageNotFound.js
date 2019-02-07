import React   from 'react';
import {Link}  from 'react-router-dom';

import Header  from '../components/ui/Header';

const PageNotFound = (props) => {
    return (
        <div className = 'full-section'>
            <div className = 'flex-grid-center'>
                <div>
                    <Header size = {1} light bright center margin = {'m-t-2 m-b-3'}>Page Not Found.</Header>
                    <Link className = 'button m-t-2' to = '/'>Return to Home Page</Link>
                </div>
            </div>
            
        </div>
    )
}

export default PageNotFound;