const reducer = (state = initialState, action) => {

    switch (action.type) {

        case 'SERVER_ERROR' :
            return {
                ...state,
                serverError: true
            }

       
            
       

        default :
            return {
                ...state
            }
    }

}

export default reducer;