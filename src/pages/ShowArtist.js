import React, {Component}       from 'react';
import {loadArtistInfoAsync}    from '../store/actions';
import {connect}                from 'react-redux';

import Loader                   from '../components/Loader';
import ArtistInfo               from '../components/ArtistInfo';

class SearchArtist extends Component {
    

    componentDidMount() {
        this.props.loadArtistInfo(this.props.match.params.id)
    }
    
    componentDidUpdate(prevProps) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            this.props.loadArtistInfo(this.props.match.params.id)   
        }
    }
    
    render() {

        if (this.props.loading) {
            return <Loader />
        }
    
        else {
            return(
                <div className = 'container'>
                    { this.props.artistInfo === null ? null :
                        <ArtistInfo  {...this.props.artistInfo}/>
                    }
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        artistInfo: state.artist,
        myArtists: state.myArtists,
        loading: state.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadArtistInfo: (artistName) => { dispatch(loadArtistInfoAsync(artistName))}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchArtist);