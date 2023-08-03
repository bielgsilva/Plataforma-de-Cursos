import { toastSucess } from "../helpers/ToastSuccess";
import { toastError } from "../helpers/ToastError";
import { api } from "../lib/axios"

export const clientEdit = async (clientData, id, token) => {
  try {

    const response = await api.post(`/clients/edit/profile/${id}`, clientData);

    toastSucess("Dados do cliente atualizados com sucesso");
    
    return response.data.client;

  } catch (error) {
    const { message, errors } = error.response.data;

    if (errors) {
      if (errors.email) {
        toastError(errors.email);
      }
      if (errors.cpf) {
        toastError(errors.cpf);
      }
    } else {
      toastError(message);
    }
    return null;
  }
};