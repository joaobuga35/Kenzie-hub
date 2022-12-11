import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { api } from "../../services/api.js";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const token = JSON.parse(localStorage.getItem("@TOKEN"));

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        api.defaults.headers.common.authorization = `Bearer ${token}`;
        const response = await api.get("profile");
        navigate("/dashboard");
      } catch (error) {
        console.error(error);
        navigate("/");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const userLogin = async (form) => {
    try {
      const response = await api.post("sessions", form);
      localStorage.setItem("@dataUser", JSON.stringify(response.data));
      localStorage.setItem("@TOKEN", JSON.stringify(response.data.token));
      toast.success("Logado com sucesso!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      navigate("/dashboard");
    } catch (error) {
      toast.error("Email ou senha incorreto!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const userRegister = async (form) => {
    try {
      const response = await api.post("users", form);
      toast.success("Cadastro realizado com sucesso!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      navigate("/");
    } catch (error) {
      toast.error("Usuário já cadastrado!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const datas = localStorage.getItem("@dataUser");
  const datasUpdate = JSON.parse(datas);

  const removeLocalStorage = () => {
    localStorage.removeItem("@dataUser");
    localStorage.removeItem("@TOKEN");
  };
  return (
    <UserContext.Provider
      value={{
        navigate,
        userLogin,
        userRegister,
        loading,
        datasUpdate,
        removeLocalStorage,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
