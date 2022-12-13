import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { MyLoader } from "../components/Loading";

export const RoutesMain = () => {
  const { loading } = useContext(UserContext);
  return (
    <>
      {loading ? (
        <MyLoader />
      ) : (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      )}
    </>
  );
};
