import { NoticiaItem } from '../../StyledComponents/Noticias'

const Noticia = ({titulo, img, date,  video, description}) => {

    return (
      <NoticiaItem>
        <div style={{width: "100%", maxHeight: "220px", overflow: "hidden"}}>
          <img style={{width: "100%", height: "100%", objectFit: "cover"}} src={img} alt="" />
        </div>
        <h3>{titulo}</h3>
        <p>{date}</p>
      </NoticiaItem>
    );
  }
  
export {Noticia};