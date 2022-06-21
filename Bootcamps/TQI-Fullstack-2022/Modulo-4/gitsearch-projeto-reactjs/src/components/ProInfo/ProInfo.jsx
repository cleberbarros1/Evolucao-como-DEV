import React from "react"
import styled from 'styled-components'
import useGithub from "../../hooks/github-hooks";

function ProInfo() {

    const { githubState } = useGithub()

    return (
        <Infos>
            <Tspan>{githubState.user.name}</Tspan><br />
            <Ispan> Username:</Ispan> <Alink href={`${githubState.user.htmlUrl}`} target='_blank'><span>{githubState.user.login}</span></Alink><br />
            <Ispan> Company:</Ispan> <span>{githubState.user.company}</span><br />
            <Ispan> Location:</Ispan> <span>{githubState.user.location}</span><br />
            <Ispan> Blog:</Ispan> <Alink href={`${githubState.user.blog}`} target='_blank'><span>{githubState.user.blog}</span></Alink><br />
            
        </Infos>
    )
}


const Infos = styled.div `
    margin-left: 70px;
    font-family: 'Kanit', sans-serif;
    
`;

const Tspan = styled.span `
    font-size: 3.2rem;
    font-weight: bolder;

    @media(max-width: 1100px) {
        font-size: 1.5rem;
      }
`;

const Ispan = styled.span `
    font-size: 1.5rem;
    font-weight: bolder;
`;

const Alink = styled.a `
    text-decoration: none;
    padding: 3px;
    color: blue;
    transition: .3s;

    &:hover {
        color: white;
        background: green;
        padding-left: 40px;

    }

    &:active{
        color: orange;
    }
`;

export default ProInfo