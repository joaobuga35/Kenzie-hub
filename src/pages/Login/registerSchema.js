import * as yup from "yup";

export const registerSchemaLogin = yup.object().shape({
  email: yup
    .string()
    .required("O e-mail é obrigatório")
    .email("O e-mail digitado é inválido.")
    .max(200, "O nome tem um limite de 200 caracteres"),
  password: yup.string().required("A senha é obrigatória"),
});
