import { Link } from "react-router-dom";
import { Logo } from "../../styles/Logo";
import { HeaderDash } from "./styles";

export const Header = ({ removeLocalStorage }) => {
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
