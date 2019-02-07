import React    from 'react';
import Artist   from './Artist';

const ArtistGrid = (props) => {
    
    var style = props.align === 'center' ? 'flex-grid-center' : 'flex-grid-start';
    
    let artistsMapped = props.artists.map(item => {
        return <Artist key = {item.mbid} name = {item.name} artist = {item.artist} img = {item.image[2]['#text']} />
    })
    
    
     
    return (
        <div className = {style}>
            {artistsMapped}
        </div>
    )
}

export default ArtistGrid; 