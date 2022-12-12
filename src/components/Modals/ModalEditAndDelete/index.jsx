import { useContext } from "react";
import { TechContext } from "../../../contexts/TechContext";
import { InputsMain } from "../../Input";
import { Label } from "../../Input/styles";
import { ModalContainer, ModalForm, ModalTitle, ModalWrapper } from "../styles";

export const ModalEditDelete = () => {
  const { setModalEdit, techs } = useContext(TechContext);
  return (
    <ModalWrapper>
      <ModalContainer>
        <ModalTitle>
          <h3>Tecnologia Detalhes</h3>
          <button onClick={() => setModalEdit(false)}>X</button>
        </ModalTitle>
        <ModalForm>
          <InputsMain />
          <Label className="titleStatus"> Status</Label>
          <select name="nivel" id="nivel" className="selectModal">
            <option value="Iniciante">Iniciante</option>.
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <div>
            <button type="submit">Salvar alterações</button>
            <button>Excluir</button>
          </div>
        </ModalForm>
      </ModalContainer>
    </ModalWrapper>
  );
};
