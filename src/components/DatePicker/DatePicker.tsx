import { ChangeEvent, FunctionComponent, useState } from "react";
import { Input } from "../Input/Input";

export type DateChangeEvent = {
    dateObject: Date;
    dateInMilliseconds: number;
    dateString: string;
  };
  
  type DateProps = {
    onChange?: (event: DateChangeEvent) => void;
    value?: string;
    className? : string,
    name? : string,
    label? : string
  };
  
  export const DatePicker: FunctionComponent<DateProps> = ({ onChange = () => {}, className, name, label }) => {
    const [date, setDate] = useState<string | undefined>();
  
    const dateChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      const newDate = event.target.value;
  
      if (newDate) {
        setDate(newDate);
  
        const dateObject = new Date(newDate);
        const dateInMilliseconds = dateObject.getTime();
        const dateString = newDate;
  
        const dateChangeEvent: DateChangeEvent = {
          dateObject,
          dateInMilliseconds,
          dateString
        };
  
        onChange(dateChangeEvent);
      }
    };
  
    return <Input label={label} name={name} className={className} type="date" value={date} onChange={dateChangeHandler} />;
  };