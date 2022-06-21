import styled from 'styled-components'

function FooterCont() {
    return (
        <Footer>
            Desafio de projeto - ReactJS<br />
            Feito por Cleber Barros - Bootcamp TQI Fullstack Dev 2022 - Digital Innovation One
        </Footer>
    )
}

const Footer = styled.div `
    display: flex;
    align-itens: center;
    Justify-content: center;
    color: white;
    padding: 15px;
    text-align: center;
    letter-spacing: 3px;
    font-size: 16px;
    background: black;
    border-top: solid 2px black;

`;

export default FooterCont