import { ContainerFotosNoticias } from '../ContainerFotosNoticias/ContainerFotosNoticias'
import { ContainerNoticiaDetail, TituloNoticiaDetail, ContainerImagenNoticiaDetail, ImagenNoticiaDetail, InfoNoticiaDetail, LinkVideoNoticiaDetail } from '../../StyledComponents/NoticiasDetail'

function NoticiaDetail({data}) {
  const {information, img, video, titulo, fotos} = data;

    return (
      <ContainerNoticiaDetail>
          <TituloNoticiaDetail>
            {titulo}
          </TituloNoticiaDetail>
          <ContainerImagenNoticiaDetail>
            <ImagenNoticiaDetail 
              src={img} 
              alt={titulo} 
            />
          </ContainerImagenNoticiaDetail>
          <InfoNoticiaDetail>
            {information}
          </InfoNoticiaDetail>
          {fotos && 
          <ContainerFotosNoticias 
            listFotos={fotos}
          />}
          <LinkVideoNoticiaDetail 
            href={video}>
              VER NOTICIA
          </LinkVideoNoticiaDetail>
      </ContainerNoticiaDetail>
    );
  }
  
  export {NoticiaDetail};