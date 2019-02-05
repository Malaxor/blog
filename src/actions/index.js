
import _ from 'lodash';
import jsonPlaceHolder from '../api/jsonPlaceHolder';

export const fetchPostsandUsers = () => async (dispatch, getState) => {
    // calls fetchPosts, and retrieves json data
   await dispatch(fetchPosts());
//    // store all the unique ids into the userIds variable (array)
//    const userIds = _.uniq(_.map(getState().posts, 'userId'));
//    // cycle through the userIds array -->
//    // --> use dispatch to call the fetchUser function with each id
//    userIds.forEach(id => dispatch(fetchUser(id)));
//     // Condensed syntax for above approach
   _.chain(getState().posts)
   .map('userId')
   .uniq()
   .forEach(id => dispatch(fetchUser(id)))
   // value executes the chained functions
   .value();
};

export const fetchPosts = () => async dispatch => {

    const response = await jsonPlaceHolder.get("/posts");

    dispatch({ 
        type: 'FETCH_POSTS',
        payload: response.data
    });
};

export const fetchUser = id => async dispatch => {

    const response = await jsonPlaceHolder.get(`/users/${id}`);

    dispatch({
        type: 'FETCH_USER',
        payload: response.data
    });
};

// MEMOIZE SOLUTION
//====================================================================
// export const fetchUser = id => dispatch => _fetchUser(id, dispatch);

// const _fetchUser = _.memoize(async (id, dispatch) => {

//     const response = await jsonPlaceHolder.get(`/users/${id}`);

//     dispatch({
//         type: 'FETCH_USER',
//         payload: response.data
//     });
// });