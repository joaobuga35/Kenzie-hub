import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
import { BtnDefault } from "../../styles/Button";
import { InputsMain } from "../Input";
import { Label } from "../Input/styles";
import { ModalContainer, ModalForm, ModalTitle, ModalWrapper } from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchemaCreate } from "./registerSchemaCreate.js";
import { useForm } from "react-hook-form";

export const ModalCreate = () => {
  const { setModalVisible, TechCreate } = useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(registerSchemaCreate),
  });

  const submit = async (data) => {
    await TechCreate(data);
    setModalVisible(false);
  };
  return (
    <ModalWrapper>
      <ModalContainer className="animate__animated animate__fadeInDown animate__slow">
        <ModalTitle>
          <h3>Cadastrar Tecnologia</h3>
          <button onClick={() => setModalVisible(false)}>X</button>
        </ModalTitle>
        <ModalForm noValidate onSubmit={handleSubmit(submit)}>
          <InputsMain
            id={"tecnologia"}
            label={"Nome"}
            type={"text"}
            placeholder={"Cadastre sua tecnologia"}
            register={register("title")}
          />
          {errors.title && (
            <p className="errorsModal">{errors.title.message}</p>
          )}
          <Label className="titleStatus">Selecionar Status</Label>
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
          {errors.status && (
            <p className="errorsModal">{errors.status.message}</p>
          )}
          <BtnDefault
            type="submit"
            backColor={"var(--color-primary)"}
            colorBorder={"var(--color-primary)"}
          >
            Cadastrar Tecnologia
          </BtnDefault>
        </ModalForm>
      </ModalContainer>
    </ModalWrapper>
  );
};
