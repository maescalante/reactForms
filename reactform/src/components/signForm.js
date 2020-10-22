import React from "react";
import Theme from "../context/theme";
import useForm from "../customHooks/useForm";

import validateForm from "../utils/validateForm";

const SignForm = () => {
  const { handleChange, handleSubmit, error } = useForm(validateForm);
  console.log(error);

  return (
    <div>
      <Theme.Consumer>
        {(value) => <h1 className={value}>Register Form</h1>}
      </Theme.Consumer>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            id="username"
            onChange={handleChange}
          ></input>
          {error.username && <p>{error.username}</p>}
        </div>

        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            id="email"
            onChange={handleChange}
          ></input>
          {error.email && <p>{error.email}</p>}
        </div>

        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            id="password"
            onChange={handleChange}
          ></input>
          {error.password && <p>{error.password}</p>}
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password: </label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            id="confirmPassword"
            onChange={handleChange}
          ></input>
          {error.confirmPassword && <p>{error.confirmPassword}</p>}
        </div>
        <button>Enviar</button>
      </form>
    </div>
  );
};
export default SignForm;
