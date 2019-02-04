import React    from 'react';
import Artist   from './Artist';

const ArtistGrid = (props) => {
    
    let artistsMapped = props.artists.map(item => {
        return <Artist key = {item.mbid} name = {item.name} artist = {item.artist} img = {item.image[2]['#text']} />
    })
     
    return (
        <div className = 'flex-grid'>
            {artistsMapped}
        </div>
    )
}

export default ArtistGrid;