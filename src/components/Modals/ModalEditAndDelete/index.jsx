import { useContext } from "react";
import { TechContext } from "../../../contexts/TechContext";
import { InputsMain } from "../../Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Label } from "../../Input/styles";
import { ModalContainer, ModalForm, ModalTitle, ModalWrapper } from "../styles";
import { registerSchemaEdit } from "./registerSchemaEdit";

export const ModalEditDelete = () => {
  const { setModalEdit, techs, filterTech, userUpdate, userDelete } =
    useContext(TechContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      title: filterTech.map((elem) => elem.title),
      status: filterTech.map((elem) => elem.status),
    },
    resolver: yupResolver(registerSchemaEdit),
  });

  const submit = async (data) => {
    await userUpdate(data);
    setModalEdit(false);
  };
  return (
    <ModalWrapper>
      <ModalContainer className="animate__animated animate__fadeInDown animate__slow">
        <ModalTitle>
          <h3>Tecnologia Detalhes</h3>
          <button onClick={() => setModalEdit(false)}>X</button>
        </ModalTitle>
        <ModalForm noValidate onSubmit={handleSubmit(submit)}>
          <InputsMain
            label={"Nome da Tecnologia"}
            disabled={"disabled"}
            register={register("title")}
          />
          <Label className="titleStatus"> Status</Label>
          <select
            name="nivel"
            id="nivel"
            className="selectModal"
            {...register("status")}
          >
            <option value="Iniciante">Iniciante</option>.
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <div className="divBtnFormModal">
            <button className="btnSave" type="submit">
              Salvar alterações
            </button>
            <button
              onClick={() => {
                userDelete();
                setModalEdit(false);
              }}
              className="btnExcludes"
            >
              Excluir
            </button>
          </div>
        </ModalForm>
      </ModalContainer>
    </ModalWrapper>
  );
};
