import React from "react";
import ReactDOM from "react-dom/client";
//import App from "./App.jsx";
import "./index.css";
//import MiFieldset from "./MiFieldset.jsx";
import Formulario from "./Formulario.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/*<App />*/}
    {/*<form action="">
      <MiFieldset titulo="Datos personales" text1="Nombre" text2="Password" />
      <MiFieldset titulo="Datos escolares" text1="Carrera" text2="Semestre" />
      <input type="submit" value="Enviar datos" />
    </form>
    */}
    <Formulario />
  </React.StrictMode>
);