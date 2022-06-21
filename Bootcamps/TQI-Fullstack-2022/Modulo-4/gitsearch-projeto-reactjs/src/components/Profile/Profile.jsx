import React from "react"
import styled from 'styled-components'
import SearchBar from "../SearchBar/SearchBar"
import ProfilePicture from '../ProfPicture/ProfPicture'
import ProInfo from "../ProInfo/ProInfo"
import useGithub from "../../hooks/github-hooks"
import Logo from "../Logo/Logo"
import Numberslist from "../Numberslist/Numberslist"


function ProfileSec() {

    const { githubState } = useGithub()

    return (
        <ContainerProf>
            <Logo />
            <SearchBar width='50%'/>
            {githubState.loading ?<>
            <ProfileRes>
                <ProfilePicture />
                <ProInfo />
            </ProfileRes>
            <Numberslist/>
            </>:<Welcome>Bem vindo ao <B href=''>GitSearcher (v0.1)</B> feito por <B href='https://github.com/cleberbarros1' target='_blank'>Cleber Barros</B>. Insira um nome de usuário para realizar uma pesquisa.</Welcome>}
        </ContainerProf>
    )

}

const ContainerProf = styled.div `
    display: flex;
    align-items: center;
    Justify-content: space-evenly;
    flex-direction: column;
    height: 60vh;
    width: 90vw;
    font-size: 20px;
    transition: .3s;
`;

let ProfileRes = styled.div `
    display: flex;
    width: 98%;
    height: 50%;
    Justify-content: center;
    align-items: center;
    padding: 12px 5px 12px 5px;
    transition: .3s;
`;

const Welcome = styled.span `
   text-align: center;
`;

const B = styled.a `
    cursor: pointer;
    text-decoration: none;
    transition: .3s;

    &:hover{
    font-weight: bolder;
    color: green;
   }
`;


export default ProfileSec