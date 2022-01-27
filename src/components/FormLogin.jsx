import LoginJSON from "../api/LoginJSON";
import { useInputs } from "../hooks/useInputs";

export function FormLogin() {
  const { getUsers } = LoginJSON();
  const {
    isActive,
    yepActive,
    email,
    password,
    emailInput,
    passwordInput,
    errorMessage,
  } = useInputs();

  return (
    <form>
      <section id="float-father">
        <p>Inicia tu sesión</p>
        <p>{errorMessage}</p>
        <section id="float-label">
          <label className={isActive ? "Active" : ""} htmlFor="email">
            Correo Electrónico
          </label>
          <input
            id="email"
            type="text"
            value={email}
            onChange={(e) => {emailInput(e.target.value);
            }}
          />
        </section>
        <section id="float-label">
          <label className={yepActive ? "Active" : ""} htmlFor="email">
            Constraseña
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => passwordInput(e.target.value)}
          />
        </section>
        <button id="login" onClick={(e)=> {
          e.preventDefault()
          getUsers(email, password)}}>
          Iniciar sesión
        </button>
      </section>
    </form>
  );
}