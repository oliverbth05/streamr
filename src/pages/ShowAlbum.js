import React, {Component}   from 'react';
import {loadAlbumInfoAsync} from '../store/actions';
import {connect}            from 'react-redux';

import Loader               from '../components/Loader';
import AlbumInfo            from '../components/AlbumInfo';

class SearchAlbum extends Component {
    
    componentDidMount() {
       this.props.loadAlbumInfo(this.props.match.params.artistid, this.props.match.params.albumid)
    }
    
    componentDidUpdate(prevProps) {
     if (this.props.match.params.artistid !== prevProps.match.params.artistid || this.props.match.params.albumid !== prevProps.match.params.albumid) {
        this.props.loadAlbumInfo(this.props.match.params.id)   
     }
    }

    render() {
        if (this.props.loading) {
            return <Loader />
        }
        else {
            return(
                <div className = 'container'>
                    {!this.props.albumInfo !== null ?
                        <AlbumInfo {...this.props.albumInfo} />
                    : null }
                </div>
            )
        }
    }
    
}

const mapStateToProps = (state) => {
    return {
        albumInfo: state.album,
        loading: state.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadAlbumInfo: (artistName, albumName) => { dispatch(loadAlbumInfoAsync(artistName, albumName))}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchAlbum);