const myAlbums = (state = [], action) => {
    switch(action.type) {
        
    case 'ADD_ALBUM' :
        return state.concat(action.payload)
            
    case 'REMOVE_ALBUM' :
        const albums = [...state];
        for (var i = 0; i < albums.length; i ++) {
            if (albums[i].name === action.payload.name && albums[i].artist === action.payload.artist) {
                albums.splice(i, 1);
            }
        }
        return albums
            
        default :
            return state
    }
    
}

export default myAlbums;
