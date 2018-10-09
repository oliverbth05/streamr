import React, {Component}   from 'react';
import { connect }          from 'react-redux';

import Loader               from '../components/Loader';
import MyArtistsGrid        from '../components/MyArtistsGrid';
import EmptyLibrary         from '../components/EmptyLibrary';

class Artists extends Component {

    render() {
        console.log(this.props)
        return(
           <div className = 'page-container'>
            
                {this.props.loading ?
                    <Loader/>
                : null}
                
                <div className = {this.props.loading ? 'fade-container faded-out' : 'fade-container faded-in'}>
                    
                    <h2 className = 'heading center'>My Artists</h2>
                    
                    {this.props.myArtists.length > 0 ?
                    <MyArtistsGrid artists = {this.props.myArtists} />
                    :
                    <EmptyLibrary media = 'artist' />
                    }
                </div>
                
            </div>
            )
    }
}

const mapStateToProps = (state) => {
    return {
        myArtists: state.myArtists,
        loading: state.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Artists);