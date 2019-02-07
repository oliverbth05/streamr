import React from 'react';
import {connect} from 'react-redux';
import {Link}               from 'react-router-dom';
import { addTrack, removeTrack  }   from '../store/actions';


class Track extends React.Component {
    
   
    
    
    
    
    render() {
        
        var inLibrary = false;
        
        for (var i = 0; i < this.props.myTracks.length; i++) {
            var libTrack = this.props.myTracks[i];
            
            if (libTrack.name === this.props.name && libTrack.artist === this.props.artist) {
                inLibrary = true
            }
        }
    
        
        if (inLibrary) {
            return (
            
                <tr key = {this.props.index} className = 'track' >
                    <td>{this.props.index + 1}.</td>  
                    <td>{this.props.name}</td> 
                    <td><Link to = {'/artist/' + this.props.artist}>{this.props.artist}</Link></td>
                    <td className = 'text-center'><i onClick = {() => { this.props.removeTrack ({name: this.props.name, artist: this.props.artist})}} className="far fa-star primary-100"></i></td>
                </tr> 
            
            )
        }

        return (
            <tr key = {this.props.index} className = 'track' >
                <td>{this.props.index + 1}.</td>  
                <td>{this.props.name}</td> 
                <td><Link to = {'/artist/' + this.props.artist}>{this.props.artist}</Link></td>
                <td className = 'text-center'><i onClick = {() => { this.props.addTrack ({name: this.props.name, artist: this.props.artist})}} className="far fa-star"></i></td>
            </tr> 
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

export default connect(mapStateToProps, mapDispatchToProps)(Track);