import React, { useRef, useState } from "react";

import "./Login.css";

const URL_LOGIN = "http://localhost:3001/api/users/login";

// mandar data con estructura. Fuera del componente por si queremos reutilizarla y ponerla en otro archivo
const sendData = async (url, data) => {
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  // console.log(response);
  const jsonResponse = await response.json();
  console.log(jsonResponse);
  return jsonResponse;
};

function Login(props) {
  // estado error
  const [error, setError] = useState(null);
  const [valid, setValid] = useState(false);

  const [onhold, setOnhold] = useState(false);
  // seteamos estados
  const refEmail = useRef(null);
  const refPassword = useRef(null);

  const handleSubmit = async (e) => {
    // por si tarda para que no haga muchas peticiones al servidor
    setOnhold(true);
    e.preventDefault();
    const data = {
      email: refEmail.current.value,
      password: refPassword.current.value,
    };
    // console.log(data);
    const response = await sendData(URL_LOGIN, data);
    console.log(response);
    setError(response.error);

    if (response.connected == true) {
      // seteamos una session en localStorage
      // window.localStorage.setItem("loggedUser", JSON.stringify(response));

      // devolvemos valores a App
      props.access(response.connected, response);

      setValid(true);
    }

    setOnhold(false);
  };

  return (
    <section className="login-form">
      <h2 className="logo">Iniciar Sesión</h2>
      <div className="contact-wrapper">
        <div className="contact-form">
          <form>
            <p>
              <label htmlFor="emailLogin">Email</label>
              <input
                // type="email"
                name="email"
                id="emailLogin"
                // onChange={(e) => setEmail(e.target.value)}
                ref={refEmail}
                placeholder="Introduzca su email"
              />
              <span className="infovalidacion email-validation"></span>
              {/* <% if (locals.errors && errors.email) { %> 
                        <label className="infovalidacion backLogin">
                          <%= errors.email.msg %>
                        </label>
                      <% } %> */}
            </p>
            <p className="login-password">
              <label htmlFor="passwordLogin">Contraseña</label>
              <input
                type="password"
                name="password"
                id="passwordLogin"
                // required
                placeholder="Introduzca su contraseña"
                ref={refPassword}
                // onChange={(e) => setPassword(e.target.value)}
                // value={password}
              />

              <span className="infovalidacion password-validation"></span>
            </p>

            {/* si encontró usuario */}
            {valid && (
              <div className=" alert alert-success">
                Usuario aceptado. Navegue por el menú lateral
              </div>
            )}
            {/* si hubo error */}
            {error && <div className="alert alert-danger">{error}</div>}

            <p className="block">
              <button onClick={handleSubmit} disabled={onhold} type="submit">
                Iniciar Sesión
              </button>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
