import React from "react"
import styled from 'styled-components'
import useGithub from "../../hooks/github-hooks"
import Repolist from "../Repolist/Repolist"
import Starlist from "../Starlist/Starlist"


function Repos() {

    const { githubState} = useGithub()

    return (
        <>
        {githubState.loading ?
        <ContainerRepos>

            <Repolist />

            <Starlist />

        </ContainerRepos>:
        <></>}
        </>
    )

}

const ContainerRepos = styled.div `
    display: flex;
    align-items: flex-start;
    Justify-content: space-evenly;
    width: 60vw;
    font-size: 20px;
    transition: .3s;
    border;

    @media(max-width: 800px) {
        flex-direction: column;
      }

`;



export default Repos