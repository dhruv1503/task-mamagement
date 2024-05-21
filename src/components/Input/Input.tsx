import  {
  FunctionComponent,
  ChangeEvent,
  ChangeEventHandler,
  useState,
} from "react";

type InputProps = {
  label?: string;
  placeholder?: string;
  name?: string;
  type?: "text" | "number" | "password" | "email" | "date" | "datetime";
  value?: string | number;
  error?: boolean;
  errorMessage?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
  className?: string;
  defaultValue?: string | number;
};

export const Input: FunctionComponent<InputProps> = ({
  label,
  type,
  placeholder,
  value,
  name,
  // error,
  // errorMessage,
  onChange,
  disabled,
  className,
  defaultValue
}) => {
  // const [input, setInput] = useState(defaultValue)

  // const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   setInput(event.target.value);
  //   if (onChange) {
  //     onChange(event);
  //   }
  // };

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name}>{label}</label>
      <input
        className={className}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
};
