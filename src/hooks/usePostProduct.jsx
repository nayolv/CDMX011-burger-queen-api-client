import moment from "moment";
import { useState, useEffect } from "react";
import { dataApi } from "../api/dataApi";

export const usePostProducts = () => {
  const [dataPost, setDataPost] = useState([]);
  const [clientName, setClientName] = useState("");
  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const clientNameFn = (value) => {
    setClientName(value);
  };

  const postProducts = (order, client) => {
    const product = [];
    order.map((item) =>
      product.push({ name: item.name, quantity: item.quantity })
    );
    dataApi
      .post("https://fake-api-burgerqueen.herokuapp.com/orders", {
        id: "",
        client: client,
        products: product,
        entry: moment(time).format("HH:mm"),
        exit: "",
        status: "Pendiente",
        time: "",
      })
      .then((res) => {
        setDataPost(res.data);
      });
  };

  return {
    postProducts,
    dataPost,
    clientNameFn,
    clientName,
    time,
  };
};
