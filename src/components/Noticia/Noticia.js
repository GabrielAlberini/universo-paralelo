import { NoticiaItem, ContainerImgNoticia, TituloNoticiaItem,ImgNoticia, DateNoticia } from '../../StyledComponents/Noticias'
import { Link } from 'react-router-dom';

const Noticia = ({dataNoticia}) => {
    const {img, titulo, date, id} = dataNoticia;
      
    return (
      <NoticiaItem>
        <Link to={`/noticia/${id}`}>
          <ContainerImgNoticia>
            <ImgNoticia src={img} alt="" />
          </ContainerImgNoticia>
        </Link>
        <TituloNoticiaItem>
          {titulo}
        </TituloNoticiaItem>
        <DateNoticia>
          {date}
        </DateNoticia>
      </NoticiaItem>
    );
  }
  
export {Noticia};