import { Header } from "../../components/Header";
import { DivDashMain, Profile } from "./styles";
export const Dashboard = () => {
  const datas = localStorage.getItem("@dataUser");
  const datasUpdate = JSON.parse(datas);

  const removeLocalStorage = () => {
    localStorage.removeItem("@dataUser");
  };
  return (
    <div className="container-dash">
      <DivDashMain>
        <Header removeLocalStorage={removeLocalStorage}></Header>
        <Profile border={"1px solid var(--gray-3)"}>
          <h2>Olá, {datasUpdate.user.name}</h2>
          <span>{datasUpdate.user.course_module}</span>
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
