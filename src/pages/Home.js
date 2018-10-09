import React, {Component}  from 'react';
import {connect}           from 'react-redux';
import {loadHomeDataAsync} from '../store/actions';
import {Link}              from 'react-router-dom';

import Loader              from '../components/Loader';
import ArtistGrid          from '../components/ArtistGrid/ArtistGrid';
import TrackList           from '../components/TrackList/TrackList';
import TagGrid             from '../components/TagGrid';

class Home extends Component {
    
    constructor(props){
        super(props);
        this.props.loadHomeData();
    }

    render() {
        
        return(
            <div className = 'page-container'>
            
                {this.props.loading ?
                    <Loader/>
                : null}
                
                <div className = {this.props.loading ? 'fade-container faded-out' : 'fade-container faded-in'}>
                
                    <div className = 'image-header'>
                        <h1 className = 'heading center'><i className="fas fa-broadcast-tower"></i> streamr</h1>
                       
                        <Link className = 'not-found__link' to = '/about'>About</Link>
                    </div>
                    
                    <div>
                        <h2 className = 'heading center'>Top Tracks</h2>
                        <TrackList tracks = {this.props.tracks}/>
                    </div>
                    
                    <div>
                        <h2 className = 'heading center'>Top Artists</h2>
                        <ArtistGrid artists = {this.props.artists}/>
                    </div>
                    
                    <div>
                        <h2 className = 'heading center'>Poular Tags</h2>
                        <TagGrid tags = {this.props.tags} />
                    </div>
                    
                </div>
                
            </div>
            )
    }
}

const mapStateToProps = (state) => {
    return {
        tracks: state.topTracks,
        artists: state.topArtists,
        tags: state.topTags,
        loading: state.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
          loadHomeData: () => {dispatch(loadHomeDataAsync())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);