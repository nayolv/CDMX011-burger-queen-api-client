import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { Table } from "react-bootstrap";
import { useProducts } from "../hooks/useProducts";
import { useShowHooks } from "../hooks/useShowHooks";
import FormEditProducts from "./FormEditProducts";
import ContentModal from "./Modal";

function DataProducts() {
  const {
    desayunos,
    comidas,
    recoverDataProduct,
    recoveredDataProduct,
    deleteProduct,
    defaultDataProduct,
    handleProductChange,
    editProduct,
  } = useProducts();
  const {
    open,
    handleOpen,
    handleClose,
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
              <TableCell>Precio</TableCell>
              <TableCell>Tipo</TableCell>
              <TableCell>Acc</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {desayunos.map((item, i) => (
              <TableRow key={i}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>${item.price}</TableCell>
                <TableCell>{item.type}</TableCell>
                <TableCell>
                  <FontAwesomeIcon
                    icon={faEdit}
                    onClick={() => {
                      conditionalRenderTrue();
                      recoverDataProduct(item.id, item.name, item.price);
                      handleOpen();
                    }}
                  ></FontAwesomeIcon>
                  <br />
                  <FontAwesomeIcon
                    icon={faTrashAlt}
                    onClick={() => {
                      conditionalRenderFalse();
                      recoverDataProduct(item.id, item.name, item.price);
                      handleOpen();
                    }}
                  ></FontAwesomeIcon>
                </TableCell>
              </TableRow>
            ))}
            {comidas.map((item, i) => (
              <tr key={i}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>${item.price}</TableCell>
                <TableCell>{item.type}</TableCell>
                <TableCell>
                  <FontAwesomeIcon
                    icon={faEdit}
                    onClick={() => {
                      conditionalRenderTrue();
                      recoverDataProduct(item.id, item.name, item.price);
                      handleOpen();
                    }}
                  ></FontAwesomeIcon>
                  <br />
                  <FontAwesomeIcon
                    icon={faTrashAlt}
                    onClick={() => {
                      conditionalRenderFalse();
                      recoverDataProduct(item.id, item.name, item.price);
                      handleOpen();
                    }}
                  ></FontAwesomeIcon>
                </TableCell>
              </tr>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {conditionalButtonModal ? (
        <ContentModal open={open} handleClose={handleClose}>
          <h1>Editar información de producto con id:{" "}{recoveredDataProduct.id}</h1>
          <FormEditProducts
            handleProductChange={handleProductChange}
            handleClose={handleClose}
            recoveredDataProduct={recoveredDataProduct}
            defaultDataProduct={defaultDataProduct}
            editProduct={editProduct}
          />
        </ContentModal>
      ) : (
        <ContentModal open={open} handleClose={handleClose}>
          <h1>¿Estas seguro de eliminar "{recoveredDataProduct.name}" </h1>
          <button
            onClick={(e) => {
              deleteProduct(recoveredDataProduct.id);
              handleClose();
            }}
          >
            Elminar
          </button>
        </ContentModal>
      )}
    </div>
  );
}

export default DataProducts;
