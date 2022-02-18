import { ContainerFotosNoticias } from '../ContainerFotosNoticias/ContainerFotosNoticias'

function NoticiaDetail({data}) {
  const {information, img, video, titulo, fotos} = data;

    return (
      <div>
          <p>{titulo}</p>
          <img src={img} alt={titulo} />
          <p>{information}</p>
          {fotos && <ContainerFotosNoticias listFotos={fotos}/>}
          <a href={video}>VER VIDEO</a>
      </div>
    );
  }
  
  export {NoticiaDetail};