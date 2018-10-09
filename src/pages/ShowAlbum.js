import React, {Component}   from 'react';
import {loadAlbumInfoAsync} from '../store/actions';
import {connect}            from 'react-redux';

import Loader               from '../components/Loader';
import AlbumInfo            from '../components/AlbumInfo';

class SearchAlbum extends Component {
    
    constructor(props){
        super();
    }
    
    componentDidMount() {
       this.props.loadAlbumInfo(this.props.match.params.artistid, this.props.match.params.albumid)
    }
    
    componentDidUpdate(prevProps) {
     if (this.props.match.params.artistid !== prevProps.match.params.artistid || this.props.match.params.albumid !== prevProps.match.params.albumid) {
        this.props.loadAlbumInfo(this.props.match.params.id)   
     }
    }

    render() {
        return(
            <div className = 'page-container'>
            
                {this.props.loading ? <Loader /> : null}
                
                 <div className = {this.props.loading ? 'fade-container faded-out' : 'fade-container faded-in'}>
                    <div className = 'full-section'>
                        
                        {!this.props.loading ?
                       <AlbumInfo {...this.props.albumInfo} />
                         : null }
                         
                    </div>
                </div>
    
            </div>
            )
    }
}

const mapStateToProps = (state) => {
    return {
        albumInfo: state.albumInfo,
        loading: state.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadAlbumInfo: (artistName, albumName) => { dispatch(loadAlbumInfoAsync(artistName, albumName))}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchAlbum);