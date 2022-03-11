import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { NoticiaDetail } from '../NoticiaDetail/NoticiaDetail'
import { ContainerPautas } from '../ContainerPautas/ContainerPautas'
import { Layout } from "../Layout/Layout";
import { doc, getDoc } from 'firebase/firestore/lite';
import { db } from '../../FirebaseConfig/FireBaseConfig';
import { ContainerLouder } from '../../StyledComponents/Noticias'
import {CircularProgress} from '@mui/material'



function ContainerNoticiaDetail() {
    const [noticia, setNoticia] = useState([])
    const [loader, setLoader] = useState(true)
    const {id} = useParams()

    async function getProducts(db) {
        //Aquí debajo va en orden: La conexón, nombre de la colección y parametro para efectuar el filtro.
        const docRef = doc(db, "noticias", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            const noticia = docSnap.data();
            noticia.id = id;
            setNoticia(noticia)
            setLoader(false)
        } else {
            //En caso de que falle la llamada o no exista el doc.
            console.log("No such document!");
      }
    }

    useEffect(()=> {
        getProducts(db)
    }, [])


    return (
      <Layout>
      {/* <ContainerPautas /> */}
          <>
          {
            loader
            ?
            <ContainerLouder>
              <CircularProgress color="success" />
            </ContainerLouder>
            :
            <NoticiaDetail data={noticia}/>
          }
          </>
      </Layout>
    );
  }
  
  export {ContainerNoticiaDetail};