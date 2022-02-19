import { NoticiaItem } from '../../StyledComponents/Noticias'
import { Link } from 'react-router-dom';

const Noticia = ({dataNoticia}) => {
    const {img, titulo, date, id} = dataNoticia;
    console.log("ID", id)
  
    return (
      <NoticiaItem>
        <Link to={`/noticia/${id}`}>
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