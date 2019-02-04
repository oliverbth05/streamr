import axios from 'axios';
import lastfm from '../api/lastfm';

//UTLITIES//////////////////////////////////////////
const urlRoot = 'https://ws.audioscrobbler.com/2.0/';
var apiKey = '43ff91b503973ad8e8e995b1f4c58616';

function querify(str) {
    var reserved = ['$', '&', '+', ',', ':', ';', '=', '?', '@']
    var newStr = '';
    for (var i = 0; i < str.length; i++) {
        if (reserved.indexOf(str[i]) !== -1) {
            if (str[i] === '$') {
                newStr+= '%24' 
            }
            if (str[i] === '&') {
                newStr+= '%26'
            }
            if (str[i] === '+') {
                newStr+= '%2B'
            }
            if (str[i] === ',') {
                newStr += '%2C'
            }
            if (str[i] === ':') {
                newStr += '%3A'
            }
            if (str[i] === ';') {
                newStr += '%3B'
            }
            if (str[i] === '=') {
                newStr += '%3D'
            }
            if (str[i] === '?') {
                newStr += '%3F'
            } 
            if (str[i] === '@') {
                newStr += '%40'
            }
        }
        else {
            newStr += str[i]
        }
    }
    return newStr
}

function removeHTML(str) {
    var newStr = '';
    
    for (var i = 0; i < str.length; i++) {
        if (str[i] === '<') {
            break
        }
        newStr += str[i]
    }
    return newStr
}
/////////////////////////////////////////

const loading = () => {
    return {
        type: 'LOADING'
    }
}

const nLoading = () => {
    return {
        type: '!LOADING'
    }
}

const serverError = () => {
    return {
        type: 'SERVER_ERROR'
    }
}







export const fetchHomeData = () => { //TOP TRACKS, TOP ARTISTS, TOP TAGS
    return dispatch => {
        dispatch(loading());
        
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
            dispatch(nLoading())
        })
    }
}

const loadArtistInfo = (artistInfo) => {
    return {
        type: 'LOAD_ARTIST_INFO',
        payload: artistInfo
    }
}

export const loadArtistInfoAsync = (artistName) => { //ARTIST INFO, ARTIST_TOP ALBUMS, ARTIST_TOP TRACKS
    return dispatch => {
        dispatch(loading())
        
        lastfm.get('?method=artist.getinfo&artist=' + querify(artistName) + '&api_key=' + apiKey + '&format=json')
        .then(response => {
    
            var artistData = {...response.data.artist};
            artistData.bio.content = removeHTML(artistData.bio.content)
            artistData.bio.summary = removeHTML(artistData.bio.summary)
           
            lastfm.get('?method=artist.gettopalbums&artist=' + querify(artistName) + '&api_key=' + apiKey + '&format=json&limit=6')
            .then(response => {
                artistData.albums = response.data.topalbums.album
                
                lastfm.get('?method=artist.gettoptracks&artist=' + querify(artistName) + '&api_key=' + apiKey + '&format=json&limit=15')
                .then(response => {
                    
                    artistData.tracks = response.data.toptracks.track
                    dispatch(loadArtistInfo(artistData))
                    dispatch(nLoading())
                })
               
            })
           
        })
        .catch(error => {
                console.log(error.response)
                dispatch(serverError())
                dispatch(nLoading())
            })
    }    
}





const loadAlbumInfo = (albumInfo) => {
    return {
        type: 'LOAD_ALBUM_INFO',
        payload: albumInfo
    }
}

export const loadAlbumInfoAsync = (artistName, albumName) => { //ALBUM INFO
   
    return dispatch => {
        dispatch(loading())
        
     
       
       lastfm.get('?method=album.getinfo&artist=' + querify(artistName) + '&album=' + querify(albumName) + '&api_key=' + apiKey + '&format=json')
       .then(response => {
           dispatch(loadAlbumInfo(response.data.album))
           dispatch(nLoading())
       })
       .catch(error => {
                console.log(error.response)
                dispatch(serverError())
                dispatch(nLoading())
                
            })
    }
}





const loadSearchData = (searchData) => {
    return {
        type: 'LOAD_SEARCH_DATA',
        payload: searchData
    }
}

export const loadSearchDataAsync = searchTerm => { //FIRST 5 RESULTS FOR TRACKS, ARTISTS, ALBUMS
    return dispatch => {
        dispatch(loading())
        
        var searchData = {};
        
        lastfm.get('?method=track.search&track=' + querify(searchTerm) + '&api_key=' + apiKey + '&format=json&limit=5')
        .then(response => {
            searchData.tracks = response.data.results.trackmatches.track;
            
            lastfm.get('?method=album.search&album=' + querify(searchTerm) + '&api_key=' + apiKey + '&format=json&limit=5')
            .then(response => {
                searchData.albums = response.data.results.albummatches.album;
                
                lastfm.get('?method=artist.search&artist=' + querify(searchTerm) + '&api_key=' + apiKey + '&format=json&limit=5')
                .then(response => {
                    searchData.artists = response.data.results.artistmatches.artist;
                    
                    dispatch(loadSearchData(searchData))
                    dispatch(nLoading())
                })
            })
        })
        .catch(error => {
                console.log(error.response)
                dispatch(serverError())
                dispatch(nLoading())
                
            })
    }
}





const loadTagData = (tagData) => {
    return {
        type: 'LOAD_TAG_DATA',
        payload: tagData
    }
}

export const loadTagDataAsync = tagName => {
    return dispatch => {
        dispatch(loading())
        
        var tagData = {};
        
        lastfm.get('?method=tag.gettoptracks&tag=' + tagName + '&api_key=' + apiKey + '&format=json&limit=5')
        .then(response => {
            tagData.tracks = response.data.tracks.track;
            
            lastfm.get('?method=tag.gettopalbums&tag=' + tagName + '&api_key=' + apiKey + '&format=json&limit=5')
            .then(response => {
               
                tagData.albums = response.data.albums.album;
                
                lastfm.get('?method=tag.gettopartists&tag=' + tagName + '&api_key=' + apiKey + '&format=json&limit=5')
                .then(response => {
                    
                    tagData.artists = response.data.topartists.artist;
                    dispatch(loadTagData(tagData))
                    dispatch(nLoading())
                })
            })
        })
        .catch(error => {
                console.log(error.response)
                dispatch(serverError())
                dispatch(nLoading())
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