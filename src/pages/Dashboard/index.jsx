import { Header } from "../../components/Header";
import { DivDashMain, Profile } from "./styles";
import "animate.css";
import { ButtonModal, ButtonTrash } from "../../styles/Button";
import { BsPlusLg } from "react-icons/bs";
import { TechList } from "../../components/List";
import { Li } from "../../components/CardTech";
import { BsTrash } from "react-icons/bs";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { TechContext } from "../../contexts/TechContext";
import { ModalCreate } from "../../components/Modals";
export const Dashboard = () => {
  const { datasUpdate } = useContext(UserContext);
  const { modalVisible, setModalVisible } = useContext(TechContext);

  return (
    <div className="container-dash animate__animated animate__fadeInUpBig">
      {modalVisible ? <ModalCreate></ModalCreate> : null}
      <DivDashMain>
        <Header></Header>
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
            <ButtonModal onClick={() => setModalVisible(true)}>
              <BsPlusLg className="plus" />
            </ButtonModal>
          </div>
          <TechList>
            <Li>
              <h3>React</h3>
              <div className="divTrash">
                <span>Avançado</span>
                <ButtonTrash>
                  <BsTrash />
                </ButtonTrash>
              </div>
            </Li>

            <Li>
              <h3>React</h3>
              <div className="divTrash">
                <span>Avançado</span>
                <ButtonTrash>
                  <BsTrash />
                </ButtonTrash>
              </div>
            </Li>

            <Li>
              <h3>React</h3>
              <div className="divTrash">
                <span>Avançado</span>
                <ButtonTrash>
                  <BsTrash />
                </ButtonTrash>
              </div>
            </Li>

            <Li>
              <h3>React</h3>
              <div className="divTrash">
                <span>Avançado</span>
                <ButtonTrash>
                  <BsTrash />
                </ButtonTrash>
              </div>
            </Li>
          </TechList>
        </Profile>
      </DivDashMain>
    </div>
  );
};
