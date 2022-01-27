import {  useState } from "react";

export const useInputs = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [yepActive, setYepActive] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const showError = () => {
    setErrorMessage("Error verifica tus credenciales");
  };
  const emailInput = (text) => {
    setEmail(text);
    if (text !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  const passwordInput = (text) => {
    setPassword(text);
    if (text !== "") {
      setYepActive(true);
    } else {
      setYepActive(false);
    }
  };

  return {
    isActive,
    yepActive,
    email,
    password,
    emailInput,
    passwordInput,
    showError,
    errorMessage,
  };
};
