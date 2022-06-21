import React, { createContext, useCallback } from "react"
import { useState } from 'react'
import Api from "../services/Api";

export const GithubContext = createContext();

const GithubProvider = ({ children }) => {

    const [githubState, setGithubState] = useState({
        loading: false,
        user: {
            login: undefined,
            id: undefined,
            name: undefined,
            blog: undefined,
            company: undefined,
            location: undefined,
            htmlUrl: undefined,
            avatarUrl: undefined,
            followers: undefined,
            following: undefined,
            public_gists: undefined,
            public_repos: undefined,
        },
        repositories: [],
        starred: []
    })


    const getUser = (username) => {
        Api.get(`users/${username}`)
        .then( ({data}) => {setGithubState(prevState => ({...prevState, loading: true,
                user: {
                        login: data.login,
                        id: data.id,
                        name: data.name,
                        blog: data.blog,
                        company: data.company,
                        location: data.location,
                        htmlUrl: data.html_url,
                        avatarUrl: data.avatar_url,
                        followers: data.followers,
                        following: data.following,
                        public_gists: data.public_gists,
                        public_repos: data.public_repos,
                    }
                }))})
        
    }

    const getRepos = (username) => {
        Api.get(`users/${username}/repos`)
        .then( ({data}) => {setGithubState(prevState => ({...prevState, repositories: data}))})
        }

    
    const getStarred = (username) => {
            Api.get(`users/${username}/starred`)
            .then( ({data}) => {setGithubState(prevState => ({...prevState, starred: data}))})
            }


    const contextValue = {
        githubState,
        getUser: useCallback((username) => getUser(username), []),
        getRepos: useCallback((username) => getRepos(username), []),
        getStarred: useCallback((username) => getStarred(username), [])
    }

    return (<GithubContext.Provider value={contextValue}>{children}</GithubContext.Provider>)
}

export default GithubProvider