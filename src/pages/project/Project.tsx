import { FunctionComponent, useState } from "react";
import { SidebarLayout } from "../../layout/SidebarLayout/SidebarLayout";
import { useParams } from "react-router-dom";
// import { useParams } from "react-router-dom";
import data from "../../data/data.json";
import { ITask } from "../../interface/Task.interface";
import { IProject } from "../../interface/Project.interface";
import { useDispatch, useSelector } from "react-redux";
import { AddTask } from "../../components/AddTask/AddTask";

type CatgeoryParams = {
  projectName: string;
};

export const Project: FunctionComponent = () => {
  const { projectName } = useParams<CatgeoryParams>();
  const dispatch = useDispatch();
  const projectData = useSelector((state : any) => (state.projects));
  const [addTask, setAddTask] = useState<boolean>(false)


  const projects: Array<IProject> | undefined = projectData;
  let requiredProjects : IProject | undefined 
  if(projects){
    requiredProjects = projects.find(
        (project) => project.name === projectName
      );
  }
 
  return (
    <SidebarLayout>
      <h1 className="text-2xl">{projectName?.split("_").join(" ")}</h1>
      <section className="mt-10">
        {requiredProjects?.tasks && requiredProjects.tasks.length > 0 ? (
          requiredProjects.tasks.map((task, index) => {
            return (
              <section
                className="max-w-[90%] w-full border-b border-b-gray-300 px-4 py-2 rounded"
                key={index}
              >
                <p className="text-md">{task.title}</p>
                <p className="text-sm font-light mt-1 text-gray-500">
                  {task.description}
                </p>
              </section>
            );
          })
        ) : (
          <p>No task available</p>
        )}
      </section>
      {/* <section onClick={() => (dispatch({type: "ADD_TASK", projectName : requiredProjects?.name}))}>Add Task section</section> */}
      {!addTask && <section onClick={() => (setAddTask(true))}>Add Task section</section>}
      {addTask && <AddTask onCancelClick={() => (setAddTask(false))}/> }
      
    </SidebarLayout>
  );
};
