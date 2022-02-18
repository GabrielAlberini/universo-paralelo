import { NoticiaItem } from '../../StyledComponents/Noticias'
import { Link } from 'react-router-dom';

const Noticia = ({dataNoticia}) => {
    const {img, titulo, date, id} = dataNoticia;
    
    const tituloUrl = titulo.split("-")
    const tituloHash = tituloUrl.join("-")
    
    console.log(titulo.split("-"))
    return (
      <NoticiaItem>
        <Link to={`/noticia/${tituloHash}`}>
          <div style={{width: "100%", maxHeight: "220px", overflow: "hidden"}}>
            <img style={{width: "100%", height: "100%", objectFit: "cover"}} src={img} alt="" />
          </div>
        </Link>
        <h3>{titulo}</h3>
        <p>{date}</p>
      </NoticiaItem>
    );
  }
  
export {Noticia};