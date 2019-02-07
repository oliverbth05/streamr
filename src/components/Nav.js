import React, { Component}         from 'react';
import {NavLink, Link, withRouter} from 'react-router-dom';

class Nav extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            searchTerm: ''
        }
    }
    
    searchTermHandler(e) {
        this.setState({
            searchTerm: e.target.value
        })
    }
    
    submitSearch(e) {
        e.preventDefault()
        if (this.props.drawer) {
            this.props.toggleDrawer()
        }
        this.props.history.push('/search/' + this.state.searchTerm)    
    }
    
    render() {
        return (
        <div className = 'nav'> 
            <div className = 'nav__heading__container'>
                <Link to = '/' className = 'nav__heading'><i className="fas fa-broadcast-tower"></i> STREAMER</Link>
            </div>
            <div className = 'nav__links'>
                <NavLink exact to = '/' className = 'nav__link hvr-underline-from-center'>Home</NavLink>
                <NavLink to = '/mytracks' className = 'nav__link hvr-underline-from-center'>Tracks</NavLink>
                <NavLink to = '/myalbums' className = 'nav__link hvr-underline-from-center'>Albums</NavLink>
                <NavLink to = '/myartists' className = 'nav__link hvr-underline-from-center'>Artists</NavLink>
            </div>
            
            <form onSubmit = {this.submitSearch.bind(this)} className = 'nav__search-container'>
                <input onChange = {this.searchTermHandler.bind(this)} className = 'search m-r-s' />
                <button type = 'submit' className = 'button-icon btn-dark m-r-2'><i className="fas fa-search"></i></button>
            </form>
            
            <button className = {this.props.drawer ? 'nav__btn-mobile btn-active' : 'nav__btn-mobile btn-inactive'} onClick = {this.props.toggleDrawer}><i className="fas fa-bars"></i></button>
        
            
            <div className = {this.props.drawer ? 'nav__drawer shown' : 'nav__drawer hidden'}>
            
                <form onSubmit = {this.submitSearch.bind(this)} className = 'nav__drawer-search'>
                    <input onChange = {this.searchTermHandler.bind(this)}  className = 'search m-b-s '/>
                    <button className = 'button-block btn-dark'>Search</button>
                </form>
            
                <div className = 'nav__drawer-links'>
                    <NavLink to = '/' exact className = 'nav__drawer-link' onClick = {this.props.toggleDrawer}><i className="fas fa-home"></i> Home</NavLink>
                    <h3 className = 'text-center font-light white-100 m-b-1 m-t-3'>My Library</h3>
                    <NavLink to = '/mytracks' className = 'nav__drawer-link' onClick = {this.props.toggleDrawer}><i className="fas fa-music"></i> Tracks</NavLink>
                    <NavLink to = '/myalbums' className = 'nav__drawer-link' onClick = {this.props.toggleDrawer}><i className="fas fa-compact-disc"></i> Albums</NavLink>
                    <NavLink to = '/myartists' className = 'nav__drawer-link' onClick = {this.props.toggleDrawer}><i className="fas fa-user"></i> Artists</NavLink>
                </div>    
               
            </div>
            
            <div className = 'nav__drawer__backdrop'>
            
            </div>
        </div>
        )
    }
}

export default withRouter(Nav);