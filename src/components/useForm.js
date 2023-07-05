import { useState } from "react";
export const useForm = (initialValues = {}, validate = (...args) => {}) => {
  const [values, setValues] = useState(initialValues);

  let empty = {};
  Object.getOwnPropertyNames(initialValues).forEach(
    (property) => (empty[property] = "")
  );
  const [error, setError] = useState(empty);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    setError({ ...error, [name]: validate(name, value) });
  };

  const validateSubmit = () => {
    const tempError = {};
    Object.getOwnPropertyNames(values).forEach((property) => {
      tempError[property] = validate(property, values[property]);
    });

    let isValid = true;
    Object.getOwnPropertyNames(tempError).forEach((property) => {
      if (tempError[property] !== "") {
        isValid = false;
        return;
      }
    });

    setError(tempError);
    return isValid;
  };

  return {
    values,
    setValues,
    error,
    setError,
    handleInputChange,
    validateSubmit,
  };
};
