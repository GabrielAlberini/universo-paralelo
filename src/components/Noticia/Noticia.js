import { NoticiaItem } from '../../StyledComponents/Noticias'

const Noticia = ({titulo, img, video, description}) => {

    return (
      <NoticiaItem>
        <h3>{titulo}</h3>
        <img src={img} alt="" />
        <p>{description}</p>
      </NoticiaItem>
    );
  }
  
export {Noticia};