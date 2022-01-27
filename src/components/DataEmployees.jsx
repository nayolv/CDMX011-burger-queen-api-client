import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Table } from "react-bootstrap";
import { useDataEmployees } from "../hooks/useDataEmployees";
import { useShowHooks } from "../hooks/useShowHooks";
import { FormEdit } from "./FormEdit";

import ContentModal from "./Modal";
const DataEmployees = () => {
  const {
    dataUsers,
    deleteUser,
    recoveryDataUser,
    recoveredData,
    user,
    handleUserChange,
    handleDataRole,
    editUser,
    defaultData,
  } = useDataEmployees();
  const {
    open,
    handleClose,
    handleOpen,
    conditionalRenderTrue,
    conditionalRenderFalse,
    conditionalButtonModal,
  } = useShowHooks();

  return (
    <div>
      <TableContainer style={{ maxHeight: 500 }}>
        <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Puesto</TableCell>
            <TableCell>Correo</TableCell>
            <TableCell>Contraseña</TableCell>
            <TableCell>Acc</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataUsers.map((item, i) => (
            <TableRow key={i}>
              <TableCell>{item.id}</TableCell>
              <TableCell>
                {item.name.firstName}
                <br />
                {item.name.lastName}
              </TableCell>
              {item.role.admin ? <TableCell>Administrador</TableCell> : null}
              {item.role.kitchen ? <TableCell>Cocinero</TableCell> : null}
              {item.role.waiter ? <TableCell>Mesero</TableCell> : null}
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.password}</TableCell>
              <TableCell>
                <FontAwesomeIcon
                  onClick={() => {
                    conditionalRenderTrue();
                    recoveryDataUser(
                      item.id,
                      item.name.firstName,
                      item.name.lastName,
                      item.email,
                      item.password
                    );
                    handleOpen();
                  }}
                  icon={faEdit}
                ></FontAwesomeIcon>
                <br />
                <FontAwesomeIcon
                  icon={faTrashAlt}
                  onClick={(e) => {
                    conditionalRenderFalse();
                    recoveryDataUser(
                      item.id,
                      item.name.firstName,
                      item.name.lastName,
                      item.email,
                      item.password
                    );
                    handleOpen();
                  }}
                ></FontAwesomeIcon>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        </Table>
      </TableContainer>
      {conditionalButtonModal ? (
        <ContentModal open={open} handleClose={handleClose}>
          <h1>Editar información de empleado</h1>
          <FormEdit
            recoveredData={recoveredData}
            handleClose={handleClose}
            user={user}
            handleUserChange={handleUserChange}
            handleDataRole={handleDataRole}
            editUser={editUser}
            defaultData={defaultData}
          />
        </ContentModal>
      ) : (
        <ContentModal open={open} handleClose={handleClose}>
          <p>¿Estas seguro de eliminar a {recoveredData.firstName}?</p>
          <button
            onClick={(e) => {
              deleteUser(recoveredData.id);
              handleClose();
            }}
          >
            Elminar
          </button>
        </ContentModal>
      )}
    </div>
  );
};

export default DataEmployees;
