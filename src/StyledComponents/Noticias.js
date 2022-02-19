import styled from "styled-components";

const ContainerListNoticias = styled.section`
    width: 100%;
    padding: 2rem 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ContainerNoticia = styled.article`
    width: 92%; 
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
    @media (max-width: 480px) {
        grid-template-columns: 1fr;
    }
`

/*Noticia Item*/ 
const NoticiaItem = styled.section`
    width: 100%;
    higth: 300px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`

const ContainerImgNoticia = styled.div`
    width: 100%;
    max-height: 220px; 
    overflow: hidden;
`

const ImgNoticia = styled.img`
    width: 100%; 
    height: 100%;
    object-fit: cover; 
`

const TituloNoticiaItem = styled.h3`
    font-size: 1.5rem;
    @media (max-width: 480px) {
        grid-template-columns: 1fr;
    }
`

const DateNoticia = styled.p`
    color: #5b5657;
    margin-top: 0;
`

export {
    ContainerListNoticias,
    ContainerNoticia,
    NoticiaItem,
    ContainerImgNoticia,
    ImgNoticia,
    TituloNoticiaItem,
    DateNoticia
}