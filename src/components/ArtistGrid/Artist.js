import React  from 'react';
import {Link} from 'react-router-dom';

const Artist = (props) => {
    return(
        <Link to = {'/artist/' + props.name} className = 'artist'>
            <img alt = {props.name} src = {props.img} />
            <p>{props.name}</p>
        </Link>
    )
}

export default Artist;