import * as yup from "yup";

export const registerSchemaEdit = yup.object().shape({
  status: yup.string().required("O status é obrigatório"),
});
