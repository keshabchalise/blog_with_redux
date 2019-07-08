import jsonPlaceHolder from '../apis/jsonPlaceHolder';

export const fetchPosts = ()=>{

    return async (dispatch,getState)=>{

        const response = await jsonPlaceHolder.get('/posts');

        dispatch({type:'FETCH_POSTS',payload:response.data});
    }
}

export const fetchUser = (id)=>{

    return async (dispatch,getState)=>{

        const userResponse = await jsonPlaceHolder.get(`/users/${id}`);

        dispatch({type:'FETCH_USER',payload:userResponse.data});
    }
    
}