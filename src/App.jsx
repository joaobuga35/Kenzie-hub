import { RoutesMain as Routes } from "./routes";
import Global from "./styles/Global";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./contexts/UserContext";
import { TechProvider } from "./contexts/TechContext";
function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <ToastContainer />
      <Global />
      <UserProvider>
        <TechProvider>
          <Routes />
        </TechProvider>
      </UserProvider>
    </>
  );
}

export default App;
