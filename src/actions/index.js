import jsonPlaceHolder from '../apis/jsonPlaceHolder'

export const fetchPost = () => async dispatch =>{
        const res = await jsonPlaceHolder.get('/post')

        dispatch({type: 'FETCH_POSTS',payload:res})
}