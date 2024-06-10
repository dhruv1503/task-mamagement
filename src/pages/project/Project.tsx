import { FunctionComponent, useState } from "react";
import { SidebarLayout } from "../../layout/SidebarLayout/SidebarLayout";
import { useParams } from "react-router-dom";
// import { useParams } from "react-router-dom";
import { IProject } from "../../interface/Project.interface";
import { useDispatch, useSelector } from "react-redux";
import { AddTask } from "../../components/AddTask/AddTask";
import { PlusIcon} from "@heroicons/react/20/solid";
import { TrashIcon } from "@heroicons/react/24/outline";

type CatgeoryParams = {
  projectName: string;
};

export const Project: FunctionComponent = () => {
  const { projectName } = useParams<CatgeoryParams>();
  const projectData = useSelector((state: any) => state.projects);
  const [addTask, setAddTask] = useState<boolean>(false);
  const dispatch = useDispatch()

  const projects: Array<IProject> | undefined = projectData;
  let requiredProjects: IProject | undefined;
  if (projects) {
    requiredProjects = projects.find((project) => project.name === projectName);
  }

  return (
    <SidebarLayout>
      <h1 className="text-2xl">{projectName?.split("_").join(" ")}</h1>
      <section className="mt-10">
        {requiredProjects?.tasks && requiredProjects.tasks.length > 0 ? (
          requiredProjects.tasks.map((task, index) => {
            return (
              <section
                className="group max-w-[90%] w-full border-b border-b-gray-300 flex items-center justify-between px-4 py-2 rounded"
                key={index}
              >
                <section>
                  <p className="text-md">{task.title}</p>
                  <p className="text-sm font-light mt-1 text-gray-500">
                    {task.description}
                  </p>
                </section>
                <section className="visible md:group-hover:visible md:invisible">
                  <button className="rounded p-2 hover:bg-slate-100">
                   <TrashIcon className="h-4 w-4"/>
                  </button>
                </section>
              </section>
            );
          })
        ) : (
          <section className="flex flex-col items-center">
            <div>
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" width="100%" height="100%">
  {/* <!-- Main task box --> */}
  <g transform="translate(0, 0)">
    <path d="M111.941,249.169H10.275a10.288,10.288,0,0,1-10.277-10.277V176.276A10.288,10.288,0,0,1,10.275,166H111.941a10.288,10.288,0,0,1,10.277,10.276v62.616A10.288,10.288,0,0,1,111.941,249.169Z" transform="translate(-1 -66)" fill="#e6e6e6"/>
    <path d="M71.548,241.104H17.423a9.636,9.636,0,0,1-9.625-9.625v-47.79a9.636,9.636,0,0,1,9.625-9.625h87.373a9.636,9.636,0,0,1,9.625,9.625v14.543A42.92,42.92,0,0,1,71.548,241.104Z" transform="translate(-1 -66)" fill="#fff"/>
    <path d="M96.078,200.233H26.137a2.281,2.281,0,1,1,0-4.562H96.078a2.281,2.281,0,1,1,0,4.562Z" transform="translate(-1 -66)" fill="#636bff"/>
    <path d="M37.078,209.246H26.137a2.281,2.281,0,0,1,0-4.562H37.078a2.281,2.281,0,0,1,0,4.562Z" transform="translate(-1 -66)" fill="#636bff"/>
    <path d="M56.455,218.259H26.137a2.281,2.281,0,0,1,0-4.562H56.455a2.281,2.281,0,0,1,0,4.562Z" transform="translate(-1 -66)" fill="#636bff"/>
  </g>
  {/* <!-- Tilted task box --> */}
  <g transform="rotate(-10, 100, 100) translate(80, 80)">
    <path d="M111.941,249.169H10.275a10.288,10.288,0,0,1-10.277-10.277V176.276A10.288,10.288,0,0,1,10.275,166H111.941a10.288,10.288,0,0,1,10.277,10.276v62.616A10.288,10.288,0,0,1,111.941,249.169Z" transform="translate(-1 -66)" fill="#e6e6e6"/>
    <path d="M71.548,241.104H17.423a9.636,9.636,0,0,1-9.625-9.625v-47.79a9.636,9.636,0,0,1,9.625-9.625h87.373a9.636,9.636,0,0,1,9.625,9.625v14.543A42.92,42.92,0,0,1,71.548,241.104Z" transform="translate(-1 -66)" fill="#fff"/>
    <path d="M96.078,200.233H26.137a2.281,2.281,0,1,1,0-4.562H96.078a2.281,2.281,0,1,1,0,4.562Z" transform="translate(-1 -66)" fill="#636bff"/>
    <path d="M37.078,209.246H26.137a2.281,2.281,0,0,1,0-4.562H37.078a2.281,2.281,0,0,1,0,4.562Z" transform="translate(-1 -66)" fill="#636bff"/>
    <path d="M56.455,218.259H26.137a2.281,2.281,0,0,1,0-4.562H56.455a2.281,2.281,0,0,1,0,4.562Z" transform="translate(-1 -66)" fill="#636bff"/>
  </g>
</svg>
</div>

<p className="text-[#636bff]">No Tasks added to the category yet.</p>
      </section>

        )}
      </section>
      {/* <section onClick={() => (dispatch({type: "ADD_TASK", projectName : requiredProjects?.name}))}>Add Task section</section> */}
      {!addTask && (
        <button
          className="my-2 px-3 py-2 bg-[#636bff] text-neutral-50 hover:bg-slate-200 hover:text-slate-00 rounded transition-colors ease-in-out delay-75 duration-300 active:bg-slate-400 active:scale-y-95 active:scale-x-95"
          onClick={() => setAddTask(true)}
        >
          {" "}
          <PlusIcon
            className="inline-block align-baseline"
            height="15px"
            width="15px"
          />{" "}
          Add Task
        </button>
      )}
      {addTask && (
        <AddTask
          project={projectName}
          onCancelClick={() => setAddTask(false)}
          onSubmitClick={(value) => {
            dispatch({type : "ADD_TASK", task :  {...value, project : projectName}});
            setAddTask(false)
          }}
        />
      )}
    </SidebarLayout>
  );
};
