import { FunctionComponent, ReactNode } from "react";
import data from "../../data/data.json";
import { IProject } from "../../interface/Project.interface";
import { Link} from "react-router-dom";
import { PlusIcon } from "@heroicons/react/20/solid";

type SidebarProps = {
  children?: ReactNode;
};

export const Sidebar: FunctionComponent<SidebarProps> = () => {
  const projects: Array<IProject> | null = data.projects;
  const user = data.user;
  return (
    <aside className="max-h-screen h-screen px-3 py-4 border bg-slate-50 hidden md:block md:col-span-3 transition-all duration-150 ease-in-out lg:col-span-2 p-4 shadow-lg">
      <section>
        <p>Hello, {user.firstName}</p>
      </section>
      <section className="flex flex-col gap-2">
        <button className="my-2 px-3 py-2 hover:bg-slate-200 rounded transition-colors ease-in-out delay-75 duration-300 active:bg-slate-400 active:scale-y-95 active:scale-x-95 ">
          {" "}
          <PlusIcon
            className="inline-block align-baseline"
            height="15px"
            width="15px"
          />{" "}
          Add Task
        </button>
        {/* <button className="my-2 px-3 py-2 hover:bg-slate-200 rounded transition-colors ease-in-out delay-75 duration-300 active:bg-slate-400 active:scale-y-95 active:scale-x-95 " onClick={() => (navigate("/"))}>
          {" "}
          <HomeIcon
            className="inline-block align-baseline"
            height="15px"
            width="15px"
          />{" "}
          Home
        </button> */}
      </section>
      <p className="text-md font-semibold">My Projects</p>
      <ul>
        {projects ? (
          projects.map((project) => (
            <Link to={`/project/${project.name}`}>
              <li className="text-sm p-2 text-gray-700 hover:bg-slate-200 rounded transition-colors ease-in-out duration-100">
                {project.name.split("_").join(" ")}
              </li>
            </Link>
          ))
        ) : (
          <></>
        )}
      </ul>
    </aside>
  );
};
