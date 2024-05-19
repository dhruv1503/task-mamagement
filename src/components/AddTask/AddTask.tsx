import React, { FunctionComponent, useEffect, useState } from "react";
import { Input } from "../Input/Input";
import priority from "../../data/priority.json";
import { IPriority } from "../../interface/Priority.interface";
import { v4 as uuid } from "uuid";
import { DropDown } from "../Dropdown/DropDown";
import { DateChangeEvent, DatePicker } from "../DatePicker/DatePicker";

type AddTaskProps = {
  onCancelClick?: React.MouseEventHandler<HTMLButtonElement>;
  onSubmitClick?: (event: React.FormEvent<HTMLFormElement>) => void;
};

export const AddTask: FunctionComponent<AddTaskProps> = ({
  onCancelClick,
  onSubmitClick = () => {},
}) => {
  const [title, setTitle] = useState<string | undefined>("");
  const [startDate, setStateDate] = useState<DateChangeEvent>({
    dateObject: new Date(),
    dateInMilliseconds: 0,
    dateString: "",
  });
  const [endDate, setEndDate] = useState<DateChangeEvent>({
    dateObject: new Date(),
    dateInMilliseconds: 0,
    dateString: "",
  });
  const priortyData: Array<IPriority> = priority;

  const startDateChange = (dateChangeEvent: DateChangeEvent) => {
    setStateDate(dateChangeEvent);
  };

  const endDateChange = (dateChangeEvent: DateChangeEvent) => {
    setEndDate(dateChangeEvent);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmitClick(event);
    console.log(event);
  };

  return (
    <section className="border border-gray-300 rounded max-w-[80%] w-full px-4 py-3 mt-3">
      <form onSubmit={handleSubmit}>
        <div className="border-b border-b-gray-300 pb-3"> 
        <Input
          className="w-full focus:outline-none p-1"
          type="text"
          name="title"
          placeholder="Title"
          value={title}
          onChange={(event) => {
            if (event.target.value) {
              setTitle(event.target.value);
            }
            else{
                setTitle("")
            }
          }}
        />
        <Input
          className="w-full focus:outline-none p-1"
          type="text"
          name="Description"
          placeholder="Description"
          defaultValue=""
          onChange={(e) => e.target.value}
        />
        <section className="flex gap-2 items-center">
          <DropDown options={priortyData} prefix="P " placeholder="Priority" />
        </section>
        </div>
        <div className="border-b border-b-gray-300 pb-3">
        <section className="flex gap-2 flex-col ">
        <DatePicker
            name="start-date"
            value={startDate.dateString}
            onChange={startDateChange}
            label={"Start date"}
            className="max-w-40 border border-gray-500 p-1 rounded"

          />
          <DatePicker
            name="end-date"
            value={endDate.dateString}
            onChange={endDateChange}
            label="End Date"
            className="max-w-40 border border-gray-500 p-1 rounded"
          />
          </section>
          </div>
          <div className="py-3">
        <button
          className="rounded px-2 py-1 text-slate-900 bg-slate-100 mx-2"
          onClick={onCancelClick}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded px-2 py-1 bg-slate-900 text-slate-100 mx-2 disabled:cursor-not-allowed disabled:opacity-10"
          disabled={!title}
        >
          Submit
        </button>
        </div>
      </form>
    </section>
  );
};
