import { Form } from "../../components/Form/styles.js";
import { InputsMain } from "../../components/Input";
import { Logo } from "../../styles/Logo.js";
import { BtnDefault } from "../../styles/Button.js";
import { Link } from "react-router-dom";
import { DivButtonBack } from "./styles.js";
import { Label } from "../../components/Input/styles.js";

export const Register = () => {
  return (
    <div className="container container-register">
      <DivButtonBack>
        <Logo>Kenzie Hub</Logo>
        <Link to={"/"}>Voltar</Link>
      </DivButtonBack>
      <Form>
        <InputsMain
          label={"Nome"}
          type={"text"}
          id={"name"}
          placeholder={"Digite seu nome"}
        />
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
        <InputsMain
          label={"Confirmar Senha"}
          type={"password"}
          id={"passowordOk"}
          placeholder={"Digite novamente sua senha"}
        />
        <InputsMain
          label={"Bio"}
          type={"text"}
          id={"bio"}
          placeholder={"Fale sobre você"}
        />
        <InputsMain
          label={"Contato"}
          type={"text"}
          id={"contact"}
          placeholder={"Opção de contato"}
        />
        <div className="div-select">
          <Label>Selecionar módulo</Label>
          <select className="module" name="modulo" id="modulo">
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
        </div>
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
