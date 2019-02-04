import React  from 'react';
import {Link} from 'react-router-dom';

const Artist = (props) => {
    return(
        <Link to = {'/artist/' + props.name} className = 'm-a-2 '>
            <img alt = {props.name} src = {props.img} className = 'border-50'/>
            <p className = 'text-center'>{props.name}</p>
        </Link>
    )
}

export default Artist;