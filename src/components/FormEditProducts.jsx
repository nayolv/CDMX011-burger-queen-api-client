import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function FormEditProducts({
  defaultDataProduct,
  handleClose,
  recoveredDataProduct,
  handleProductChange,
  editProduct,
}) {

    return (
    <div>
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
              defaultValue={recoveredDataProduct.name}
              name="name"
              label="Producto"
              type="text"
              onChange={defaultDataProduct}
            />
            <TextField
              defaultValue={recoveredDataProduct.price}
              name="price"
              label="Precio"
              type="text"
              onChange={defaultDataProduct}
            />
            <select
              id="input-select"
              name="type"
              onChange={handleProductChange}
            >
              <option>Categoría</option>
              <option value="Desayuno">Desayuno</option>
              <option value="Comida">Comida</option>
            </select>
            <input
              type="date"
              id="input-date-entry"
              name="dateEntry"
              min="2021-01-01"
              max="2021-12-31"
              onChange={handleProductChange}
            ></input>
            <div className="file-select" id="image">
              <input type="file" name="image" onChange={handleProductChange} />
            </div>
            <section>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  editProduct(recoveredDataProduct.id);
                  handleClose();
                }}
              >
                Enviar
              </button>
            </section>
          </div>
        </Box>
      </>
    </div>
  );
}

export default FormEditProducts;
