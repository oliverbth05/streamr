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
        
        if (this.props.loading) {
            return <Loader />
        }
        
        else {
            return(
                <div className = 'container'>
                   <h1 className = 'color-white center'>Search Results for '{this.props.match.params.id}'</h1>
                   <SearchResults {...this.props.search} />
                </div>
            )
        }
        
    }
}

const mapStateToProps = state => {
    return {
        search: state.search,
        loading: state.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadSearchData: (searchTerm) => { dispatch(loadSearchDataAsync(searchTerm))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);