import React from "react"
import styled from "styled-components"
import ImgGIT from '../../img/git.PNG'


function Logo () {

    return (
        <LogoBox>
            <div><Alink href=''>
                <GitImg src={ImgGIT}/>
                <LogoSpan>GitSearcher</LogoSpan>
                </Alink>
            </div>
        </LogoBox>
    )


}


const LogoBox = styled.div `
    display: flex;
    align-items: center;
    Justify-content: center;
    flex-direction: column;
    width: 90vw;
    font-size: 20px;
    transition: .3s;
`;

const GitImg = styled.img `
    width: 50px;
`;

const LogoSpan = styled.span `
    margin-left: 30px;
    font-size: 50px;
`;

const Alink = styled.a `
    text-decoration: none;

    &:visited {
        color: black;
    }

    &:hover {
        color: black;
    }
`;




export default Logo