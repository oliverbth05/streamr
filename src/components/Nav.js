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
            <div className = 'nav__heading-container'>
                <Link to = '/' className = 'nav__heading'><i className="fas fa-broadcast-tower"></i> STREAMER</Link>
            </div>
            <div className = 'nav__links'>
                <NavLink exact to = '/' className = 'nav__link'>Home</NavLink>
                <NavLink to = '/mytracks' className = 'nav__link'>Tracks</NavLink>
                <NavLink to = '/myalbums' className = 'nav__link'>Albums</NavLink>
                <NavLink to = '/myartists' className = 'nav__link'>Artists</NavLink>
            </div>
            
            <form onSubmit = {this.submitSearch.bind(this)} className = 'nav__search-container'>
                <input onChange = {this.searchTermHandler.bind(this)} className = 'input' />
                <button type = 'submit' className = 'btn'><i className="fas fa-search"></i></button>
            </form>
            
            <button className = {this.props.drawer ? 'nav__btn-mobile btn-active' : 'nav__btn-mobile btn-inactive'} onClick = {this.props.toggleDrawer}><i className="fas fa-bars"></i></button>
        
            
            <div className = {this.props.drawer ? 'nav__drawer shown' : 'nav__drawer hidden'}>
            
                <form onSubmit = {this.submitSearch.bind(this)} className = 'nav__drawer-search'>
                    <input onChange = {this.searchTermHandler.bind(this)}  className = 'input'/>
                    <button className = 'btn-block'>Search</button>
                </form>
            
                <div className = 'nav__drawer-links'>
                    <NavLink to = '/' exact className = 'nav__drawer-link' onClick = {this.props.toggleDrawer}><i className="fas fa-home"></i> Home</NavLink>
                    <br />
                    <h3 className = 'heading center'>My Library</h3>
                    <NavLink to = '/mytracks' className = 'nav__drawer-link' onClick = {this.props.toggleDrawer}><i className="fas fa-music"></i> Tracks</NavLink>
                    <NavLink to = '/myalbums' className = 'nav__drawer-link' onClick = {this.props.toggleDrawer}><i className="fas fa-compact-disc"></i> Albums</NavLink>
                    <NavLink to = '/myartists' className = 'nav__drawer-link' onClick = {this.props.toggleDrawer}><i className="fas fa-user"></i> Artists</NavLink>
                </div>    
               
            </div>
        </div>
        )
    }
}

export default withRouter(Nav);