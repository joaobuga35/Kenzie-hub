import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { Logo } from "../../styles/Logo";
import { HeaderDash } from "./styles";

export const Header = () => {
  const { removeLocalStorage } = useContext(UserContext);
  return (
    <HeaderDash>
      <Logo>Kenzie Hub</Logo>
      <Link
        to={"/"}
        onClick={() => {
          removeLocalStorage();
        }}
      >
        Sair
      </Link>
    </HeaderDash>
  );
};
