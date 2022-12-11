import * as yup from "yup";

export const registerSchemaCreate = yup.object().shape({
  title: yup.string().required("O título é obrigatório"),
  status: yup.string().required("O status é obrigatório"),
});
