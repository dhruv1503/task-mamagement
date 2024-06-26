import React, { FunctionComponent, useState } from "react";
import { Input } from "../Input/Input";
import priorityJson from "../../data/priority.json";
import { IPriority } from "../../interface/Priority.interface";
import { DropDown } from "../Dropdown/DropDown";
import { DateChangeEvent, DatePicker } from "../DatePicker/DatePicker";
import {useSelector } from "react-redux";
import { IProject } from "../../interface/Project.interface";

type AddTaskProps = {
  onCancelClick?: React.MouseEventHandler<HTMLButtonElement>;
  onSubmitClick?: (value : object) => void;
  project?: string;
};

export const AddTask: FunctionComponent<AddTaskProps> = ({
  onCancelClick,
  onSubmitClick = () => {},
  project = "Unassigned",
}) => {
  const [title, setTitle] = useState<string | undefined>("");
  const [description, setDescription] = useState<string | undefined>("");
  const [priority, setPriority] = useState<string | number | undefined>();
  const [selectedProject, setSelectedProject] = useState("");
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
  const priorityData: Array<IPriority> = priorityJson;
  const projects = useSelector(
    (state: { user: Object; projects: Array<IProject> }) => state.projects
  );

  const projectList = projects.map((project) => ({
    id: project.name,
    value: project.name.split("_").join(" "),
    prefix: "#",
  }));

  const startDateChange = (dateChangeEvent: DateChangeEvent) => {
    setStateDate(dateChangeEvent);
  };

  const endDateChange = (dateChangeEvent: DateChangeEvent) => {
    setEndDate(dateChangeEvent);
  };

  const handleProjectChange = (value : string | number | undefined) => {
    if(!value){
        setSelectedProject("")
    }
    const requiredProject = projectList.find((project) => project.id === value);
    if (requiredProject) {
      setSelectedProject(requiredProject?.value);
    } else {
      setSelectedProject("");
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmitClick({title, description, priority});
  };

  return (
    <section className="border border-gray-300 rounded max-w-[80%] w-full px-4 py-3 mt-3 shadow-lg">
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
              } else {
                setTitle("");
              }
            }}
          />
          <Input
            className="w-full focus:outline-none p-1"
            type="text"
            name="Description"
            placeholder="Description"
            defaultValue=""
            onChange={(event) => {
              if (event.target.value) {
                setDescription(event.target.value);
              } else {
                setDescription("");
              }
            }}
          />
          <section className="flex gap-2 items-center">
            <DropDown
              options={priorityData}
              prefix="P "
              placeholder="Priority"
              value={priority}
              onSelect={setPriority}
            />
          </section>
        </div>

        <div className="border-b border-b-gray-300 pb-3 mb-3">
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
        {/* <div className="border-b border-b-gray-300 pb-3 mb-3">
            <section className="max-w-60">
          <DropDown
            value={selectedProject}
            placeholder="Project"
            prefix="#"
            options={projectList}
            onSelect={handleProjectChange}
          />
          </section>
        </div> */}
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
