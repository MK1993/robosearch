import {CHANGE_SEARCH_FIELD,REQUEST_ROBOTS_PENDING,REQUEST_ROBOTS_SUCCESS,REQUEST_ROBOTS_FAILURE} from './constants'

const initialStateSf={searchField:""};

export const sfReducer=(e=initialStateSf,t={})=>{switch(t.type){case CHANGE_SEARCH_FIELD:return{...e,searchField:t.payload};default:return e}};

const initialStateRr={isPending:!0,robots:[],error:""};

export const rrReducer=(e=initialStateRr,r={})=>{switch(r.type){case REQUEST_ROBOTS_PENDING:return{...e,isPending:!0};case REQUEST_ROBOTS_SUCCESS:return{...e,isPending:!1,robots:r.payload};case REQUEST_ROBOTS_FAILURE:return{...e,isPending:!1,error:r.payload};default:return e}};