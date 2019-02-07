import React, {Component}  from 'react';
import {connect}           from 'react-redux';
import {fetchHomeData}     from '../store/actions';
import {Link}              from 'react-router-dom';

import Loader              from '../components/Loader';
import ArtistGrid          from '../components/ArtistGrid/ArtistGrid';
import TrackList           from '../components/TrackList';
import TagGrid             from '../components/TagGrid';
import Header              from '../components/ui/Header';

class Home extends Component {

    componentDidMount() {
        this.props.fetchHomeData();
    }

    render() {
        
        if (!this.props.loading) {
            
            return (
                <div>
                    <div className = 'half-section bg-image'>
                        <div>
                            <Header size = {1} light bright logo margin = {'m-b-2'}><i className="fas fa-broadcast-tower"></i> STREAMER</Header>
                            <Link className = 'button m-t-1' to = '/about'>About</Link>
                        </div>
                    </div>
                
                    <div className = 'full-section border-top'>
                        <div className = 'container'> 
                        
                            <h1 className = 'text-center font-light m-b-3 m-t-3 logo white-100'>BILLBOARDS</h1>
                            
                            <Header size = {2} border light bright margin = {'m-b-2'}>Top Tracks</Header>
                            <TrackList tracks = {this.props.home.topTracks}/>
                        </div>
                    </div>
     
                    <div className = 'full-section'>
                        <div className = 'container'>
                            <Header size = {2} border light bright margin = {'m-b-2'}>Top Artists</Header>
                            <ArtistGrid artists = {this.props.home.topArtists} align = {'center'}/>
                        </div>
                    </div>
                    
                    <div className = 'full-section'>
                        <div className = 'container'>
                            <Header size = {2} border light bright margin = {'m-b-2'}>Top Tags</Header>
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