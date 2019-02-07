import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTrack, removeTrack  }   from '../store/actions';

import Track from './Track';

class TrackList extends Component {
    
    render() {
        return (
        <div>
            <table className = 'tracklist'>
                <tbody>
                    { this.props.tracks.map((track, index) => {
                    return <Track {...track} index = {index}/>
                    })}
                </tbody>
            </table>
        </div>
            )
        }
}

const mapStateToProps = state => {
    return {
        myTracks: state.myTracks
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTrack: (track) => { dispatch(addTrack(track))},
        removeTrack: (track) => { dispatch(removeTrack(track))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TrackList);