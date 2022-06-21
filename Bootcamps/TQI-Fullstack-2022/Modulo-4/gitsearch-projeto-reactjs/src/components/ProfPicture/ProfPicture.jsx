import React from "react"
import styled from 'styled-components'
import useGithub from "../../hooks/github-hooks";

function ProfPicture() {

    const { githubState } = useGithub()

    return (
        <ImgPict alt='Imagem publica do usuario no Github' src={`${githubState.user.avatarUrl}`} />
    )
}

const ImgPict = styled.img `
    width: 200px;
    height: 200px;
    opacity: 1;
    border-radius: 50%;
    box-shadow: 2px 2px 2px black;
    filter: saturate(1.2);
`;

export default ProfPicture