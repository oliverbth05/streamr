const myArtists = (state = [], action) => {
    switch(action.type) {
        
        case 'ADD_ARTIST' :
            
            //Workaround for getting this to work with ArtistGrid Component
            //The last.fm image property is nested
            
            var artist = {...action.payload}
            artist.image = [];
            
            artist.image[0] = null;
            artist.image[1] = null;
            artist.image[2] = {
                '#text': action.payload.img,
                size: 'large'
            }
            
            return state.concat(artist)
            
        case 'REMOVE_ARTIST' :
            const artists = state.filter(item => {
                if (item.name !== action.payload) {
                    return true
                }
                else {
                    return false
                }
            })
            return  artists
            
        default :
            return state
    }
}

export default myArtists;
