import { useNavigate } from "react-router-dom";

function GoBack(e) {
  const navigate = useNavigate();

    e.preventDefault();
    navigate("./home");
  }

export default GoBack
