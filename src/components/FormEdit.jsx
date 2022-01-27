import { TextField } from "@mui/material";
import { Box } from "@mui/system";

export function FormEdit({
  handleClose,
  recoveredData,
  defaultData,
  dataEdit,
  user,
  handleUserChange,
  handleDataRole,
  editUser,
}) {
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
          defaultValue={recoveredData.firstName}
            name="firstName"
            label="Nombre(s)"
            type="text"
            onChange={defaultData}
          />
          <TextField
            defaultValue={recoveredData.lastName}
            name="lastName"
            label="Apellidos"
            type="text"
            onChange={defaultData}
          />
          <TextField
            defaultValue={recoveredData.email}
            name="email"
            label="Correo"
            type="text"
            onChange={defaultData}
          />
          <TextField
            defaultValue={recoveredData.password}
            name="password"
            label="Contraseña"
            type="password"
            onChange={defaultData}
          />
          <select id="input-select" onChange={handleDataRole}>
            <option value="N/A">Seleccione el puesto</option>
            <option value="admin">Administrador</option>
            <option value="waiter">Mesero</option>
            <option value="kitchen">Cocinero</option>
          </select>
          <button
            onClick={(e) => {
              e.preventDefault();
              editUser(recoveredData.id);
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
/*<form
        id="form-admin"
      >
        <section>
          <label htmlFor="">Nombre(s)</label>
          <input
            name="firstName"
            type="text"
            onChange={handleUserChange}
          />
          <label htmlFor="">Apellidos</label>
          <input
            name="lastName"
            type="text"
            onChange={handleUserChange}
          />
          <label htmlFor="role">Puesto</label>
          <select id="role" onChange={handleDataRole}>
            <option value="N/A">Seleccione el puesto</option>
            <option value="admin">Administrador</option>
            <option value="waiter">Mesero</option>
            <option value="kitchen">Cocinero</option>
          </select>
          <label htmlFor="">Correo Electrónico</label>
          <input
            name="email"
            type="email"
            defaultValue={recoveredData.email}
            onChange={handleUserChange}
          />
          <label htmlFor="password">Constraseña</label>
          <input
            name="password"
            type="password"
            defaultValue={recoveredData.password}
            onChange={handleUserChange}
          />
          <section>
            <button onClick={(e) => {
                if (
                  user.firstName === "" ||
                  user.lastName === "" ||
                  user.role === "" ||
                  user.password === "" ||
                  user.email === ""
                ) {
                  alert("error");
                }else{
                  e.preventDefault();
                  editUser(recoveredData.id);
                  handleClose();
                }
              }}>Editar</button>
          </section>
        </section>
      </form>*/
