import React, {Component}  from 'react';
import {connect}           from 'react-redux';
import {fetchTagData}      from '../store/actions';

import Loader              from '../components/Loader';
import SearchResults       from '../components/SearchResults';

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
                    <h1 className = 'white-100 text-center font-light m-t-3 m-b-3'>Results for Tag: '{this.props.match.params.id}' </h1>
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
         loadTagData: (tag) => { dispatch(fetchTagData(tag))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tags);