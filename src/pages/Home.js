import React, {Component}  from 'react';
import {connect}           from 'react-redux';
import {fetchHomeData} from '../store/actions';
import {Link}              from 'react-router-dom';

import Loader              from '../components/Loader';
import ArtistGrid          from '../components/ArtistGrid/ArtistGrid';
import TrackList           from '../components/TrackList/TrackList';
import TagGrid             from '../components/TagGrid';

class Home extends Component {

    componentDidMount() {
        this.props.fetchHomeData();
    }

    render() {
        
        if (!this.props.loading) {
            
            return (
                <div>
                
                
                    <div className = 'full-section bg-image'>
                        <div>
                            <h1 className = 'white-100 font-light center'><i className="fas fa-broadcast-tower"></i> STREAMER</h1>
                            <Link className = 'button' to = '/about'>About</Link>
                        </div>
                    </div>
                
                    <div className = 'full-section border-top'>
                        <div className = 'container'>
                            <h2 className = 'white-100 font-light center'>Top Tracks</h2>
                            <TrackList tracks = {this.props.home.topTracks}/>
                        </div>
                    </div>
     
                    <div className = 'full-section'>
                        <div className = 'container'>
                            <h2 className = 'white-100 font-light center'>Top Artists</h2>
                             <ArtistGrid artists = {this.props.home.topArtists}/>
                        </div>
                    </div>
                    
                    <div className = 'full-section'>
                        <div className = 'container'>
                            <h2 className = 'white-100 font-light center'>Poular Tags</h2>
                            <TagGrid tags = {this.props.home.topTags} />
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return <Loader />
        }
    }
}

const mapStateToProps = (state) => {
    return {
        home: state.home,
        loading: state.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
          fetchHomeData: () => {dispatch(fetchHomeData())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);