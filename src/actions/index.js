import jsonPlaceHolder from '../apis/jsonPlaceHolder';

export const fetchPosts = async()=>{
    const response = await jsonPlaceHolder.get('/posts');
    return {
        type:'FETCH_POSTS',
        payload:response
    }
}