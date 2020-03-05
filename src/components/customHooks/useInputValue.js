import { useState } from "react";

const useInputValue = initialValue => {
  const [values, setValues] = useState({});

  return [
    values,
    e => {
      setValues({ ...values, [e.target.name]: e.target.value });
    }
  ];
};

export default useInputValue;
