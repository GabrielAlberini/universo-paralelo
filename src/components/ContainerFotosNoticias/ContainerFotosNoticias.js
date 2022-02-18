import styled from "styled-components";

function ContainerFotosNoticias({listFotos}) {
    const ContainerListFotosNoticia = styled.article`
        width: 100%;
        height: 200px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    `

    const FotosNoticia = styled.img`
        width: 100%;
        height: 100%;
        object-fit: contain;
    `

     return (
        <ContainerListFotosNoticia>
            {
              listFotos.map(urlFoto => <FotosNoticia key={urlFoto} src={urlFoto} alt="imagen de noticia" />)
            }
        </ContainerListFotosNoticia>
      );
    }
    
    export {ContainerFotosNoticias};









