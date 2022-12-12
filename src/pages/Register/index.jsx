import { Form } from "../../components/Form/styles.js";
import { InputsMain } from "../../components/Input";
import { Logo } from "../../styles/Logo.js";
import { BtnDefault } from "../../styles/Button.js";
import { Link } from "react-router-dom";
import { DivButtonBack } from "./styles.js";
import { Label } from "../../components/Input/styles.js";
import { useForm } from "react-hook-form";
import { registerSchema } from "./registerSchema.js";
import { yupResolver } from "@hookform/resolvers/yup";
import "animate.css";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext/index.jsx";

export const Register = () => {
  const { userRegister } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(registerSchema),
  });

  const submit = async (data) => {
    await userRegister(data);
    reset();
  };
  return (
    <div className="container container-register animate__animated animate__fadeInUpBig">
      <DivButtonBack>
        <Logo>Kenzie Hub</Logo>
        <Link to={"/"}>Voltar</Link>
      </DivButtonBack>

      <Form noValidate onSubmit={handleSubmit(submit)}>
        <InputsMain
          label={"Nome"}
          type={"text"}
          id={"name"}
          placeholder={"Digite seu nome"}
          register={register("name")}
        />
        {errors.name && <p className="errors">{errors.name.message}</p>}
        <InputsMain
          label={"Email"}
          type={"text"}
          id={"email"}
          placeholder={"Digite seu email"}
          register={register("email")}
        />
        {errors.email && <p className="errors">{errors.email.message}</p>}
        <InputsMain
          label={"Senha"}
          type={"password"}
          id={"password"}
          placeholder={"Digite sua senha"}
          register={register("password")}
        />
        {errors.password && <p className="errors">{errors.password.message}</p>}
        <InputsMain
          label={"Confirmar Senha"}
          type={"password"}
          id={"passowordOk"}
          placeholder={"Digite novamente sua senha"}
          register={register("confirmPassword")}
        />
        {errors.confirmPassword && (
          <p className="errors">{errors.confirmPassword.message}</p>
        )}
        <InputsMain
          label={"Bio"}
          type={"text"}
          id={"bio"}
          placeholder={"Fale sobre você"}
          register={register("bio")}
        />
        {errors.bio && <p className="errors">{errors.bio.message}</p>}
        <InputsMain
          label={"Contato"}
          type={"text"}
          id={"contact"}
          placeholder={"Opção de contato"}
          register={register("contact")}
        />
        {errors.contact && <p className="errors">{errors.contact.message}</p>}
        <div className="div-select">
          <Label>Selecionar módulo</Label>
          <select
            className="module"
            name="modulo"
            id="modulo"
            {...register("course_module")}
          >
            <option value="">Selecione o módulo</option>
            <option value="Primeiro módulo (Introdução ao Frontend)">
              Primeiro módulo (Introdução ao Frontend)
            </option>
            <option value="Segundo módulo (Frontend Avançado)">
              Segundo módulo (Frontend Avançado)
            </option>
            <option value="Terceiro módulo (Introdução ao Backend)">
              Terceiro módulo (Introdução ao Backend)
            </option>
            <option value="Quarto módulo (Backend Avançado)">
              Quarto módulo (Backend Avançado)
            </option>
          </select>
          {errors.course_module && (
            <p className="errors">{errors.course_module.message}</p>
          )}
        </div>
        <BtnDefault
          type="submit"
          backColor={"var(--color-primary)"}
          colorBorder={"var(--color-primary)"}
        >
          Cadastrar
        </BtnDefault>
      </Form>
    </div>
  );
};
