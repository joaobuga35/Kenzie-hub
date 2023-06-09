import { Header } from "../../components/Header";
import { DivDashMain, DivMessage, Profile } from "./styles";
import "animate.css";
import { ButtonModal } from "../../styles/Button";
import { BsPlusLg } from "react-icons/bs";
import { TechList } from "../../components/List";
import { Li } from "../../components/CardTech";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { TechContext } from "../../contexts/TechContext";
import { ModalCreate } from "../../components/Modals";
import { AiFillWarning } from "react-icons/ai";
import { ModalEditDelete } from "../../components/Modals/ModalEditAndDelete";
export const Dashboard = () => {
  const { user } = useContext(UserContext);
  const { modalVisible, setModalVisible, techs, modalEdit } =
    useContext(TechContext);

  return (
    <div className="container-dash animate__animated animate__fadeInUpBig">
      {modalVisible ? <ModalCreate></ModalCreate> : null}
      {modalEdit ? <ModalEditDelete></ModalEditDelete> : null}
      <DivDashMain>
        <Header></Header>
        <div className="divContentDatas">
          <Profile>
            <div className="divUser animate__animated animate__bounceInLeft animate__slower">
              <h2>Olá, {user.name}</h2>
              <span>{user.course_module}</span>
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
          {techs.length === 0 ? (
            <DivMessage>
              <AiFillWarning className="warning"></AiFillWarning>
              <h2>Você ainda não cadastrou nenhuma tecnologia</h2>
            </DivMessage>
          ) : (
            <TechList>
              {techs.map((elem, index) => (
                <Li key={elem.id} id={elem.id}>
                  <h3>{elem.title}</h3>
                  <span>{elem.status}</span>
                </Li>
              ))}
            </TechList>
          )}
        </Profile>
      </DivDashMain>
    </div>
  );
};
