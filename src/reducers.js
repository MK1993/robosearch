import {CHANGE_SEARCH_FIELD,REQUEST_ROBOTS_PENDING,REQUEST_ROBOTS_SUCCESS,REQUEST_ROBOTS_FAILURE} from './constants'

const initialStateSf = {
    searchField : ''
}

export const sfReducer = (state = initialStateSf, action ={}) => {
    switch (action.type) {
      case CHANGE_SEARCH_FIELD: {
        return {...state, searchField:action.payload}
      }
      default:
        return state
    }
}

const initialStateRr = {
  isPending : true,
  robots:[],
  error:''
}

export const rrReducer = (state = initialStateRr, action ={}) => {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING: {
      return {...state, isPending: true}
    }
    case REQUEST_ROBOTS_SUCCESS: {
      return {...state, isPending: false,robots:action.payload}
    }
    case REQUEST_ROBOTS_FAILURE: {
      return {...state, isPending: false,error:action.payload}
    }
    default:
      return state
  }
}