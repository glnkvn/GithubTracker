const initState = {
    username: []
};

export const usernameReducer = (state=initState, action) => {
    switch(action.type){
        case 'UPDATE_USERNAME':
            return { ...state, username: [action.payload]};
        case 'SET_ERROR':
            return { error: action.payload }
        default :
            return state;
        };
    };


