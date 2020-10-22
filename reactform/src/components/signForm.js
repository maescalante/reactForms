import React from "react";
import Theme from "../context/theme";
import useForm from "../customHooks/useForm";

import validateForm from "../utils/validateForm";
const props = [
  { nombre: "nombre", type: "name" },
  { nombre: "email", type: "email" },
];
const SignForm = () => {
  const { handleChange, handleSubmit, error } = useForm(validateForm);

  const renderForm = (props) => {
    return (
      <form onSubmit={handleSubmit}>
        {props.map((campo) => {
          return (
            <div>
              <label htmlFor={campo.nombre}>{campo.nombre}</label>
              <input
                type={campo.type}
                name={campo.nombre}
                placeholder={campo.nombre}
                id={campo.nombre}
                onChange={handleChange}
              ></input>
              {error[campo.nombre] && <p>{error[campo.nombre]}</p>}
            </div>
          );
        })}

        <button>Enviar</button>
      </form>
    );
  };

  return (
    <div>
      <Theme.Consumer>
        {(value) => <h1 className={value}>Form</h1>}
      </Theme.Consumer>
      {renderForm(props)}
    </div>
  );
};
export default SignForm;
