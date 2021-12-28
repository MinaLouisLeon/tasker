const initialState = {
    userInfo : null,
}

const userReducer = (state=initialState,action) => {
    switch(action.type){
        case 'setUser' : 
            return{
                ...state,
                userInfo : action.payload
            }
        default :
            return state
    }
}

export default userReducer;