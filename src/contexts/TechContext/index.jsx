import { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { api } from "../../services/api.js";
import { UserContext } from "../UserContext/index.jsx";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const { token } = useContext(UserContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [techs, setTechs] = useState([]);
  const [filterTech, setFilterTech] = useState([]);
  const id = filterTech.map((elem) => elem.id);

  useEffect(() => {
    (async () => {
      try {
        api.defaults.headers.common.authorization = `Bearer ${token}`;
        const response = await api.get("profile");
        setTechs([...response.data.techs]);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [modalVisible, token, modalEdit, id]);

  const userUpdate = async (form) => {
    try {
      const response = await api.put(`users/techs/${id}`, form);
      toast.success("Tecnologia Atualizada!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const userDelete = async (form) => {
    try {
      const response = await api.delete(`users/techs/${id}`, form);
      toast.success("Tecnologia deletada!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const TechCreate = async (form) => {
    const load = toast.loading("Por favor espere...");
    try {
      const response = await api.post("users/techs", form);
      toast.update(load, {
        render: "Tecnologia Cadastrada!",
        type: "success",
        isLoading: false,
        theme: "dark",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      console.log(error);
      toast.update(load, {
        render: "Tecnologia já existente!",
        type: "error",
        isLoading: false,
        theme: "dark",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <TechContext.Provider
      value={{
        modalVisible,
        setModalVisible,
        TechCreate,
        techs,
        setTechs,
        modalEdit,
        setModalEdit,
        filterTech,
        setFilterTech,
        userUpdate,
        userDelete,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
