import React, { Component }           from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { connect }                    from 'react-redux';
/////////////////////////////////Pages
import Home                           from './pages/Home';
import Tracks                         from './pages/Tracks';
import Albums                         from './pages/Albums';
import Artists                        from './pages/Artists';
import ShowArtist                     from './pages/ShowArtist';
import ShowAlbum                      from './pages/ShowAlbum';
import Search                         from './pages/Search';
import Tags                           from './pages/Tags';
import PageNotFound                   from './pages/PageNotFound';
import About                          from './pages/About';
////////////////////////////Components 
import Nav                            from './components/Nav';

class App extends Component {
  constructor() {
    super();
    this.state = {
      windowWidth: window.innerWidth,
      drawer: false
    }
  }

  async updateWidth(){ //Monitors window width and minimizes drawer at > 1200px
    await this.setState({
      windowWidth: window.innerWidth
    })

    if (this.state.windowWidth > 1200) {
      this.setState({
        drawer: false
      })
    }
  }
  
  showDrawer() {
    this.setState({
      drawer: true
    })
  }
  
  hideDrawer() {
    this.setState({
      drawer: false
    })
  }
  
  toggleDrawer() {
    this.setState({
      drawer: !this.state.drawer
    })
  }
  
  componentWillMount() {
    window.addEventListener('resize', this.updateWidth.bind(this))
  }
  
  render() {
    
    return (
      <BrowserRouter>
        <div className="App">
        <Nav drawer = {this.state.drawer} toggleDrawer = {this.toggleDrawer.bind(this)} />
          <Switch>
          
              <Route exact path = '/' component = {Home} />
              
              <Route exact path = '/artist/:id' component = {ShowArtist}/>
              <Route exact path = '/album/:artistid/:albumid' component = {ShowAlbum} />
              <Route exact path = '/search/:id' component = {Search} />
              
              <Route exact path = '/tag/:id' component = {Tags} />
              <Route exact path = '/mytracks' component = {Tracks} />
              <Route exact path = '/myalbums' component = {Albums} />
              <Route exact path = '/myartists' component = {Artists} />
              
              <Route exact path = '/about' component= {About} />
              
              <Route component = {PageNotFound} />

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        tracks: state.topTracks,
        artists: state.topArtists,
        loading: state.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);