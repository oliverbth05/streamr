import React, {Component}   from 'react';
import {fetchAlbumInfo} from '../store/actions';
import {connect}            from 'react-redux';
import { Link }         from 'react-router-dom';

import Loader               from '../components/Loader';
import TrackList        from '../components/TrackList';
import TagGrid          from '../components/TagGrid';
import FavBarAlbum      from '../components/FavBar/FavBarAlbum';

class SearchAlbum extends Component {
     
    componentDidMount() {
       this.props.loadAlbumInfo(this.props.match.params.artistid, this.props.match.params.albumid)
    }
    
    componentDidUpdate(prevProps) {
     if (this.props.match.params.artistid !== prevProps.match.params.artistid || this.props.match.params.albumid !== prevProps.match.params.albumid) {
        this.props.loadAlbumInfo(this.props.match.params.id)   
     }
    }

    render() {
        if (this.props.loading || this.props.albumInfo === null) {
            return <Loader />
        }
        else { 
            return(
                <div className = 'container'>
                    <h1 className = 'font-light white-100'>{this.props.albumInfo.name}</h1>
                    <Link to = {'/artist/' + this.props.albumInfo.artist} ><h3 className = 'font-light'>{this.props.albumInfo.artist}</h3></Link>
                
                
                    <div className = 'flex-grid-alt m-t-2 m-b-3'>
                        <img alt = {this.props.albumInfo.name} src = {this.props.albumInfo.image[5]['#text']} className = 'width-100' />
                        <p>
                            {this.props.albumInfo.wiki.summary.text}
                            <span className = 'primary-100 m-t-1' dangerouslySetInnerHTML = {{__html: this.props.albumInfo.wiki.summary.tag}}></span>
                        </p>
                    </div>
                
                    <FavBarAlbum name = {this.props.albumInfo.name} img = {this.props.albumInfo.image[2]['#text']} artist = {this.props.albumInfo.artist} />
                
               
                
                    <h2 className = 'font-light white-100 m-t-3 m-b-2'>Tracks | {this.props.albumInfo.tracks.length}</h2>
                    <TrackList tracks = {this.props.albumInfo.tracks} />
                
                    <h2 className = 'font-light white-100 m-t-3 m-b-2'>Tags</h2>
                    <TagGrid tags = {this.props.albumInfo.tags.tag} />
                </div>
            )
        }
    }
    
}

const mapStateToProps = (state) => {
    return {
        albumInfo: state.album,
        loading: state.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadAlbumInfo: (artistName, albumName) => { dispatch(fetchAlbumInfo(artistName, albumName))}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchAlbum);