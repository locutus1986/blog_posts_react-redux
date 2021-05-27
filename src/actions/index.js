import jsonPlaceHolder from '../apis/jsonPlaceHolder'
import _ from 'lodash'

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
        await dispatch(fetchPosts())
        
        _.chain(getState().posts)
                .map('userId')
                .uniq()
                .forEach(id => dispatch(fetchUser(id)))
                .value()
}

export const fetchPosts = () => async dispatch =>{
        const res = await jsonPlaceHolder.get('/posts')

        dispatch({ type: 'FETCH_POSTS',payload:res.data })
}

export const fetchUser = id => async dispatch => {
        const res = await jsonPlaceHolder.get(`/users/${id}`)
        dispatch({ type: 'FETCH_USER', payload:res.data })
}


// export const fetchUser = id => dispatch => _fechUser(id, dispatch)
// 
// const _fechUser = _.memoize(async (id, dispatch) => {
        // const res = await jsonPlaceHolder.get(`/users/${id}`)
        // dispatch({ type: 'FETCH_USER', payload:res.data })
// })
// 