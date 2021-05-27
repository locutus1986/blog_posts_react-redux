import { combineReducers } from 'redux'

import postsReducer from './psotsReducer'
import usersReducer from './usersReducer'

export default combineReducers({
    posts: postsReducer,
    users: usersReducer
})