export const updateUsername = username => ({ 
    type: 'UPDATE_USERNAME',
    payload: username 
});

export const error = err => ({ 
    type: 'SET_ERROR',
    payload: err 
});