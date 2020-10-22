import { useState } from "react";

const useForm = (validateForm) => {
  const [error, setErrors] = useState({});
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (evt) => {
    setValues({
      ...values,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setErrors(validateForm(values));
  };
  return { handleChange, handleSubmit, error };
};
export default useForm;
