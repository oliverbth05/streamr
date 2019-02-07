const album = (state = null, action) => {
    switch(action.type) {
        
    case 'FETCH_ALBUM_INFO' :
        var album = {...action.payload}
        album.tracks = album.tracks.track.map(item => {
            return {name: item.name, artist: item.artist.name}
        })
        return album
        
    default: 
        return state
    }
}

export default album;