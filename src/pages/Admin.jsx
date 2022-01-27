import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment } from "react";
import Cookies from "universal-cookie";
import LoginJSON from "../api/LoginJSON";
import Banner from "../components/Banner";
import DataEmployees from "../components/DataEmployees";
import DataProducts from "../components/DataProducts";
import FormAddProducts from "../components/FormAddProducts";
import { FormRegister } from "../components/FormRegister";
import ContentModal from "../components/Modal";
import { useShowHooks } from "../hooks/useShowHooks";
import gerente from "../images/gerente.png";

const cookies = new Cookies();
function Admin() {
 const { removeCookies } = LoginJSON();
  const {
    open,
    handleOpen,
    handleClose,
    showEmployees,
    handleShowEmployees,
    handleHideEmployees,
    handleShowProducts,
    handleHideProducts,
    showProducts,
    conditionalButtonModal,
    conditionalRenderTrue,
    conditionalRenderFalse,
  } = useShowHooks();
  const userName = cookies.get("name").firstName;
 
  
  return (
    <Fragment>
      <Banner>
        <p>
          {userName}
          <img src={gerente} alt="mesero" />
        </p>
        <section id="logout-principal">
          <span
            onClick={() => {
              removeCookies();
            }}
          >
            Salir
          </span>
          <FontAwesomeIcon
            id="icon-signout"
            icon={faSignOutAlt}
            onClick={() => {
              removeCookies();
            }}
          ></FontAwesomeIcon>
        </section>
      </Banner>
      <section id="nav-admin-menu">
        <button
          onClick={() => {
            conditionalRenderTrue();
            handleOpen();
          }}
        >
          Registro de empleados
        </button>
        {!showEmployees ? (
          <button onClick={() => handleShowEmployees()}>
            Lista de empleados
          </button>
        ) : (
          <button onClick={() => handleHideEmployees()}>
            Lista de Empleados
          </button>
        )}
        <button
          onClick={() => {
            conditionalRenderFalse();
            handleOpen();
          }}
        >
          Registro de productos
        </button>
        {!showProducts ? (
          <button
            onClick={() => {
              handleShowProducts();
            }}
          >
            Lista de productos
          </button>
        ) : (
          <button onClick={handleHideProducts}>Lista de productos</button>
        )}
      </section>
      <div className="admin-container">
        {conditionalButtonModal ? (
          <ContentModal open={open} handleClose={handleClose}>
            <h1>Agregar empleado</h1>
            <FormRegister handleClose={handleClose} />
          </ContentModal>
        ) : (
          <ContentModal open={open} handleClose={handleClose}>
            <h1>Agregar producto</h1>
            <FormAddProducts handleClose={handleClose} />
          </ContentModal>
        )}

        {showEmployees ? <DataEmployees /> : null}
        {showProducts ? <DataProducts /> : null}
      </div>
    </Fragment>
  );
}

export default Admin;
