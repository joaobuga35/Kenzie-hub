import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
import { LiStyle } from "./styles";

export const Li = ({ children }) => {
  const { setModalEdit } = useContext(TechContext);
  return <LiStyle onClick={() => setModalEdit(true)}>{children}</LiStyle>;
};
