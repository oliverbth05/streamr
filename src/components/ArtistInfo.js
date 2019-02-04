import React            from 'react';
import AlbumGrid        from './AlbumGrid/AlbumGrid';
import Bio              from './Bio';
import ArtistGrid       from './ArtistGrid/ArtistGrid';
import TagGrid          from './TagGrid';
import TrackList        from './TrackList/TrackList';
import FavBarArtist     from './FavBar/FavBarArtist';

const ArtistInfo = (props) => {
    
     
    console.log(props)
    
    if (props.image !== undefined) {
     
        return (
            <div className = 'artist-info'>
                <h1 className = 'color-white center'>{props.name}</h1>
              
                <img alt = {props.name} className = 'artist-info__image' src = {props.image[3]['#text'] }  />
                
                <FavBarArtist name = {props.name} img = {props.image[3]['#text']} />
                
                <h2 className = 'heading'>Bio</h2>
                { props.bio ? <Bio summary = {props.bio.summary} content = {props.bio.content} />
                : null }
                
                <h2 className = 'heading'>Top Albums</h2>
                <AlbumGrid albums = {props.albums} artist = {props.name}/>
                
                <h2 className = 'heading'>Top Tracks</h2>
                <TrackList tracks = {props.tracks} />
                
                <h2 className = 'heading'>Tags</h2>
                <TagGrid tags = {props.tags.tag}/>
                
                <h2 className = 'heading'>Similar Artists</h2>
                <ArtistGrid artists = {props.similar.artist}/>
                
            </div>
            )
    }
    
    else {
        return null
    }
}

export default ArtistInfo;