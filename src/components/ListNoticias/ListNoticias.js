import { Noticia } from '../Noticia/Noticia'
import { ContainerNoticia } from '../../StyledComponents/Noticias'

function ListNoticias({listNoticia}) {
  console.log("Hola", listNoticia)
    return (
      <ContainerNoticia>
        {
          listNoticia.map(noticia => <Noticia 
            key={noticia.titulo} 
            titulo={noticia.titulo}
            img={noticia.img}
            description={noticia.description}
            information={noticia.information}
            video={noticia.video}
            date={noticia.date} 
            />)
        }
      </ContainerNoticia>
    );
  }
  
  export {ListNoticias};