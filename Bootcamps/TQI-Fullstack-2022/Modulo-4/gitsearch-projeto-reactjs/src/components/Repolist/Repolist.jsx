import React from "react"
import styled from "styled-components"
import { useEffect } from 'react'
import ImgFLD from '../../img/folder.png'
import useGithub from "../../hooks/github-hooks"
//Imagem folder retirada da internet. Creditos ao https://www.flaticon.com/free-icon/folder_3767084 responsável pela imagem.


function Repolist() {

    const { githubState, getRepos } = useGithub()

    useEffect(() => {getRepos(githubState.user.login);}, [githubState.user.login]);

    function montarLista(item){
        return (
            <Alink key={`${item.created_at}`} href={`${item.html_url}`} target='_blank'><Li key={`${item.name}`}>{item.name}</Li></Alink>
        )
    }

    return (
        <Repodiv>
            <Tbox><Imgdiv src={ImgFLD}/><h2>Repos.</h2></Tbox>

            <ul style={{width: '70%'}}>
                {githubState.repositories.map(montarLista)}
            </ul>
        </Repodiv>

    )
}

const Repodiv = styled.div `
    display: flex;
    Justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    width: 40%;

    @media(max-width: 800px) {
        width: 80%;
      }

`;

const Alink = styled.a `
    text-decoration: none;
`;

const Imgdiv = styled.img `
    width: 30px;

`;

const Tbox = styled.div `
    display: flex;
    Justify-content: space-evenly;
    align-items: center;
    width: 40%;

`;

const Li = styled.li `
    list-style-type: none;
    padding: 5px 10px 5px 10px;
    margin-bottom: 5px;
    transition: .3s;
    cursor: pointer;


    &:hover {
    padding-left: 40px;
    background: green;
    color: white;
}
`;

export default Repolist