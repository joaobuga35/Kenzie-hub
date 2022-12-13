import { DivBlack } from "./styles";
import { ImSpinner3 } from "react-icons/im";
import "animate.css";

export const MyLoader = () => {
  return (
    <DivBlack>
      <ImSpinner3 className="iconLoad animate__animate animate__rotateIn" />
      <h2>Loading...</h2>
    </DivBlack>
  );
};
