import { useEffect, useState } from "react";
import { dataApi } from "../api/dataApi";
export const useDataEmployees = () => {
  const [dataUsers, setDataUsers] = useState([]);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [recoveredData, setRecoveredData] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [dataEdit, setDataEdit] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const recoveryDataUser = (id, name, lastName, email, password) => {
    setRecoveredData({
      id: id,
      firstName: name,
      lastName: lastName,
      email: email,
      password: password,
    });
    setDataEdit({
      firstName: name,
      lastName: lastName,
      email: email,
      password: password,
    });
  };
  const defaultData = (event) => {
    setDataEdit({
      ...dataEdit,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getUsers();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleUserChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const [dataRole, setDataRole] = useState({
    admin: false,
    waiter: false,
    kitchen: false,
  });

  const handleDataRole = (event) => {
    setDataRole({
      [event.target.value]: true,
    });
  };

  const getUsers = async () => {
    const resp = await dataApi.get("https://fake-api-burgerqueen.herokuapp.com/users");
    setDataUsers(resp.data);
  };

  const deleteUser = async (id) => {
    await dataApi.delete(`https://fake-api-burgerqueen.herokuapp.com/users/${id}`);
  };

  
  const editUser = async (id) => {
    await dataApi.patch(`https://fake-api-burgerqueen.herokuapp.com/users/${id}`, {
      name: {
        firstName: dataEdit.firstName,
        lastName: dataEdit.lastName,
      },
      role: {
        admin: dataRole.admin,
        waiter: dataRole.waiter,
        kitchen: dataRole.kitchen,
      },
      email: dataEdit.email,
      password: dataEdit.password,
    });
  };

  const postDataUsers = async () => {
    await dataApi.post("https://fake-api-burgerqueen.herokuapp.com/users", {
      id: "",
      name: {
        firstName: user.firstName,
        lastName: user.lastName,
      },
      role: {
        admin: dataRole.admin,
        waiter: dataRole.waiter,
        kitchen: dataRole.kitchen,
      },
      email: user.email,
      password: user.password,
    });
  };

  return {
    dataUsers,
    deleteUser,
    recoveredData,
    recoveryDataUser,
    handleUserChange,
    handleDataRole,
    user,
    dataRole,
    postDataUsers,
    editUser,
    defaultData,
    dataEdit,
  };
};
