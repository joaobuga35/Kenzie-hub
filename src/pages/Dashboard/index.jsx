import { Header } from "../../components/Header";
import { DivDashMain, Profile } from "./styles";
import "animate.css";
export const Dashboard = () => {
  const datas = localStorage.getItem("@dataUser");
  const datasUpdate = JSON.parse(datas);

  const removeLocalStorage = () => {
    localStorage.removeItem("@dataUser");
    localStorage.removeItem("@TOKEN");
  };
  return (
    <div className="container-dash animate__animated animate__fadeInUpBig">
      <DivDashMain>
        <Header removeLocalStorage={removeLocalStorage}></Header>
        <div className="divContentDatas">
          <Profile>
            <div className="divUser animate__animated animate__bounceInLeft animate__slower">
              <h2>Olá, {datasUpdate.user.name}</h2>
              <span>{datasUpdate.user.course_module}</span>
            </div>
          </Profile>
        </div>
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
