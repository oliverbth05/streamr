import React  from 'react';
import {Link} from 'react-router-dom';

const AlbumGrid = (props) => {

    var artist = props.artist.name || props.artist ;
    
    return (
        <Link to = {'/album/' + artist + '/' + props.name} className = 'm-a-1'>
            <img alt = {props.name} src = {props.image[2]['#text']} />
            <p>{props.name}</p>
        </Link>
        )
}

export default AlbumGrid;

