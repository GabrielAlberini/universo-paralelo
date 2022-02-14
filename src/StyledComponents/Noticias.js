import styled from "styled-components";

const ContainerListNoticias = styled.section`
    width: 90%;
    margin: auto;
`

const ContainerNoticia = styled.article`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`

const NoticiaItem = styled.section`
    width: 300px;
    higth: 300px;
    display: flex;
    flex-direction: column;
`

export {
    ContainerListNoticias,
    ContainerNoticia,
    NoticiaItem
}