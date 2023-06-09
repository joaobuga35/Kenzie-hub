import { Label, Input } from "./styles.js";
export const InputsMain = ({
  id,
  label,
  type,
  register,
  placeholder,
  disabled,
}) => {
  return (
    <div className="containerInput">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        {...register}
        disabled={disabled}
      ></Input>
    </div>
  );
};
