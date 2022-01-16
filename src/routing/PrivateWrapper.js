import { Navigate, Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { isAuthenticated } from "../atom";

const PrivateWrapper = () => {
  const authenticated = useRecoilValue(isAuthenticated);
  return authenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateWrapper;
