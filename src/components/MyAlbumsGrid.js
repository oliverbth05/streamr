import React  from 'react';
import {Link} from 'react-router-dom';

const MyAlbumsGrid = (props) => {
    
    const albumsMapped = props.albums.map(album => {
        return (
            <Link to = {'/album/' + album.artist + '/' + album.name} className = 'album'>
                <img alt = {album.name} src = {album.img} />
                <p>{album.name}</p>
            </Link>
        )
    })
    
    return (
        <div className = 'album-grid'>
            {albumsMapped}
        </div>
        )
        
    
}

export default MyAlbumsGrid;