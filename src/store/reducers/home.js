const initialState = {
    topTracks: [],
    topArtists: [],
    topTags: []
}

const home = (state = initialState, action) => {
    switch (action.type) {
        
        case 'FETCH_HOME_DATA':

            var homeTracks = action.tracks.map(item => {
                return {name: item.name, artist: item.artist.name}
            })
            
            return {
                topTracks: homeTracks,
                topArtists: action.artists,
                topTags: action.tags,
            }
        
        default :
            return state
    }
}

export default home;