import styled from "styled-components";

const ContainerListNoticias = styled.section`
    width: 90%;
    margin: 2rem auto 0 auto;
`

const ContainerNoticia = styled.article`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
`

/*Noticia Item*/ 
const NoticiaItem = styled.section`
    width: 300px;
    higth: 300px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`

const TituloNoticiaItem = styled.h3`
    width: 100%;
`

export {
    ContainerListNoticias,
    ContainerNoticia,
    NoticiaItem
}