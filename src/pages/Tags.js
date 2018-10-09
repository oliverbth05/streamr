import React, {Component}  from 'react';
import {connect}           from 'react-redux';
import {loadTagDataAsync}  from '../store/actions';


import Loader              from '../components/Loader';
import SearchResults       from '../components/SearchResults/SearchResults';

class Tags extends Component {

    componentDidMount() {
        this.props.loadTagData(this.props.match.params.id)
    }

    render() {
        
        return(
            <div className = 'page-container'>
                
                {this.props.loading ?
                    <Loader/>
                : null}
                
                <div className = {this.props.loading ? 'fade-container faded-out' : 'fade-container faded-in'}>
                    
                    <h1 className = 'heading center'>Results for Tag: '{this.props.match.params.id}' </h1>
                    <SearchResults {...this.props.tagData }/>
                    
                </div>
                
            </div>
            )
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        tagData: state.tagData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
         loadTagData: (tag) => { dispatch(loadTagDataAsync(tag))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tags);