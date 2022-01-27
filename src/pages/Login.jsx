import { Fragment } from "react";
import Banner from "../components/Banner";
import { FormLogin } from "../components/FormLogin";
import camarera from "../images/camarera.png";
import cocinero from "../images/cocinero.png"; 
import gerente from "../images/gerente.png";

function Login() {
  return (
    <Fragment>
      <Banner>
        <p>POS system</p>
      </Banner>
      <main>
        <div className="images">
          <img src={gerente} alt="gerente" />
          <img src={camarera} alt="camarera" />
          <img src={cocinero} alt="cocinero" />
        </div>
        <FormLogin/>
      </main>
    </Fragment>
  );
}
export default Login;
