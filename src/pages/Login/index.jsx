import { Form } from "../../components/Form/styles.js";
import { InputsMain } from "../../components/Input";
import { Logo } from "../../styles/Logo.js";
import { BtnDefault } from "../../styles/Button.js";
import { DivRedirectRegister } from "./styles.js";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="container">
      <Logo marginTop={"7rem"} marginBottom={"1.5rem"}>
        Kenzie Hub
      </Logo>
      <Form>
        <InputsMain
          label={"Email"}
          type={"text"}
          id={"email"}
          placeholder={"Digite seu email"}
        />
        <InputsMain
          label={"Senha"}
          type={"password"}
          id={"password"}
          placeholder={"Digite sua senha"}
        />
        <BtnDefault
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
