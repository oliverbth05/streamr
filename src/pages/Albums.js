import React, {Component}   from 'react';
import { connect }          from 'react-redux';

import Loader               from '../components/Loader';
import MyAlbumsGrid         from '../components/MyAlbumsGrid';
import EmptyLibrary         from '../components/EmptyLibrary';

class Albums extends Component {

    render() {
    
        return(
           <div className = 'page-container'>
            
                {this.props.loading ?
                    <Loader/>
                : null}
                
                <div className = {this.props.loading ? 'fade-container faded-out' : 'fade-container faded-in'}>
                    
                    <h2 className = 'heading center'>My Albums</h2>
                    
                    {this.props.myAlbums.length > 0 ?
                    <MyAlbumsGrid albums = {this.props.myAlbums} />
                    :
                    <EmptyLibrary media = 'album' />
                    }
                </div>
                
            </div>
            )
    }
}

const mapStateToProps = (state) => {
    return {
        myAlbums: state.myAlbums,
        loading: state.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Albums);