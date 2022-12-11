import { Header } from "../../components/Header";
import { DivDashMain, Profile } from "./styles";
import "animate.css";
import { ButtonModal } from "../../styles/Button";
import { BsPlusLg } from "react-icons/bs";
import { TechList } from "../../components/List";
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
          <div className="divTech">
            <h3>Tecnologias</h3>
            <ButtonModal>
              <BsPlusLg className="plus" />
            </ButtonModal>
          </div>
          <TechList>
            <li>
              <h3>React</h3>
              <span>Avançado</span>
            </li>

            <li>
              <h3>React</h3>
              <span>Avançado</span>
            </li>

            <li>
              <h3>React</h3>
              <span>Avançado</span>
            </li>

            <li>
              <h3>React</h3>
              <span>Avançado</span>
            </li>
          </TechList>
        </Profile>
      </DivDashMain>
    </div>
  );
};
