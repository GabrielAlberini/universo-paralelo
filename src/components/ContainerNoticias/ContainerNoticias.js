import { ListNoticias } from '../ListNoticias/ListNoticias'
import { ContainerListNoticias } from '../../StyledComponents/Noticias'
import { useEffect, useState } from "react";
import { db, collection, getDocs } from "../../FirebaseConfig/FireBaseConfig";

async function getPautas() {
  const noticiasCol = collection(db, "noticias");
  const noticiasSnapShot = await getDocs(noticiasCol);
  const noticiasList = noticiasSnapShot.docs.map(noticia => noticia.data())
  return noticiasList;
}

function ContainerNoticias() {
  const [listNoticia, setListNoticia] = useState([])
  console.log(listNoticia)
  
  useEffect(()=> {
    getPautas(db).then((res) => setListNoticia(res))
  }, [])

    return (
      <ContainerListNoticias>
        <ListNoticias listNoticia={listNoticia}/>
      </ContainerListNoticias>
    );
  }
  
  export {ContainerNoticias};
