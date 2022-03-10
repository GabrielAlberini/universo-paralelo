import styled from "styled-components";

function ContainerFotosNoticias({listFotos}) {
    const ContainerListFotosNoticia = styled.article`
        max-width: 900px;
        height: auto;
        display: flex;
        flex: wrap;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
        @media (max-width: 480px) {
          display: flex;
          flex-direction: column;
      }
    `

    const FotosNoticia = styled.img`
        width: 100%;
        height: 100%;
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









