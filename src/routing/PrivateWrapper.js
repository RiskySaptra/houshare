import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { isAuthenticated } from "../atom";

const PrivateWrapper = () => {
  const location = useLocation();
  const authenticated = useRecoilValue(isAuthenticated);

  if (!authenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default PrivateWrapper;
