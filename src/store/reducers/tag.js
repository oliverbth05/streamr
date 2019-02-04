const tag = (state = null, action) => {
    switch(action.type) {
        
        case 'LOAD_TAG_DATA' :
            var tags = {...action.payload}
            tags.tracks = action.payload.tracks.map(item => {
                return {name: item.name, artist: item.artist.name}
            })
            return tags
        
        default: 
            return state
    }
}

export default tag;