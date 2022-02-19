import { ListNoticias } from '../ListNoticias/ListNoticias'
import { ContainerListNoticias } from '../../StyledComponents/Noticias'
import { useEffect, useState } from "react";
import { db, getProducts } from "../../FirebaseConfig/FireBaseConfig";

function ContainerNoticias() {
  const [listNoticia, setListNoticia] = useState([])
  
  useEffect(()=> {
    getProducts(db).then((data) => {
      console.log("recibp", data)
      setListNoticia(data)
  }).catch((err)=> {
      alert(err)
  })
  }, [])

    return (
      <ContainerListNoticias>
        <ListNoticias listNoticia={listNoticia}/>
      </ContainerListNoticias>
    );
  }
  
  export {ContainerNoticias};
