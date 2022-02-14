import { Pauta } from '../Pauta/Pauta'
import { ContainerListPautas } from '../../StyledComponents/Pautas'

import { useEffect, useState } from "react";
import { db, collection, getDocs } from "../../FirebaseConfig/FireBaseConfig";

async function getPautas() {
  const pautasCol = collection(db, "pautas");
  const pautasSnapShot = await getDocs(pautasCol);
  const pautasList = pautasSnapShot.docs.map(pauta => pauta.data())
  console.log(pautasList)
  return pautasList;
}

const ContainerPautas = () => {
  const [listPautas, setListPautas] = useState([])

  useEffect(()=> {
    getPautas(db).then((res) => setListPautas(res))
  }, [])

    return (
      <ContainerListPautas>
        {
          listPautas.map((linkImg) => <Pauta key={linkImg.img} img={linkImg.img} alt="imagen de pauta"/>)
        }
      </ContainerListPautas>
    );
  }
  
  export {ContainerPautas};