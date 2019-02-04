import { combineReducers } from 'redux';

import home from './home';
import loading from './loading';
import search from './search';
import tag from './tag';

import artist from './artist';
import album from './album';

import myArtists from './myArtists';
import myAlbums from './myAlbums';
import myTracks from './myTracks';


export default combineReducers({
    home,
    loading,
    artist,
    album,
    tag,
    search,
    myArtists,
    myAlbums,
    myTracks
})

