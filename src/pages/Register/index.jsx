import { Form } from "../../components/Form/styles.js";
import { InputsMain } from "../../components/Input";
import { Logo } from "../../styles/Logo.js";
import { BtnDefault } from "../../styles/Button.js";

import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <div className="container">
      <div>
        <Logo>Kenzie Hub</Logo>
        <Link to={"/"}>Voltar</Link>
      </div>
      <Form>
        <InputsMain></InputsMain>
        <InputsMain></InputsMain>
        <InputsMain></InputsMain>
        <InputsMain></InputsMain>
        <InputsMain></InputsMain>
        <InputsMain></InputsMain>
        <select name="modulo" id="modulo">
          <option value="Selecione o módulo">Selecionar</option>
        </select>
        <BtnDefault
          backColor={"var(--color-primary)"}
          colorBorder={"var(--color-primary)"}
        >
          Cadastrar
        </BtnDefault>
      </Form>
    </div>
  );
};
