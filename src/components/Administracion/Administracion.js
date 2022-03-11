import { useState } from "react";
import { AdminPanel } from "../AdminPanel/AdminPanel";
import { IniciarSesion } from "../IniciarSesion/IniciarSesion";

const Administracion = () => {
    const [user, setUser] = useState(null)

   return (
       <>
         {user ? <AdminPanel /> : <IniciarSesion setUser={setUser} />}
       </>
   )

}

export { Administracion };