import styled from "styled-components";

const ContainerListPautas = styled.article`
    width: 100%;
    display:flex;
    flex-direction: column;
`

const ContainerImgPautas = styled.article`
    width: 90%;
    height: auto;
    margin: 1rem auto 0 auto;
`

const ImgPauta = styled.img`
    width: 100%;
    height: 100%;
    object-fit: fill;
`


export {
    ContainerListPautas,
    ContainerImgPautas,
    ImgPauta
}