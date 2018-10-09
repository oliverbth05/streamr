import React, { Component }         from 'react';
import { connect }                  from 'react-redux';
import { addAlbum, removeAlbum }    from '../../store/actions';

class FavBarAlbum extends Component {

    componentDidMount() {
           
    }
    
    componentDidUpdate() {
        
    }
   

    render() {
       
       var inLibrary;
       
       (() => {
           for (var i = 0; i < this.props.myAlbums.length; i ++) {
               if (this.props.myAlbums[i].name === this.props.name && this.props.myAlbums[i].artist === this.props.artist) {
                   return inLibrary = true;
               }
           }
           return inLibrary = false;
       })();
       
       return (
            
            <div>
              {inLibrary ?
                <div className = 'favorite added' onClick = { () => {this.props.removeAlbum({name: this.props.name, artist: this.props.artist})}}>
                    <i className="fas fa-star"></i>
                    <p>In Favorites</p>
                </div>
                :
                <div onClick  = {() => {this.props.addAlbum({name: this.props.name, img: this.props.img, artist: this.props.artist})}} className = 'favorite not-added'>
                    <i className="far fa-star"></i>
                    <p>Add to Favorites</p>
                </div>
              }
            </div>
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        myAlbums: state.myAlbums
    }
   
}

const mapDispatchToProps = (dispatch) => {
    return {
        addAlbum:     (album) => { dispatch(addAlbum(album))},
        removeAlbum: (album) => { dispatch(removeAlbum(album))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavBarAlbum);