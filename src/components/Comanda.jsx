import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationTriangle,
  faMinusCircle,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { usePostProducts } from "../hooks/usePostProduct";
import { Fragment } from "react";
import ContentModal from "./Modal";
import { useShowHooks } from "../hooks/useShowHooks";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

function Comanda({ order, total, minusButton, deleteRow, plusButton }) {
  const { postProducts, clientName, clientNameFn } = usePostProducts(1);
  const {
    open,
    handleOpen,
    handleClose,
    conditionalButtonModal,
    conditionalRenderTrue,
    conditionalRenderFalse,
  } = useShowHooks();

  return (
    <Fragment>
      <section id="client">
        Cliente
        <input
          type="text"
          onChange={(e) => {
            clientNameFn(e.target.value);
          }}
        />
      </section>
      <TableContainer style={{maxHeight: 350}}>
        <Table >
          <TableHead>
            <TableRow>
              <TableCell>Cant</TableCell>
              <TableCell>Producto</TableCell>
              <TableCell>Accs</TableCell>
              <TableCell>Precio</TableCell>
              <TableCell>Subtotal</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {order.map((product, i) => (
              <TableRow key={i}>
                <TableCell>
                  <span>{product.quantity}</span>
                </TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>
                  <FontAwesomeIcon
                    icon={faPlusCircle}
                    onClick={() => {
                      product.quantity++;
                      plusButton(parseInt(product.price), product.quantity);
                    }}
                  />
                  <br />
                  <FontAwesomeIcon
                    icon={faMinusCircle}
                    onClick={(e) => {
                      product.quantity--;
                      minusButton(parseInt(product.price), product.quantity);
                      if (product.quantity === 0) {
                        deleteRow(i, e);
                        minusButton(parseInt(product.price), product.quantity);
                      }
                    }}
                  />
                </TableCell>
                <td>${parseInt(product.price)}</td>
                <td>${parseInt(product.price) * product.quantity}</td>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <section id="total">
        <span>Total ${total}</span>
      </section>
      <section id="btn-send-section">
        <button
          id="send"
          onClick={() => {
            if (clientName === "" || total === 0) {
              conditionalRenderTrue();
              handleOpen();
            } else {
              conditionalRenderFalse();
              handleOpen();
            }
          }}
        >
          Ordenar
        </button>
      </section>
      {conditionalButtonModal ? (
        <ContentModal open={open} handleClose={handleClose}>
          <FontAwesomeIcon icon={faExclamationTriangle} style={{ color: '#F87F55' }}></FontAwesomeIcon>
          <h3>Agrega nombre del cliente o producto</h3>
        </ContentModal>
      ) : (
        <ContentModal open={open} handleClose={handleClose}>
          <FontAwesomeIcon icon={faExclamationTriangle} style={{ color: '#F87F55' }}></FontAwesomeIcon>
          <p>¿Estás seguro de enviar la orden a cocina?</p>
          <br />
          <button
            onClick={() => {
              postProducts(order, clientName);
              window.location.reload();
            }}
          >
            Enviar
          </button>
        </ContentModal>
      )}
    </Fragment>
  );
}

export default Comanda;