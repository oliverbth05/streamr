import React, { Component }         from 'react';
import { connect }                  from 'react-redux';
import { addArtist, removeArtist }  from '../../store/actions';

class FavBarArtist extends Component {

    render() {
       var inLibrary;
       
       (() => {
           for (var i = 0; i < this.props.myArtists.length; i ++) {
               if (this.props.myArtists[i].name === this.props.name) {
                   return inLibrary = true;
               }
           }
           return inLibrary = false;
       })();
         
       return (
            
            <div>
              {inLibrary ?
                <a className = 'favbar added' onClick = { () => {this.props.removeArtist(this.props.name)}}>
                    <i className="fas fa-star"></i>
                    <p>In Favorites</p>
                </a>
                :
                <a onClick  = {() => {this.props.addArtist({name: this.props.name, img: this.props.img})}} className = 'favbar not-added'>
                    <i className="far fa-star"></i>
                    <p>Add to Favorites</p>
                </a>
              }
            </div>
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        myArtists: state.myArtists
    }
   
}

const mapDispatchToProps = (dispatch) => {
    return {
        addArtist:     (artist) => { dispatch(addArtist(artist))},
        removeArtist: (artist) => { dispatch(removeArtist(artist))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavBarArtist);
