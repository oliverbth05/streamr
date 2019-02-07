import React            from 'react';
import AlbumGrid        from './AlbumGrid/AlbumGrid';
import ArtistGrid       from './ArtistGrid/ArtistGrid';
import TrackList        from './TrackList';

const SearchResults = (props) => {
    
    if (props.tracks !== undefined) {
        
        
        if (props.tracks.length <= 0 && props.albums.length <= 0 && props.artists.length <= 0) {
            return (
                <div className = 'search-results__error'>
                    <h3 className = 'heading center'>Nothing Found</h3>
                    <p>Try another search phrase.</p>
                </div>
            )
        }
        
        else {
            return (
                <div>
                    <h3 className = 'white-100 font-light m-t-3 m-b-2'>Tracks</h3>
                    <TrackList tracks = {props.tracks} />
                    
                    <h3 className = 'white-100 font-light m-t-3 m-b-2'>Albums</h3>
                    <AlbumGrid albums = {props.albums} />
                
                    <h3 className = 'white-100 font-light m-t-3 m-b-2'>Artists</h3>
                    <ArtistGrid artists = {props.artists} />
                </div>
            )
        }
        
        
    }
    
    
    
    else {
        return null
    }
}

export default SearchResults;