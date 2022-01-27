import { MenuItem, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useDataEmployees } from "../hooks/useDataEmployees";

export function FormRegister({ handleClose }) {
  const { handleDataRole, handleUserChange, postDataUsers } =
    useDataEmployees();

  return (
    <>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            name="firstName"
            label="Nombre(s)"
            type="text"
            onChange={handleUserChange}
          />
          <TextField
            name="lastName"
            label="Apellidos"
            type="text"
            onChange={handleUserChange}
          />
          <TextField
            name="email"
            label="Correo"
            type="text"
            onChange={handleUserChange}
          />
          <TextField
            name="password"
            label="Contraseña"
            type="password"
            onChange={handleUserChange}
          />
          <select id="role-input" onChange={handleDataRole}>
            <option value="N/A">Seleccione el puesto</option>
            <option value="admin">Administrador</option>
            <option value="waiter">Mesero</option>
            <option value="kitchen">Cocinero</option>
          </select>
          <button
            onClick={(e) => {
              e.preventDefault();
              postDataUsers();
              handleClose();
            }}
          >
            Registrar
          </button>
        </div>
      </Box>
    </>
  );
}
/* <form id="form-admin">
        <section>
          <label htmlFor="firstName">Nombre(s)</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            onChange={handleUserChange}
          />
          <label htmlFor="">Apellidos</label>
          <input name="lastName" type="text" onChange={handleUserChange} />
          <label htmlFor="role">Puesto</label>
          <select id="role" onChange={handleDataRole}>
            <option value="N/A">Seleccione el puesto</option>
            <option value="admin">Administrador</option>
            <option value="waiter">Mesero</option>
            <option value="kitchen">Cocinero</option>
          </select>
          <label htmlFor="">Correo Electrónico</label>
          <input name="email" type="email" onChange={handleUserChange} />
          <label htmlFor="password">Constraseña</label>
          <input name="password" type="password" onChange={handleUserChange} />
          <section>
            <button
              onClick={(e) => {
                e.preventDefault();
                postDataUsers();
                handleClose();
              }}
            >
              Registrar
            </button>
          </section>
        </section>
      </form>*/
