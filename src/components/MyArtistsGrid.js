import React  from 'react';
import Artist from './ArtistGrid/Artist';

const MyArtistsGrid = (props) => {
    
    const artistsMapped = props.artists.map(artist => { 
        return <Artist name = {artist.name} img = {artist.img} />
    })
    
    return (
        <div className = 'tile-grid'>
            {artistsMapped}
        </div>
    )   
    
}

export default MyArtistsGrid;