import React, {Component}   from 'react';
import { connect }          from 'react-redux';

import Loader               from '../components/Loader';
import MyTracksList         from '../components/MyTracksList';
import EmptyLibrary         from '../components/EmptyLibrary';

class Tracks extends Component {

    render() {
        return(
            
           <div className = 'page-container'>
            
                {this.props.loading ?
                    <Loader/>
                : null}
                
                <div className = {this.props.loading ? 'fade-container faded-out' : 'fade-container faded-in'}>
                    
                    <h2 className = 'heading center'>My Tracks</h2>
                    
                    {this.props.myTracks.length > 0 ?
                    <MyTracksList tracks = {this.props.myTracks}/>
                    :
                    <EmptyLibrary media = 'track' />
                    }
            
                </div>
                
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

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tracks);