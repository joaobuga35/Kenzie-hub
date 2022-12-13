import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
import { LiStyle } from "./styles";
import "animate.css";

export const Li = ({ children, id }) => {
  const { setModalEdit, techs, setFilterTech } = useContext(TechContext);
  const filterAll = (id) => {
    const oneTech = techs.filter((elem) => id === elem.id);
    setFilterTech(oneTech);
  };

  return (
    <LiStyle
      id={id}
      onClick={(event) => {
        if (event.target.id) {
          filterAll(event.target.id);
        } else {
          filterAll(event.target.parentElement.id);
        }
        setModalEdit(true);
      }}
    >
      {children}
    </LiStyle>
  );
};
