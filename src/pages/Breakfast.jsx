import {  faUndo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";
import Comanda from "../components/Comanda";
import GoBack from "../components/GoBack";
import Reminder from "../components/Reminder";
import { useOrder } from "../hooks/useOrder";
import { useProducts } from "../hooks/useProducts";

function Breakfast() {
  const { desayunos } = useProducts();
  const { cleanOrder, addProduct, total, minusButton, deleteRow, plusButton } =
    useOrder();
  return (
    <Fragment>
      <Reminder/>
      <div className="comanda-div">
        <section>
          <Comanda
            order={cleanOrder}
            total={total}
            deleteRow={deleteRow}
            minusButton={minusButton}
            plusButton={plusButton}
          />
        </section>
      </div>
      <section className="lunch-container">
        <section className="menu-container">
          {desayunos.map((product, i) => (
            <button
              key={i}
              id="activado"
              onClick={(e) => {
                if (e.target.id === "activado") {
                  e.target.id = "desactivado";
                  addProduct(
                    product.name,
                    parseInt(product.price),
                    product.id,
                    product.quantity
                  );
                }
              }}
            >
              {product.name}
              <br />${parseInt(product.price)}
            </button>
          ))}
        </section>
      </section>
      <section id="regresar-btn">
        <FontAwesomeIcon icon={faUndo} onClick={GoBack}></FontAwesomeIcon>
        <span>Regresar</span>
      </section>

     
    </Fragment>
  );
}

export default Breakfast;
