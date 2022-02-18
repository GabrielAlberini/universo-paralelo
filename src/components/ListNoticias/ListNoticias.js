import { Noticia } from '../Noticia/Noticia'
import { ContainerNoticia } from '../../StyledComponents/Noticias'

function ListNoticias({listNoticia}) {
  console.log("Hola", listNoticia)
    return (
      <ContainerNoticia>
        {
          listNoticia.map(noticia => <Noticia key={noticia.titulo} dataNoticia={noticia} />)
        }
      </ContainerNoticia>
    );
  }
  
  export {ListNoticias};