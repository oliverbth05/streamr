const myTracks = (state = [], action) => {
    switch(action.type) {
        
    case 'ADD_TRACK' :
        return state.concat(action.payload)
        
    case 'REMOVE_TRACK' :
        const tracks = [...state];
        for (var i = 0; i < tracks.length; i ++) {
            if (tracks[i].name === action.payload.name && tracks[i].artist === action.payload.artist) {
                tracks.splice(i, 1);
            }
        }
        return tracks
            
        default :
            return state
    }
}

export default myTracks;
