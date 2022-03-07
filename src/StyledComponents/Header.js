import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ContainerHeader = styled.section`
    width: 100%;
    padding: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: black;
    @media (max-width: 480px) {
        flex-direction: column;
        text-align: center;
    }
`;



const ContainerImgHeader = styled.div`
    width: 200px;
    padding: 1rem;
`;

const ImgHeader = styled.img`
    max-width: 100%;
`;

const ContainerItemHeader = styled.article`
    padding: 1rem;
` 

const LinkIconSocial = styled.a`

`

const SocialIconHeader =styled(FontAwesomeIcon)`
    color: white;
    font-size: 1.5rem;
    padding: 1rem;
    cursor: pointer;
    transition: all .2s ease;
    &:hover {
        color: orange;
    }
`

export {
    ContainerHeader,
    ContainerImgHeader,
    ImgHeader,
    ContainerItemHeader,
    LinkIconSocial,
    SocialIconHeader
}