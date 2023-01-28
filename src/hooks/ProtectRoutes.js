import { useNavigate } from "react-router-dom";

const ProtectRoutes = async function (response) {
  const navigate = useNavigate();
  console.log("hello");
  if (response.status === 403 || response.status === 401) {
    navigate("/login");
    return true;
  }
  return false;
};

export default ProtectRoutes;
