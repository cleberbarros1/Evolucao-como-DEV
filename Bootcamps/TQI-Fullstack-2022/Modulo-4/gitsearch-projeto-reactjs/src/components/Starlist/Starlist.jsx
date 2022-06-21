import React from "react"
import styled from "styled-components"
import { useEffect } from 'react'
import ImgSTR from '../../img/star.png'
import useGithub from "../../hooks/github-hooks"
//Imagem star retirada da internet. Creditos ao https://uxwing.com/star-icon/ responsável pela imagem.

function Starlist() {

    const { githubState, getStarred } = useGithub()
    
    useEffect(() => {getStarred(githubState.user.login)}, [githubState.user.login])

    function montarLista(item){
        return (
            <Alink key={`${item.created_at}`} href={`${item.html_url}`} target='_blank'><Li key={`${item.name}`}>{item.name}</Li></Alink>
        )
    }

    return (
        <Stardiv>
            <Tbox><Imgdiv src={ImgSTR}/><h2>Starreds</h2></Tbox>
                <ul style={{width: '70%'}}>
                    {githubState.starred.map(montarLista)}
                </ul>
        </Stardiv>

    )
}

const Stardiv = styled.div `
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

const Tbox = styled.div `
    display: flex;
    Justify-content: space-evenly;
    align-items: center;
    width: 40%;

`;

const Imgdiv = styled.img `
    width: 30px;

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

export default Starlist