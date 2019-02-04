import React, { Component } from 'react'
import {Link}               from 'react-router-dom';
import FavBarTrack          from '../FavBar/FavBarTrack';

class TrackList extends Component {
            
    state = {
        showMenu: false,
        selectedTrack: null
    }
    
    selectTrack(trackName, artistName){
        this.setState({
            showMenu: true,
            selectedTrack: {
                name: trackName,
                artist: artistName
            } 
        })
    }

    hideMenu(e) {
        e.stopPropagation();
        
        this.setState({
            showMenu: false
        })
    }
        
    render() {
        console.log(this.props)
        const tracksMapped = this.props.tracks.map((track, index) => {
            return (
                <tr key = {index} className = 'track'>
                    <td>{index + 1}.</td> 
                    <td>{track.name}</td> 
                    <td><Link to = {'/artist/' + track.artist}>{track.artist}</Link></td>
                    <td><i className="fas fa-ellipsis-v" onClick = {() => {this.selectTrack(track.name, track.artist)}}></i></td>
                </tr>
            )    
        })
    
        return (
            <div>
                <table className = 'tracklist'>
                    <tbody>
                        {tracksMapped}
                    </tbody>
                </table>
                
                {this.state.showMenu ?
                    <div className = 'track-menu' >
                        
                        <div className  = 'track-menu__backdrop' onClick = {this.hideMenu.bind(this)}></div>
                        
                        
                        <div className = 'track-menu__menu'>
                            <h4>{this.state.selectedTrack.name}</h4>
                            <FavBarTrack name = {this.state.selectedTrack.name} artist = {this.state.selectedTrack.artist} hideMenu = {this.hideMenu.bind(this)}/>
                        </div>
                    
                
                    </div>
                : null}
            </div>
        )
    }
}

export default TrackList;