import {
  faExclamationTriangle,
  faUndo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Cookies from "universal-cookie";
import Banner from "../components/Banner";
import ContentModal from "../components/Modal";
import { useDataKitchen } from "../hooks/useDataKitchen";
import { useShowHooks } from "../hooks/useShowHooks";
import camarera from "../images/camarera.png";
const cookies = new Cookies();

function Ready() {
  const { ready, updateApiReady, recoverID, id } = useDataKitchen();
  const { open, handleOpen, handleClose } = useShowHooks();
  const userName = cookies.get("name").firstName;
  
  return (
    <>
      <Banner>
        <p>
          {userName}
          <img src={camarera} alt="mesera" />
        </p>
      </Banner>
      <div className="cards-kitchen">
        {ready.map((item, i) => (
          <Card key={i} sx={{ width: 370, margin: 2 }}>
            <CardContent>
              <span>{item.id}</span>
              <h1 align="center">Cliente: {item.client}</h1>
              <TableContainer>
                <Table>
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
                  handleOpen();
                  recoverID(item.id);
                }}
              >
                Entregar orden
              </button>
            </CardContent>
          </Card>
        ))}

        <section id="regresar-btn">
          <FontAwesomeIcon
            icon={faUndo}
            onClick={() => {
              window.history.back();
            }}
          ></FontAwesomeIcon>
          <span
            onClick={() => {
              window.history.back();
            }}
          >
            Regresar
          </span>
        </section>

        <ContentModal key="modalReady" open={open} handleClose={handleClose}>
          <FontAwesomeIcon
            icon={faExclamationTriangle}
            style={{ color: "#F87F55" }}
          ></FontAwesomeIcon>
          <h1>Entregar orden {"no." + id}</h1>
          <p>¿Quieres continuar?</p>
          <button
            onClick={(e) => {
              e.preventDefault();
              handleClose();
              updateApiReady(id);
            }}
          >
            Enviar
          </button>
        
        </ContentModal>
      </div>
    </>
  );
}

export default Ready;
