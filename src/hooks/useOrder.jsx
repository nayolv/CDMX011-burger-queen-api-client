import { useState } from "react";

export const useOrder = () => {
  const [order, setOrder] = useState([]);
  const [total, setTotal] = useState(0);
  const addProduct = (product, price, id, quantity) => {
    setOrder([
      ...order,
      { name: product, price: price, id: id, quantity: quantity },
    ]);
    setTotal(total + price);
  };
  const minusButton = (price) => {
    setTotal(total-price);
  };
  const plusButton = (price) => {
    setTotal(total+price)
  };
  const deleteRow = (index, e) => {
    setOrder(order.filter((v, i) => i !== index));
  };
  const cleanOrder = order.filter((valorActual, indiceActual, arreglo) => {
    return (
      arreglo.findIndex(
        (valorDelArreglo) =>
          JSON.stringify(valorDelArreglo) === JSON.stringify(valorActual)
      ) === indiceActual
    );
  });

  return {
    addProduct,
    total,
    minusButton,
    cleanOrder,
    deleteRow,
    plusButton,
  };
};

