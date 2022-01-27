import { useEffect, useState } from "react";
import { dataApi } from "../api/dataApi";

export const useProducts = () => {
  const [desayunos, setDesayunos] = useState([]);
  const [comidas, setComidas] = useState([]);
  useEffect(() => {
    const interval = setInterval(() => {
      getProducts();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const [product, setProduct] = useState({
    name: "",
    price: "",
    image: "",
    type: "",
    dateEntry: "",
  });

  const handleProductChange = (event) => {
    setProduct({
      ...product,
      [event.target.name]: event.target.value,
    });
  };
  const postDataProducts = async () => {
    console.log(product.name);
    await dataApi.post("https://fake-api-burgerqueen.herokuapp.com/products", {
      id: "",
      name: product.name,
      price: product.price,
      image: product.image,
      type: product.type,
      dateEntry: product.dateEntry,
      quantity: 1,
    });
  };
  const [recoveredDataProduct, setRecoveredDataProduct] = useState({
    name: "",
    id: "",
    price: "",
  });

  const [dataEditProduct, setDataEditProduct] = useState({
    name: "",
    id: "",
    price: "",
  });

  const getProducts = async () => {
    const resp = await dataApi.get("https://fake-api-burgerqueen.herokuapp.com/products");
    setDesayunos(resp.data.filter((prod) => prod.type === "Desayuno"));
    setComidas(resp.data.filter((prod) => prod.type === "Comida"));
  };

  const recoverDataProduct = (id, name, price) => {
    setRecoveredDataProduct({
      id: id,
      name: name,
      price: price,
    });
    setDataEditProduct({
      id: id,
      name: name,
      price: price,
    });
  };
  const defaultDataProduct = (event) => {
    setDataEditProduct({
      ...dataEditProduct,
      [event.target.name]: event.target.value,
    });
  };

  const editProduct = async (idProduct) => {
    await dataApi.patch(`https://fake-api-burgerqueen.herokuapp.com/products/${idProduct}`, {
      name: dataEditProduct.name,
      price: dataEditProduct.price,
      image: product.image,
      type: product.type,
      dateEntry: product.dateEntry,
      quantity: 1,
    });
  };

  const deleteProduct = async (idProduct) => {
    await dataApi.delete(`https://fake-api-burgerqueen.herokuapp.com/products/${idProduct}`);
  };

  return {
    desayunos,
    comidas,
    recoverDataProduct,
    recoveredDataProduct,
    deleteProduct,
    defaultDataProduct,
    dataEditProduct,
    handleProductChange,
    postDataProducts,
    editProduct
  };
};
