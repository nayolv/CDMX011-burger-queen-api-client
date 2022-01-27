import { dataApi } from "./dataApi";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";


const LoginJSON = () => {
  const cookies = new Cookies();
  const navigate = useNavigate();

  const getUsers = async (email, password) => {

    await dataApi
      .get("https://fake-api-burgerqueen.herokuapp.com/users", {
        params: { email: email, password: password },
      })
      .then((response) => {
        return response.data;
      })
      .then((response) => {
        if (response.length > 0) {
          let res = response[0];
          cookies.set("id", res.id, { path: "/" });
          cookies.set("name", res.name, { path: "/" });
          cookies.set("role", res.role, { path: "/" });
          cookies.set("email", res.email, { path: "/" });
          cookies.set("password", res.password, { path: "/" });
        if(res.role.kitchen) {
            navigate("/kitchen");
          } else if (res.role.waiter) {
            navigate("/home");
          } else if (res.role.admin) {
            navigate("/admin");
          }
        } else {
          alert("No");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const getCookies = () => {
  if (!cookies.get("email")) {
      navigate( "/");
    }
  };

  const removeCookies = () => {
    cookies.remove("id", { path: "/" });
    cookies.remove("name", { path: "/" });
    cookies.remove("role", { path: "/" });
    cookies.remove("email", { path: "/" });
    cookies.remove("password", { path: "/" });
    navigate("/");
  };
  return {
    getUsers,
    getCookies,
    removeCookies,
  };
};

export default LoginJSON;
