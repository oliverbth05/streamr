import React, {Component}    from 'react';
import { connect }           from 'react-redux';
import {loadSearchDataAsync} from '../store/actions';

import Loader                from '../components/Loader';
import SearchResults         from '../components/SearchResults/SearchResults';

class Search extends Component {
    
    componentDidMount(){
        this.props.loadSearchData(this.props.match.params.id) 
    }
    
    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.props.loadSearchData(this.props.match.params.id)
        }
    }
    
    render() {
        return(
           <div className = 'page-container'>
            
                {this.props.loading ?
                    <Loader/>
                : null}
                
                <div className = {this.props.loading ? 'fade-container faded-out' : 'fade-container faded-in'}>
                   <h1 className = 'heading center'>Search Results for '{this.props.match.params.id}'</h1>
                   <SearchResults {...this.props.searchData} />
                </div>
                
            </div>
            )
    }
}

const mapStateToProps = state => {
    return {
        searchData: state.searchData,
        loading: state.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadSearchData: (searchTerm) => { dispatch(loadSearchDataAsync(searchTerm))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);