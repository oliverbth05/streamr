const initialState = {
    topTracks: [],
    topArtists: [],
    topTags: [],
    artistInfo: {}, 
    albumInfo: {}, 
    searchData: {}, 
    tagData: {},
    myArtists: [], 
    myAlbums: [],  
    myTracks: [],  
    loading: false
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        
        case 'LOADING' :
            return {
                ...state,
                loading: true
            }
            
        case '!LOADING' :
            return {
                ...state,
                loading: false
            }
            
        case 'SERVER_ERROR' :
            return {
                ...state,
                serverError: true
            }
            
        case 'LOAD_HOME_DATA' : //The Data from the API needs to be transformed for it to work with all instances of the tracklist component
            
            var homeTracks = action.tracks.map(item => {
                return {name: item.name, artist: item.artist.name}
            })
           
            
            return {
                ...state,
                topTracks: homeTracks,
                topArtists: action.artists,
                topTags: action.tags,
                loading: false
            }
           
        case 'LOAD_ARTIST_INFO' :
            var artistTracks = action.payload.tracks.map(item => {
                return {name: item.name, artist: item.artist.name}
            })
            
            action.payload.tracks = artistTracks;
            
            return {
                ...state,
                artistInfo: action.payload
            }
        
        case 'LOAD_ALBUM_INFO' :
            var albumTracks = action.payload.tracks.track.map(item => {
                return {name: item.name, artist: item.artist.name}
            })

            action.payload.tracks = albumTracks
            
            return {
                ...state,
                albumInfo: action.payload
            }
            
        case 'LOAD_SEARCH_DATA' :
            return {
                ...state,
                searchData: action.payload
            }
            
        case 'LOAD_TAG_DATA' :
            var tagTracks = action.payload.tracks.map(item => {
                return {name: item.name, artist: item.artist.name}
            })
            action.payload.tracks = tagTracks
            return {
                ...state,
                tagData: action.payload
            }
    
        case 'ADD_ALBUM' :
            return {
                ...state,
                myAlbums: state.myAlbums.concat(action.payload)
            }
            
        case 'REMOVE_ALBUM' :
            const albums = [...state.myAlbums];
            
            for (var i = 0; i < albums.length; i ++) {
                if (albums[i].name === action.payload.name && albums[i].artist === action.payload.artist) {
                    albums.splice(i, 1);
                }
            }
            return {
                ...state,
                myAlbums: albums
            }
    
        case 'ADD_ARTIST' :
            return {
                ...state,
                myArtists: state.myArtists.concat(action.payload)
            }    
            
        case 'REMOVE_ARTIST' :
            const artists = state.myArtists.filter(item => {
                if (item.name !== action.payload) {
                    return true
                }
                else {
                    return false
                }
            })
            
            return {
                ...state,
                myArtists: artists
            }
        
        case 'ADD_TRACK' :
            
            return {
                ...state,
                myTracks: state.myTracks.concat(action.payload)
            }
        
        case 'REMOVE_TRACK' :
            
            const tracks = [...state.myTracks];
            
            for (var i = 0; i < tracks.length; i ++) {
                if (tracks[i].name === action.payload.name && tracks[i].artist === action.payload.artist) {
                    tracks.splice(i, 1);
                }
            }
            
            return {
                ...state,
                myTracks: tracks
            }
            
        default :
            return {
                ...state
            }
    }

}

export default reducer;