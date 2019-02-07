import React, {Component}   from 'react';
import { connect }          from 'react-redux';

import Loader               from '../components/Loader';
import AlbumGrid            from '../components/AlbumGrid/AlbumGrid';

import EmptyLibrary         from '../components/EmptyLibrary';
import Header               from '../components/ui/Header';

class Albums extends Component {

    render() {
    
        if (this.props.loading || this.props.myAlbums === null) {
            return <Loader />
        }
    
        return(
            <div className = 'container'>
                <Header size = {2} light bright border margin = {'m-b-3 m-t-2'}>My Albums</Header>
                {this.props.myAlbums.length > 0 ?
                <AlbumGrid albums = {this.props.myAlbums} />
                :
                <EmptyLibrary media = 'album' />
                }
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

export default connect(mapStateToProps, null)(Albums);