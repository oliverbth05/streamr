const artist = (state = null, action) => {
    switch(action.type) {
        
        case 'FETCH_ARTIST_INFO' :
            
            var artistTracks = action.payload.tracks.map(item => {
                return {name: item.name, artist: item.artist.name}
            })
            action.payload.tracks = artistTracks;
            
            return {
                ...action.payload
            }
        
        default: 
            return state
    }
}

export default artist;