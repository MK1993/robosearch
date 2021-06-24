import {CHANGE_SEARCH_FIELD,REQUEST_ROBOTS_PENDING,REQUEST_ROBOTS_SUCCESS,REQUEST_ROBOTS_FAILURE} from './constants'

export const sfAction=(o,t)=>o({type:CHANGE_SEARCH_FIELD,payload:t});

export const rrAction = () => (dispatch) => {
    dispatch({type: REQUEST_ROBOTS_PENDING})
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users =>dispatch({type: REQUEST_ROBOTS_SUCCESS, payload:users}))
        .catch(error =>dispatch({type: REQUEST_ROBOTS_FAILURE, payload:error}))
}