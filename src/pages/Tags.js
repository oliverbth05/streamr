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
        
        if (this.props.loading) {
            return <Loader />
        }
        
        else {
            return(
                <div className = 'container'>
                    <h1 className = 'color-white center'>Results for Tag: '{this.props.match.params.id}' </h1>
                    <SearchResults {...this.props.tag }/>
                </div>
            )
        }
        
        
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        tag: state.tag
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
         loadTagData: (tag) => { dispatch(loadTagDataAsync(tag))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tags);