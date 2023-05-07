import { createContext, useContext,useReducer,useEffect } from "react";
import reducer from "component/reducer/reducer";
import axios from "axios";



export type InitialStateType = {
 users:{}[]
 loading:boolean
 error:boolean
 single_loading:boolean
 single_error:boolean
 single_user:any
 filter_users:{}[]
 search_value:string
}

const initialState:InitialStateType ={
 users:[],
 loading: false,
 error:false,
 single_loading:false,
 single_error:false,
 single_user:[],
 filter_users:[],
 search_value:''
}

type ContextProviderProps = {
 children: React.ReactNode
}
type ContextType = {
 state:InitialStateType
 fetchSingleUser: (url:string)=>Promise<void>
 // filterCountry:(e:string) => void
 // SearchCountry: (e:React.ChangeEvent<HTMLInputElement>)=> void
 // SearchResult: (e?:React.FormEvent<HTMLFormElement>) => void
}

const url:string = 'https:6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users'

export const UsersContext = createContext<ContextType>({
  state: initialState,
  fetchSingleUser: async()=> {},
  // filterCountry: (e:string)=> {},
  // SearchCountry:(e)=> {},
  // SearchResult: (e) =>{},
});

export const ContextProvider = ({children}: ContextProviderProps) => {
 const [state, dispatch] = useReducer(reducer, initialState)

 const fetchUsers = async(url:string) => {
  dispatch({type:'GET_USERS_BEGIN'})
  try{
     const resp = await axios.get(url)
     const {data} =  resp
     dispatch({type:"GET_USERS_SUCCESS",payload:data})
  }catch(err){
    dispatch({type:'GET_ERROR'})
   console.log(err)
  }
 }
 const fetchSingleUser = async(url:string) => {
  dispatch({type:'GET_SINGLE_USER_BEGIN'})
   try{
     const resp = await axios.get(url)
     const {data} = resp
     dispatch({type:"GET_SINGLE_USER_SUCCESS",payload:data})
  }catch(err){
    dispatch({type:'GET_SINGLE_ERROR'})
   console.log(err)
  }
 }

 useEffect(() => {
  fetchUsers(url)
  fetchSingleUser('https:6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/2')
 },[])

  return <UsersContext.Provider
  value={{
   state,
   fetchSingleUser,
  }}
  >{children}</UsersContext.Provider>
}

export const useUserContext = () => {
  return useContext(UsersContext)
}