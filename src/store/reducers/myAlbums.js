const myAlbums = (state = [], action) => {
    switch(action.type) {
        
    case 'ADD_ALBUM' :
        
         var album = {...action.payload}
            album.image = [];
            
            album.image[0] = null;
            album.image[1] = null;
            album.image[2] = {
                '#text': action.payload.img,
                size: 'large'
            }
            
            return state.concat(album)
            
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
