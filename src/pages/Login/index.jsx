import { Form } from "../../components/Form/styles.js";
import { InputsMain } from "../../components/Input";
import { Logo } from "../../styles/Logo.js";
import { BtnDefault } from "../../styles/Button.js";
import { DivRedirectRegister } from "./styles.js";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchemaLogin } from "./registerSchema.js";
import "animate.css";
import { UserContext } from "../../contexts/UserContext/index.jsx";
import { useContext } from "react";

export const Login = () => {
  const { userLogin } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(registerSchemaLogin),
  });

  const submit = async (data) => {
    await userLogin(data);
    reset();
  };
  return (
    <div className="container animate__animated animate__fadeInUpBig">
      <Logo marginTop={"7rem"} marginBottom={"1.5rem"}>
        Kenzie Hub
      </Logo>
      <Form noValidate onSubmit={handleSubmit(submit)}>
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
        <BtnDefault
          type="submit"
          backColor={"var(--color-primary)"}
          colorBorder={"var(--color-primary)"}
        >
          Login
        </BtnDefault>
        <DivRedirectRegister>
          <span>Ainda não possui uma conta?</span>
          <Link to={"/register"}>Cadastre-se</Link>
        </DivRedirectRegister>
      </Form>
    </div>
  );
};
