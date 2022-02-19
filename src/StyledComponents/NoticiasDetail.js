import styled from "styled-components";

const ContainerNoticiaDetail = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    padding: 1rem;
`

const TituloNoticiaDetail = styled.p`
    font-size: 3rem;
    @media (max-width: 480px) {
        text-align: center;
    }
`

const ContainerImagenNoticiaDetail = styled.div`
    width: 300px;
    height: 400px;
`

const ImagenNoticiaDetail = styled.img`
    width: 100%;
    height: auto;
    object-fit: contain;
`

const InfoNoticiaDetail = styled.p`
    line-height: 1.6;
    width: 70%;
    text-align: justify;
    padding: 1rem 0;
    text-indent: 60px;
    @media (max-width: 480px) {
        width: 100%;
    }
`

const LinkVideoNoticiaDetail = styled.a`
    text-decoration: none;
    font-size: 2rem;
    color: orange;
    padding-top: 2rem;
    transition: .2s ease;
    &:hover {
        color: black;
    }
`

export {
    ContainerNoticiaDetail,
    TituloNoticiaDetail,
    ContainerImagenNoticiaDetail,
    ImagenNoticiaDetail,
    InfoNoticiaDetail,
    LinkVideoNoticiaDetail
}