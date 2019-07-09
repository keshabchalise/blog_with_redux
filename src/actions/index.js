import jsonPlaceHolder from '../apis/jsonPlaceHolder';
import _ from 'lodash';

export const fetchPostsAndUsers =()=>{
    return async(dispatch,getState)=>{
        await dispatch(fetchPosts());
        console.log(getState().posts);
        const userIds = _.uniq(_.map(getState().posts,'userId'));
        console.log(userIds);
        userIds.forEach(id=>dispatch(fetchUser(id)));

        // _.chain(getState().posts)
        // .map('userId')
        // .uniq()
        // .forEach(id=>dispatch(fetchUser(id)))
        // .value();
    }
}

export const fetchPosts = ()=>{

    return async (dispatch,getState)=>{

        const response = await jsonPlaceHolder.get('/posts');

        dispatch({type:'FETCH_POSTS',payload:response.data});
    }
}

export const fetchUser = (id)=>{

    return async(dispatch,getState)=>{

        const userResponse = await jsonPlaceHolder.get(`/users/${id}`);

        dispatch({type:'FETCH_USER',payload:userResponse.data});
    }
}

// export const fetchUser = function(id){
//     return (dispatch,getState)=>{
//         _fetchUser(id,dispatch);
//     }
// }
// const _fetchUser = _.memoize(async(id,dispatch)=>{
//     const userResponse = await jsonPlaceHolder.get(`/users/${id}`);    
//     dispatch({type:'FETCH_USER',payload:userResponse.data});
// });