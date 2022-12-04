import { Header } from "../../components/Header";
import { DivDashMain, Profile } from "./styles";
export const Dashboard = () => {
  return (
    <div className="container-dash">
      <DivDashMain>
        <Header></Header>
        <Profile border={"1px solid var(--gray-3)"}>
          <h2>Olá, Samuel Leão</h2>
          <span>Primeiro módulo (Introdução ao Frontend)</span>
        </Profile>
        <Profile>
          <h2>Que pena! Estamos em desenvolvimento.</h2>
          <p>
            Nossa aplicação está em desenvolvimento, em breve teremos novidades
          </p>
        </Profile>
      </DivDashMain>
    </div>
  );
};
