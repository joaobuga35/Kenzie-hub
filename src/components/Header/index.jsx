import { Link } from "react-router-dom";
import { Logo } from "../../styles/Logo";
import { HeaderDash } from "./styles";

export const Header = () => {
  return (
    <HeaderDash>
      <Logo>Kenzie Hub</Logo>
      <Link to={"/"}>Sair</Link>
    </HeaderDash>
  );
};
