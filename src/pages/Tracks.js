import React, {Component}   from 'react';
import { connect }          from 'react-redux';

import Loader               from '../components/Loader';
import TrackList            from '../components/TrackList';
import EmptyLibrary         from '../components/EmptyLibrary';
import Header               from '../components/ui/Header';

class Tracks extends Component {

    render() {
        
        if (this.props.loading || this.props.myTracks === null) {
            return <Loader />
        }
        
        return(
            <div className = 'container'>
                <Header size = {2} light bright border margin = {'m-b-3 m-t-2'}>My Tracks</Header>
                    
                {this.props.myTracks.length > 0 ?
                <TrackList tracks = {this.props.myTracks}/>
                :
                <EmptyLibrary media = 'track' />
                }
            </div>
            )
    }
}

const mapStateToProps = (state) => {
    return {
        myTracks: state.myTracks,
        loading: state.loading
    }
}

export default connect(mapStateToProps, null)(Tracks);