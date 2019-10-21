import React, {useReducer} from 'react'
import axios from 'axios';
import GithubContext from './githubContext'
import GithubReducer from './githubReducer';
import {
    SEARCH_USERS,
    SET_ALERT,
    SET_LOADING,
    GET_REPOS,
    GET_USER,
    CLEAR_USERS,
} from '../types'

//setting for production state
let githubClientId;
let githubClientSecret;

//check enviornment
if(process.env.NODE_ENV !== 'production'){
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET
}else{
  githubClientId = process.env.GITHUB_CLIENT_ID
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET
}

const GithubState = props  => {
    //global state for anything github
    const initialState={
        users: [],
        user:{},
        repos: [],
        loading: false,
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    //Search
    const searchUsers = async text => {
        setLoading();
    
        const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`);
        console.log(text)
    
        dispatch({type: SEARCH_USERS, payload: res.data.items}) //add payload for data to be sent (res data)
        // setUsers(res.data.items);
        // setLoading(false)
      }


    //Get USer
    const getUser = async username => {
        setLoading();
    
        const res = await axios.get(`https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`)
    
        dispatch({type:GET_USER, payload: res.data})
        // setUser(res.data)
        // setLoading(false)
      }

    //Get Repos
    const getUserRepos = async username => {
        setLoading();
    
        const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`)
    
        dispatch({type:GET_REPOS, payload: res.data})
        // setRepos(res.data)
        // setLoading(false)
      }

    //Clear users
    const clearUsers = () => dispatch({type: CLEAR_USERS})


    //Set Loading

const setLoading =()=> dispatch({type: SET_LOADING})//dispatch obj with type to reducer


    return <GithubContext.Provider value={{users: state.users, user: state.repos, loading: state.loading, repos: state.repos, searchUsers, clearUsers, getUser, getUserRepos
    }}> {props.children}

    </GithubContext.Provider>
}

export default GithubState
