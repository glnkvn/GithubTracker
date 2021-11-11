const initState = {
    username: [
        "glnkvn", "cBrom99"
    ]
};

export const searchReducer = (state=initState, action) => {
    switch(action.type){
        case 'UPDATE_USERNAME':
            return { ...state, date: action.payload };
        // case 'SET_ERROR':
        //     return { ...state, error: action.payload, isLoading: false }
        default :
            return state;
    };
};
