import React from 'react';
import Album from './Album';

const AlbumGrid = (props) => {

  
    const albumsMapped = props.albums.map((item, index) => {
        return <Album {...item} key = {index}/>
        
    })
    
    return (
        <div className = 'album-grid'>
            {albumsMapped}
        </div>
        )
}

export default AlbumGrid;

