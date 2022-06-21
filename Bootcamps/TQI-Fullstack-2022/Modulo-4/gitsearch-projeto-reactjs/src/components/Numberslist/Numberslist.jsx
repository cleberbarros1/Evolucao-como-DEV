import React from "react"
import styled from "styled-components";
import useGithub from "../../hooks/github-hooks";


function Numberslist () {

    const { githubState } = useGithub()

    return (
        <Numbersdiv>
        <div><b>Followers:</b> {githubState.user.followers}</div>
        <div><b>Followings:</b> {githubState.user.following}</div>
        <div><b>Gists:</b> {githubState.user.public_gists}</div>
        <div><b>Repos:</b> {githubState.user.public_repos}</div>
        </Numbersdiv>
    )
}


const Numbersdiv = styled.div `
    display: flex;
    Justify-content: space-evenly;
    align-items: center;
    border: 2px solid white;
    width: 60%;
    height: 10%;
    font-size: 24px;
`;

export default Numberslist