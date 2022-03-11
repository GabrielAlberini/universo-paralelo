import { useState } from "react";
import { auth } from '../../FirebaseConfig/FireBaseLogin'

const IniciarSesion = (props) => {
  const [user, setUser] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    const correo = e.target.emailField.value;
    const password = e.target.passwordField.value;
    const secretWord = e.target.secretWordField.value;

  };

  return (
    <div>
      <h2>{user ? "Registrate" : "Iniciar sesión"}</h2>
      <form onSubmit={submitHandler}>
        <label htmlFor="emailField">Correo electronico</label>
        <input type="email" id="emailField" />
        <label htmlFor="passwordField">Contraseña</label>
        <input type="password" id="passwordField" />
        <label htmlFor="passwordField">Palabra secreta</label>
        <input type="password" id="secretWordField" />
        <button type="submit">{user ? "Registrate" : "Iniciar sesión"}</button>
      </form>
      <button onClick={() => setUser(!user)} type="submit">
        {user
          ? "¿Ya tienes cuenta? Iniciar Sesión"
          : "¿No tienes cuenta? Registrate"}
      </button>
    </div>
  );
};

export { IniciarSesion };
