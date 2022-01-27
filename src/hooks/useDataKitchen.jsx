import moment from "moment";
import { useEffect, useState } from "react";
import { dataApi } from "../api/dataApi";
import { usePostProducts } from "./usePostProduct";

export const useDataKitchen = () => {
  const [dataKitchen, setDataKitchen] = useState([]);
  const [ready, setReady] = useState([])
  const { time } = usePostProducts();
  const [timeInMinutes, setTimeInMinutes] = useState(0);
  const [id, setId] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      getOrders();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const getOrders = async () => {
    const resp = await dataApi.get("https://fake-api-burgerqueen.herokuapp.com/orders");
    const pendingOrder = resp.data.filter((i) => i.status === "Pendiente");
    setDataKitchen(pendingOrder);
    const readyOrder =  resp.data.filter((i) => i.status === "Lista");
    setReady(readyOrder)
  };

  const updateApiKitchen = async (id) => {
      await dataApi.patch(`https://fake-api-burgerqueen.herokuapp.com/orders/${id}`, {
        status: "Lista",
        exit: moment(time).format("HH:mm"),
        time: timeInMinutes,
      });
  };

  const updateApiReady = async (id) => {
  await dataApi.patch(`https://fake-api-burgerqueen.herokuapp.com/orders/${id}`, {
        status: "Entregada",
      });
  }

  const timeInKitchen = (exit, entry) => {
    exit = moment(time).format("HH:mm");
    const splitEntry = entry.split(":");
    const hourEntry = parseInt(splitEntry[0]);
    const minEntry = parseInt(splitEntry[1]);
    const splitExit = exit.split(":");
    const hourExit = parseInt(splitExit[0]);
    const minExit = parseInt(splitExit[1]);
    const timeElapsed = hourExit * 60 + minExit - (hourEntry * 60 + minEntry);
    setTimeInMinutes(timeElapsed);
  };

  const recoverID = (idOrder, client) => {
    setId(idOrder, client);
  };
 
  return {
    dataKitchen,
    updateApiKitchen,
    updateApiReady,
    timeInKitchen,
    timeInMinutes,
    recoverID,
    id,
    ready,
  };
};
