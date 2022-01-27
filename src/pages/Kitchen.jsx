import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useDataKitchen } from "../hooks/useDataKitchen";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import ContentModal from "../components/Modal";
import LoginJSON from "../api/LoginJSON";
import { useEffect } from "react";
import { useShowHooks } from "../hooks/useShowHooks";
import Banner from "../components/Banner";
import Cookies from "universal-cookie/es6";
import cocinero from "../images/cocinero.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationTriangle,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
const cookies = new Cookies();

function Kitchen() {
  const { getCookies, removeCookies } = LoginJSON();
  const {
    dataKitchen,
    updateApiKitchen,
    timeInKitchen,
    timeInMinutes,
    recoverID,
    id,
  } = useDataKitchen();

  const { open, handleOpen, handleClose } = useShowHooks();

  useEffect(() => {
    getCookies();
  }, []);

  const userName = cookies.get("name").firstName;


  return (
    <>
      <Banner>
        <p>
          {userName}
          <img src={cocinero} alt="mesero" />
        </p>
        <section id="logout-principal">
          <span
            onClick={() => {
              removeCookies();
            }}
          >
            Salir
          </span>
          <FontAwesomeIcon
            id="icon-signout"
            icon={faSignOutAlt}
            onClick={() => {
              removeCookies();
            }}
          ></FontAwesomeIcon>
        </section>
      </Banner>
      <div className="cards-kitchen">
        {dataKitchen.map((item, i) => (
          <Card key={i} sx={{ minWidth: 350, margin: 1 }}>
            <CardContent>
              <span>{item.id}</span>
              <h1 align="center">Cliente: {item.client}</h1>
              <TableContainer>
                <Table sx={{ minWidth: 300 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Producto</TableCell>
                      <TableCell>Cantidad</TableCell>
                    </TableRow>
                  </TableHead>
                  {item.products.map((elem, j) => (
                    <TableBody key={j}>
                      <TableRow>
                        <TableCell>{elem.name}</TableCell>
                        <TableCell align="center">{elem.quantity}</TableCell>
                      </TableRow>
                    </TableBody>
                  ))}
                </Table>
              </TableContainer>
              <p>Entrada: {item.entry}</p>
              <p>Salida: {item.exit}</p>
              <button
                id="kitchen-btn"
                onClick={(e) => {
                  e.preventDefault();
                  timeInKitchen(item.exit, item.entry);
                  handleOpen();
                  recoverID(item.id);
                }}
              >
                Orden terminada
              </button>
            </CardContent>
          </Card>
        ))}
        <ContentModal key="modalKitchen" open={open} handleClose={handleClose}>
          <FontAwesomeIcon
            icon={faExclamationTriangle}
            style={{ color: "#F87F55" }}
          ></FontAwesomeIcon>
          <h1>Tiempo en cocina {timeInMinutes} minutos</h1>
          <p>¿Enviar orden {id} a mesero?</p>
          <button
            onClick={(e) => {
              e.preventDefault();
              handleClose();
              updateApiKitchen(id);
            }}
          >
            Enviar
          </button>
        </ContentModal>
      </div>
    </>
  );
}

export default Kitchen;
