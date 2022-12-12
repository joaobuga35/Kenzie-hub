import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
import { LiStyle } from "./styles";

export const Li = ({ children, id }) => {
  const { setModalEdit, techs, setFilterTech } = useContext(TechContext);
  return (
    <LiStyle
      id={id}
      onClick={(event) => {
        setFilterTech(
          techs.filter(
            (elem) => parseInt(event.target.id) === parseInt(elem.id)
          )
        );
        setModalEdit(true);
      }}
    >
      {children}
    </LiStyle>
  );
};
