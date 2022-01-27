import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useProducts } from "../hooks/useProducts";

function FormAddProducts({handleClose}) {
const {handleProductChange, postDataProducts} = useProducts();
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
            name="name"
            label="Producto"
            type="text"
            onChange={handleProductChange}
          />
          <TextField
            name="price"
            label="Precio"
            type="text"
            onChange={handleProductChange}
          />
          <select id="input-select" name="type" onChange={handleProductChange}>
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
                postDataProducts();
                handleClose();
              }}
            >
              Enviar
            </button>
          </section>
        </div>
      </Box>
    </>
  );
}

export default FormAddProducts;

/*<form id="form-admin">
        <section>
          <label htmlFor="name">Producto</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={handleProductChange}
          />

          <label htmlFor="price">Precio</label>
          <input
            id="price"
            name="price"
            type="number"
            onChange={handleProductChange}
          />

          <label htmlFor="type">Categoría</label>
          <select id="type" name="type" onChange={handleProductChange}>
            <option>Seleccione la categoría</option>
            <option  value="Desayuno">Desayuno</option>
            <option  value="Comida">Comida</option>
          </select>

          <label htmlFor="dateEntry">Fecha</label>
          <input
            type="date"
            id="dateEntry"
            name="dateEntry"
            min="2021-01-01"
            max="2021-12-31"
            onChange={handleProductChange}
          ></input>

          <label htmlFor="uploadImg">Subir imagen</label>
          <input type="file" name="image" onChange={handleProductChange} />
         
          <section>
            <button onClick={()=> postDataProducts()}>Enviar</button>
          </section>
        </section>
      </form>*/
