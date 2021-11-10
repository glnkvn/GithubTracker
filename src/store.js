import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import { usernameReducer } from './reducers/usernameReducer.js';

export const store = createStore(usernameReducer, devToolsEnhancer());

// export default store;