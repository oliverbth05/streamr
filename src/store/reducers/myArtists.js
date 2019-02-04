const myArtists = (state = [], action) => {
    switch(action.type) {
        
        case 'ADD_ARTIST' :
            return state.concat(action.payload)
            
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
