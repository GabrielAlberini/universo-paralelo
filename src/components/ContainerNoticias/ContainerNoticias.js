import { ListNoticias } from "../ListNoticias/ListNoticias";
import {
  ContainerListNoticias,
  ContainerLouder,
} from "../../StyledComponents/Noticias";
import { useEffect, useState } from "react";
import { db, getProducts } from "../../FirebaseConfig/FireBaseConfig";
import { CircularProgress } from "@mui/material";

function ContainerNoticias() {
  const [listNoticia, setListNoticia] = useState([]);
  const [louder, setLouder] = useState(true);

  useEffect(() => {
    getProducts(db)
      .then((data) => {
        setListNoticia(data);
        setLouder(false);
      })
      .catch((err) => {
        console.log("hola");
        console.log(err);
      });
  }, []);

  return (
    <>
      {louder ? (
        <ContainerLouder>
          <CircularProgress color="success" />
        </ContainerLouder>
      ) : (
        <ContainerListNoticias>
          <ListNoticias listNoticia={listNoticia} />
        </ContainerListNoticias>
      )}
    </>
  );
}

export { ContainerNoticias };
