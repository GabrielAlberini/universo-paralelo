import styled from "styled-components";

const ContainerLouder = styled.section`
    width: 100%;
    height: 400px;
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

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
    transition: .3s ease;
    border-radius: 5px;
    display: flex;
    &:hover {
        box-shadow: -8px 10px 12px -11px rgba(0,0,0,0.75);
        -webkit-box-shadow: -8px 10px 12px -11px rgba(0,0,0,0.75);
        -moz-box-shadow: -8px 10px 12px -11px rgba(0,0,0,0.75);
        transform: scale(1.01);
    }
`

const ImgNoticia = styled.img`
    width: 100%; 
    height: 100%;
    object-fit: cover; 
`

const TituloNoticiaItem = styled.h3`
    font-size: 1.2rem;
    @media (max-width: 480px) {
        grid-template-columns: 1fr;
    }
`

const DateNoticia = styled.p`
    color: #5b5657;
    margin-top: 0;
`

export {
    ContainerLouder,
    ContainerListNoticias,
    ContainerNoticia,
    NoticiaItem,
    ContainerImgNoticia,
    ImgNoticia,
    TituloNoticiaItem,
    DateNoticia
}