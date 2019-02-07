import React, {Component}       from 'react';
import {fetchArtistInfo}        from '../store/actions';
import {connect}                from 'react-redux';

import Loader                   from '../components/Loader';
import AlbumGrid                from '../components/AlbumGrid/AlbumGrid';
import ArtistGrid               from '../components/ArtistGrid/ArtistGrid';
import TagGrid                  from '../components/TagGrid';
import TrackList                from '../components/TrackList';
import FavBarArtist             from '../components/FavBar/FavBarArtist';
import Header                   from '../components/ui/Header';

class SearchArtist extends Component {
    

    componentDidMount() {
        this.props.loadArtistInfo(this.props.match.params.id)
    }
    
    componentDidUpdate(prevProps) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            this.props.loadArtistInfo(this.props.match.params.id)   
        }
    }
    
    render() {
        if (this.props.loading || this.props.artistInfo === null) {
            return <Loader />
        }
        return(
            <div className = 'container'>
                
                <div className = 'flex-grid-artist m-b-3 m-t-2'>
                    <img className = 'border-50 m-b-1' alt = {this.props.artistInfo.name} src = {this.props.artistInfo.image[3]['#text'] }  />
                    <h1 className = 'white-100 text-center font-light m-l-2'>{this.props.artistInfo.name}</h1>
                </div>
                
                <FavBarArtist name = {this.props.artistInfo.name} img = {this.props.artistInfo.image[2]['#text']} />
            
                <Header border light bright size = {3} margin = {'m-b-2 m-t-3'}>Albums</Header>
                <AlbumGrid albums = {this.props.artistInfo.albums} artist = {this.props.artistInfo.name}/>
            
                <Header border light bright size = {3} margin = {'m-b-2 m-t-3'}>Tracks</Header>
                <TrackList tracks = {this.props.artistInfo.tracks} />
                
                <Header border light bright size = {3} margin = {'m-b-2 m-t-3'}>Tags</Header>
                <TagGrid tags = {this.props.artistInfo.tags.tag}/>
            
                <Header border light bright size = {3} margin = {'m-b-2 m-t-3'}>Similar</Header>
                <ArtistGrid artists = {this.props.artistInfo.similar.artist} align = {'start'}/>
                    
            </div>
            )
    }
}

const mapStateToProps = (state) => {
    return {
        artistInfo: state.artist,
        myArtists: state.myArtists,
        loading: state.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadArtistInfo: (artistName) => { dispatch(fetchArtistInfo(artistName))}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchArtist);