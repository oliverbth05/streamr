const search = (state = null, action) => {

    switch (action.type) {

        case 'LOAD_SEARCH_DATA' :
            return action.payload
            
        default :
            return state
    }
}



export default search;