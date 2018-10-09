import React            from 'react';
import AlbumGrid        from '../AlbumGrid/AlbumGrid';
import ArtistGrid       from '../ArtistGrid/ArtistGrid';
import TrackList        from '../TrackList/TrackList';

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
                <div className = 'search-results'>
            
                    <h3 className = 'heading'>Tracks</h3>
                    <div className = 'search-results__section'>
                        <TrackList tracks = {props.tracks} />
                    </div>
                    
                    <h3 className = 'heading'>Albums</h3>
                    <div className = 'search-results__section'>
                        <AlbumGrid albums = {props.albums} />
                    </div>
                    
                    <h3 className = 'heading'>Artists</h3>
                    <div className = 'search-results__section'>
                        <ArtistGrid artists = {props.artists} />
                    </div>
                </div>
            )
        }
        
        
    }
    
    
    
    else {
        return null
    }
}

export default SearchResults;