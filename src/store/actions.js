import lastfm from '../api/lastfm';
import querify from '../util/querify';
import removeHTML from '../util/removeHTML';
//UTLITIES//////////////////////////////////////////
var apiKey = '43ff91b503973ad8e8e995b1f4c58616';

export const  fetchHomeData = () => { //TOP TRACKS, TOP ARTISTS, TOP TAGS
    return dispatch => {
        dispatch({type: 'LOADING'});
        
        const data = {};
        
        lastfm.get('?method=chart.gettoptracks&api_key=' + apiKey + '&format=json&limit=10')
        .then(response => {
            data.tracks = response.data.tracks.track;
            return lastfm.get('?method=chart.gettopartists&api_key=' + apiKey + '&format=json&limit=15')
        })
        .then(response => {
            data.artists = response.data.artists.artist
            return lastfm.get('?method=tag.getTopTags&api_key=' + apiKey + '&format=json&limit=20')
        })
        .then(response => {
            data.tags = response.data.toptags.tag;
            var action = {
                type: 'FETCH_HOME_DATA',
                artists: data.artists,
                tracks: data.tracks,
                tags: data.tags
            }
            dispatch(action)
            dispatch({type: '!LOADING'})
        })
    }
}


export const fetchArtistInfo = (artistName) => { //ARTIST INFO, ARTIST_TOP ALBUMS, ARTIST_TOP TRACKS
    var artistData;
    return dispatch => {
        dispatch({type: 'LOADING'})
        lastfm.get('?method=artist.getinfo&artist=' + querify(artistName) + '&api_key=' + apiKey + '&format=json')
        .then(response => {
            artistData = {...response.data.artist};
            artistData.bio.content = removeHTML(artistData.bio.content)
            artistData.bio.summary = removeHTML(artistData.bio.summary)
            return lastfm.get('?method=artist.gettopalbums&artist=' + querify(artistName) + '&api_key=' + apiKey + '&format=json&limit=6')
        })
        .then(response => {
            artistData.albums = response.data.topalbums.album
            return lastfm.get('?method=artist.gettoptracks&artist=' + querify(artistName) + '&api_key=' + apiKey + '&format=json&limit=15')
        })
        .then(response => {
            artistData.tracks = response.data.toptracks.track
            var action = {
                type: 'FETCH_ARTIST_INFO',
                payload: artistData
            }
            dispatch(action)
            dispatch({type: '!LOADING'})
        })
    }    
}


export const fetchAlbumInfo = (artistName, albumName) => { //ALBUM INFO
   
    return dispatch => {
        dispatch({type: 'LOADING'})
        lastfm.get('?method=album.getinfo&artist=' + querify(artistName) + '&album=' + querify(albumName) + '&api_key=' + apiKey + '&format=json')
        .then(response => {
            
            var info = {...response.data.album}
            
            info.wiki.summary = removeHTML(info.wiki.summary);

            
            var action = {
                type: 'FETCH_ALBUM_INFO',
                payload: info
            }
            dispatch(action)
            dispatch({type: '!LOADING'})
        })
        .catch(error => {
            console.log(error.response)
            dispatch({type: '!LOADING'})
        })
    }
}

export const fetchSearchData = searchTerm => { //FIRST 5 RESULTS FOR TRACKS, ARTISTS, ALBUMS
    return dispatch => {
        dispatch({type: 'LOADING'})
        var searchData = {};
        lastfm.get('?method=track.search&track=' + querify(searchTerm) + '&api_key=' + apiKey + '&format=json&limit=5')
        .then(response => {
            searchData.tracks = response.data.results.trackmatches.track;
            return lastfm.get('?method=album.search&album=' + querify(searchTerm) + '&api_key=' + apiKey + '&format=json&limit=5')
        })
        .then(response => {
            searchData.albums = response.data.results.albummatches.album;
            return lastfm.get('?method=artist.search&artist=' + querify(searchTerm) + '&api_key=' + apiKey + '&format=json&limit=5')
        })
        .then(response => {
            searchData.artists = response.data.results.artistmatches.artist;
            var action = {
                type: 'FETCH_SEARCH_DATA',
                payload: searchData
            }
            dispatch(action)
            dispatch({type: '!LOADING'})
        })
        .catch(error => {
            console.log(error.response)
            dispatch({type: '!LOADING'})
        })
    }
}

export const fetchTagData = tagName => {
    return dispatch => {
        dispatch({type: 'LOADING'})
        var tagData = {};
        lastfm.get('?method=tag.gettoptracks&tag=' + tagName + '&api_key=' + apiKey + '&format=json&limit=5')
        .then(response => {
            tagData.tracks = response.data.tracks.track;
            return lastfm.get('?method=tag.gettopalbums&tag=' + tagName + '&api_key=' + apiKey + '&format=json&limit=5')
        })    
        .then(response => {
            tagData.albums = response.data.albums.album;
            return lastfm.get('?method=tag.gettopartists&tag=' + tagName + '&api_key=' + apiKey + '&format=json&limit=5')
        })
        .then(response => {
            tagData.artists = response.data.topartists.artist;
            var action = {
                type: 'FETCH_TAG_DATA',
                payload: tagData
            }
            dispatch(action)
            dispatch({type: '!LOADING'})
        })
        .catch(error => {
            console.log(error.response)
                dispatch({type: '!LOADING'})
            })
    }
}

/*
USER LIBRARY ACTION CREATORS
For the sake of simplicity, these actions will not use thunk, the data will be stored in the browser and will be lost upon refresh.
*/

export const addTrack = (track) => {
    return {
        type: 'ADD_TRACK',
        payload: track
    }
}

export const removeTrack = (track) => {
    return {
        type: 'REMOVE_TRACK',
        payload: track
    }
}

export const addAlbum = (album) => {
    return {
        type:'ADD_ALBUM',
        payload: album
    }
}

export const removeAlbum = (album) => {
    return {
        type: 'REMOVE_ALBUM',
        payload: album
    }
}

export const addArtist = (artist) => {
    return {
        type:'ADD_ARTIST',
        payload: artist
    }
}

export const removeArtist = (artist) => {
    return {
        type: 'REMOVE_ARTIST',
        payload: artist
    }
}