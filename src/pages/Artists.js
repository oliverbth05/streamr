import React, {Component}   from 'react';
import { connect }          from 'react-redux';

import Loader               from '../components/Loader';
import ArtistGrid           from '../components/ArtistGrid/ArtistGrid';
import EmptyLibrary         from '../components/EmptyLibrary';
import Header               from '../components/ui/Header';

class Artists extends Component {

    render() {
        
        if (this.props.loading || this.props.myArtists === null) {
            return (
                <div className = 'container'>
                    <Loader />
                </div>
            )
        }
        
        return(
            <div className = 'container'>
                <Header size = {2} light bright border margin = {'m-b-3 m-t-2'} >My Artists</Header>
                {this.props.myArtists.length > 0 ?
                <ArtistGrid artists = {this.props.myArtists} align = {'start'}/>
                :
                <EmptyLibrary media = 'artist' />
                }
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

export default connect(mapStateToProps, null)(Artists);