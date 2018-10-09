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
        
        
        
        return(
            <div className = 'page-container'>
            
                {this.props.loading ? <Loader /> : null}
                
                 <div className = {this.props.loading ? 'fade-container faded-out' : 'fade-container faded-in'}>
                    <div className = 'full-section'>
                        
                        {this.props.loading  || this.props.artistInfo === undefined ? null :
                            <ArtistInfo  {...this.props.artistInfo}/>
                        }
                    </div>
                </div>
            </div>
            )
    }
}

const mapStateToProps = (state) => {
    return {
        artistInfo: state.artistInfo,
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