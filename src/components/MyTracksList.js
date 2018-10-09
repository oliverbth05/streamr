import React        from 'react'
import {Link}       from 'react-router-dom';
import FavBarTrack  from './FavBar/FavBarTrack';

class MyTracksList extends React.Component {
            
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

        const tracksMapped = this.props.tracks.map((track, index) => {
            return (
                <li>
                    <div>{index + 1}.</div> 
                    <div>{track.name}</div> 
                    <Link to = {'/artist/' + track.artist}>{track.artist}</Link>
                    <i class="fas fa-play"></i>
                    <i class="fas fa-ellipsis-v" onClick = {() => {this.selectTrack(track.name, track.artist)}}></i>
                </li>
            )    
        })
    
        return (
            <ul className = 'track-list'>
                {tracksMapped}
                
                 {this.state.showMenu ?
                    <div className = 'track-menu' >
                        
                        <div className  = 'track-menu__backdrop' onClick = {this.hideMenu.bind(this)}></div>
                        
                        
                        <div className = 'track-menu__menu'>
                            <h4 className = 'heading center'>{this.state.selectedTrack.name}</h4>
                            <FavBarTrack name = {this.state.selectedTrack.name} artist = {this.state.selectedTrack.artist}/>
                        </div>
                    
                    </div>
                    : null}
            </ul>
        )
    }
}

export default MyTracksList;