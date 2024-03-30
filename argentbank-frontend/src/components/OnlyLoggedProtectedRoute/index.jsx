import { Navigate, Outlet } from "react-router-dom";

const OnlyLoggedProtectedRoute = () => {
  //get the user session / if not logged redirect to loginRoute
  const sessionStorageToken = sessionStorage.getItem("session_token");

  return sessionStorageToken ? <Outlet /> : <Navigate to="Login" />;
};

export default OnlyLoggedProtectedRoute;
