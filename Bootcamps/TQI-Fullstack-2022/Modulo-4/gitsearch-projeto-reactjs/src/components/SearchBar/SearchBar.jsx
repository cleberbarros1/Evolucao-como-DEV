import React, { useState } from "react"
import styled from 'styled-components'
import useGithub from "../../hooks/github-hooks";

function SearchBar (props) {
    const { getUser } = useGithub()

    const [usernameForSearch, setusernameForSearch] = useState(undefined)

    const submitGetUser = () => {
        if (!usernameForSearch) return alert("Nenhum nome de usuario foi inserido.");
        return getUser(usernameForSearch)

    }


    return (
        <ContainerSearch>
            <InputSearch type='text' style={{width: `${props.width}`}} placeholder='Digite um username do Github...' onChange={(event) => setusernameForSearch(event.target.value)}/>
            <ButtonSearch onClick={submitGetUser}>Procurar</ButtonSearch>
        </ContainerSearch>
    )
}


const InputSearch = styled.input `
    padding: 8px;
    border: none;
    box-shadow: 1px 1px 3px black;
    text-align: center;
    font-size: 20px;
    opacity: .2;
    transition: .3s;

    &:focus {
        opacity: 1;
        outline: none;
    }
    
`;

const ContainerSearch = styled.div `
    width: 98%;
    height: 10%;
    display: flex;
    Justify-content: center;
    align-items: center;
    padding: 12px 5px 12px 5px;
`;

const ButtonSearch = styled.button `
    margin-left: 15px;
    background: transparent;
    border: none;
    padding: 10px 20px 10px 20px;
    transition: .3s;
    cursor: pointer;
    letter-spacing: 1px;
    font-size: 20px;

    &:hover {
        background: green;
        color: white;
    }

    &:active {
        opacity: .2;
        transform: translateY(2px);
    }
`;

export default SearchBar