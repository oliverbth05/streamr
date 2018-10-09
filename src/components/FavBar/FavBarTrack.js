import React, { Component }         from 'react';
import { connect }                  from 'react-redux';
import { addTrack, removeTrack  }   from '../../store/actions';

class FavBarTrack extends Component {

    render() {
       
       var inLibrary;
       
       (() => {
           for (var i = 0; i < this.props.myTracks.length; i ++) {
               if (this.props.myTracks[i].name === this.props.name && this.props.myTracks[i].artist === this.props.artist) {
                   return inLibrary = true;
               }
           }
           return inLibrary = false;
       })();
       
       return (
            
            <div>
              {inLibrary ?
                <div className = 'favorite-track added' onClick = { () => { this.props.removeTrack({name: this.props.name, artist: this.props.artist})}}>
                    <i className="fas fa-star"></i>
                    <p>In Favorites</p>
                </div>
                :
                <div onClick  = {() => {this.props.addTrack({name: this.props.name, artist: this.props.artist})}} className = 'favorite-track not-added'>
                    <i className="far fa-star"></i>
                    <p>Add to Favorites</p>
                </div>
              }
            </div>
            
        )
    }
}

const mapStateToProps = (state) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(FavBarTrack);
