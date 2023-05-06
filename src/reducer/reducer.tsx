import { InitialStateType } from "component/context/context";

export type ReducerAction = {
 type:  'GET_USERS_BEGIN' | 'GET_USERS_SUCCESS' | 'GET_SINGLE_USER_BEGIN' | 'GET_SINGLE_USER_SUCCESS' | 'FILTER_SUCCESS' | 'GET_ERROR' | "GET_SINGLE_ERROR"
 payload?:any
}


export function reducer (state:InitialStateType, action:ReducerAction):InitialStateType {
 switch(action.type){
   case 'GET_USERS_BEGIN':
    return {...state, loading:true}
   case 'GET_USERS_SUCCESS':
    return {
     ...state,
     loading:false,
     error:false,
     users:action.payload,
     filter_users:action.payload,
    }
   case 'GET_SINGLE_USER_BEGIN':
    return {...state, single_loading:true}
   case 'GET_SINGLE_USER_SUCCESS':
    return {
     ...state,
     single_loading:false,
     single_error:false,
     single_user:action.payload,
    }
    case  'GET_ERROR':
      return { ...state, error:true}
    case  'GET_SINGLE_ERROR':
      return { ...state, single_error:true}
   default:
    return {...state, error:true}
 }

}

export default reducer