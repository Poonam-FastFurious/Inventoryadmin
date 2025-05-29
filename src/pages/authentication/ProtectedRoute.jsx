// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import useAdminStore from "../../Store/useAdminStore";

const ProtectedRoute = ({ children }) => {
  const isTokenExpired = useAdminStore.getState().isTokenExpired();
  const token = localStorage.getItem("accessToken"); // adjust this key based on your storage method

  if (!token || isTokenExpired) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
